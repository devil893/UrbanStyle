import React, {createContext, useEffect, useState} from 'react';
import {toast} from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [coupon, setCoupon] = useState({ code: "", value: 0, isValid: false });
    const backend_url = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('token');

    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(`${backend_url}/api/products`);
            const json = await response.json();
            if(response.ok){
                setAll_product(json);
            }
            else toast.error(json.error);
            
            if(localStorage.getItem('token')){
                const response = await fetch(`${backend_url}/api/cart/getCart`,{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body:"",
                });
                const json = await response.json();
                if(response.ok) setCartItems(json);
                else toast.error(json.error);
            }
        };
        fetchData();
    },[])

    const addToCart = async (itemId) =>{
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(localStorage.getItem('token')){
            const response = await fetch(`${backend_url}/api/cart/addToCart`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body:JSON.stringify({'itemId':itemId}),
            });
            const json = await response.json();
            if(!response.ok){
                toast.error(json.error);
            }
        }
    }

    const removeFromCart = async (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('token')){
            const response = await fetch(`${backend_url}/api/cart/removeFromCart`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body:JSON.stringify({'itemId':itemId}),
            });
            const json = await response.json();
            if(!response.ok){
                toast.error(json.error);
            }
        }
    }

    const validateCoupon = async (code) => {
        try {
            const response = await fetch(`${backend_url}/api/coupons/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });
            
            const data = await response.json();
            
            if (response.ok && data.valid) {
                setCoupon({
                    code: data.code,
                    value: data.value,
                    isValid: true
                });
                toast.success(`Coupon applied: $${data.value} discount`);
                return true;
            } else {
                setCoupon({ code: "", value: 0, isValid: false });
                toast.error(data.error || "Invalid coupon code");
                return false;
            }
        } catch (error) {
            toast.error("Error validating coupon");
            return false;
        }
    };
    
    const clearCoupon = () => {
        setCoupon({ code: "", value: 0, isValid: false });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };
    
    const getCouponDiscount = () => {
        return coupon.isValid ? coupon.value : 0;
    };
    
    const getTotalWithDiscount = () => {
        const subtotal = getTotalCartAmount();
        const discount = getCouponDiscount();
        return Math.max(0, subtotal - discount);
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) totalItem += cartItems[item];
        }
        return totalItem;
    };

    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems,
        validateCoupon,
        clearCoupon,
        coupon,
        getCouponDiscount,
        getTotalWithDiscount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
