import React, { useEffect, useState } from "react";
import './CSS/MyOrders.css'
import cart_icon from './../assets/cart_icon.png';
import { toast } from 'react-toastify';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    const backend_url = process.env.REACT_APP_API_URL;
    
    const fetchOrders = async () => {
        setIsLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${backend_url}/api/orders/userorders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            
            const json = await response.json();
            
            if (response.ok) {
                // Extract orders array from response
                const ordersData = json.orders || [];
                setOrders(ordersData);
            } else {
                setError(json.error || 'Failed to fetch orders');
                toast.error(json.error || 'Failed to fetch orders');
            }
        } catch (err) {
            setError('Error connecting to server');
            toast.error('Error connecting to server');
            console.error('Error fetching orders:', err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return ( 
        <div className="my-orders">
            <h2>My Orders</h2>
            <div className="container">
                {isLoading ? (
                    <div className="loading-message">
                        <p>Loading your orders...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>{error}</p>
                        <button onClick={fetchOrders}>Try Again</button>
                    </div>
                ) : orders.length === 0 ? (
                    <div className="empty-orders">
                        <p>You haven't placed any orders yet.</p>
                        <a href="/shop" className="shop-now-btn">Shop Now</a>
                    </div>
                ) : (
                    // Render orders when available
                    orders.map((order, index) => {
                        return (
                            <div key={order._id || index} className='my-orders-order card'>
                                <img src={cart_icon} alt="Order" />
                                <p>{order.items && Array.isArray(order.items) ? 
                                    order.items.map((item, itemIndex) => {
                                        if (itemIndex === order.items.length-1) {
                                            return `${item.name} x ${item.quantity}`
                                        } else {
                                            return `${item.name} x ${item.quantity}, `
                                        }
                                    }) : 'No items'}</p>
                                <p>PKR {order.amount ? order.amount.toLocaleString('en-PK') : '0'}</p>
                                <p>Items: {order.items && Array.isArray(order.items) ? order.items.length : 0}</p>
                                <p><span>&#x25cf;</span> <b>{order.status || 'Processing'}</b></p>
                                <button onClick={fetchOrders}>Track Order</button>
                            </div>
                        )
                    })
                )}
            </div>
        </div> 
    );
}
 
export default MyOrders;