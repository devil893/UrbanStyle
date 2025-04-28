import React from "react";
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import add_product_icon from '../../assets/Product_Cart.svg';
import list_product_icon from '../../assets/Product_list_icon.svg';
import order_icon from '../../assets/order_icon.png';
import review_icon from '../../assets/review_icon.svg';
import coupon_icon from '../../assets/coupon_icon.svg';

const Sidebar = () => {
    const { isAuthenticated, isAdmin } = useAuth();
    const location = useLocation();
    
    // Only render sidebar for authenticated admin users
    if (!isAuthenticated || !isAdmin) {
        return null;
    }
    
    // Check if a path is the current active route
    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return ( 
        <div className="sidebar">
            <Link to={'/listproduct'} style={{textDecoration:'none'}}>
                <div className={`sidebar-item ${isActive('/listproduct') ? 'active' : ''}`}>
                    <img src={list_product_icon} alt="" />
                    <p>Product List</p>
                </div>
            </Link>
            <Link to={'/addproduct'} style={{textDecoration:'none'}}>
                <div className={`sidebar-item ${isActive('/addproduct') ? 'active' : ''}`}>
                    <img src={add_product_icon} alt="" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listorder'} style={{textDecoration:'none'}}>
                <div className={`sidebar-item ${isActive('/listorder') ? 'active' : ''}`}>
                    <img src={order_icon} alt="" />
                    <p>Orders</p>
                </div>
            </Link>
            <Link to={'/reviews'} style={{textDecoration:'none'}}>
                <div className={`sidebar-item ${isActive('/reviews') ? 'active' : ''}`}>
                    <img src={review_icon} alt="" />
                    <p>Manage Reviews</p>
                </div>
            </Link>
            <Link to={'/managecoupons'} style={{textDecoration:'none'}}>
                <div className={`sidebar-item ${isActive('/managecoupons') ? 'active' : ''}`}>
                    <img src={coupon_icon} alt="" />
                    <p>Manage Coupons</p>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;
