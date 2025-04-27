import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './CartItems.css';
import { StoreContext } from "../../context/StoreContext";
import bin from './../../assets/recycle-bin.png';

const CartItems = () => {
    const {
        all_product,
        cartItems,
        removeFromCart,
        getTotalCartAmount,
        validateCoupon,
        clearCoupon,
        coupon,
        getCouponDiscount,
        getTotalWithDiscount
    } = useContext(StoreContext);
    const [couponCode, setCouponCode] = useState("");
    const [isApplying, setIsApplying] = useState(false);
    const navigate = useNavigate();
    
    return ( 
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e)=>{
                if(cartItems[e.id]>0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="carticon-product-icon"/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={bin} onClick={()=>{removeFromCart(e.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            
            <div className="cartitems-down">
                <div className="cartitems-total card">
                    <h1>Cart Totals</h1>
                    
                    {/* Coupon Section */}
                    <div className="coupon-section">
                        {!coupon.isValid ? (
                            <>
                                <div className="coupon-input-container">
                                    <input 
                                        type="text" 
                                        placeholder="Enter coupon code" 
                                        value={couponCode} 
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="coupon-input"
                                    />
                                    <button 
                                        className="apply-coupon-btn" 
                                        onClick={async () => {
                                            if (!couponCode.trim()) return;
                                            setIsApplying(true);
                                            await validateCoupon(couponCode);
                                            setIsApplying(false);
                                            setCouponCode("");
                                        }}
                                        disabled={isApplying || !couponCode.trim()}
                                    >
                                        {isApplying ? "Applying..." : "Apply Coupon"}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="applied-coupon">
                                <div className="applied-coupon-info">
                                    <span className="coupon-label">Applied Coupon:</span>
                                    <span className="coupon-code">{coupon.code}</span>
                                    <span className="coupon-value">-${coupon.value}.00</span>
                                </div>
                                <button 
                                    className="remove-coupon-btn" 
                                    onClick={clearCoupon}
                                >
                                    Remove
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}.00</p>
                        </div>
                        <hr />
                        
                        {coupon.isValid && (
                            <>
                                <div className="cartitems-total-item discount">
                                    <p>Coupon Discount</p>
                                    <p>-${getCouponDiscount()}.00</p>
                                </div>
                                <hr />
                            </>
                        )}
                        
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>${getTotalCartAmount()===0?0:1}.00</p>
                        </div>
                        <hr />
                        
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()===0?0:getTotalWithDiscount()+1}.00</h3>
                        </div>
                    </div>
                    
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
