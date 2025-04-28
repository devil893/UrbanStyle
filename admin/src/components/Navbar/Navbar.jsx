import React from "react";
import { useAuth } from "../../context/AuthContext";
import './Navbar.css';
import navlogo from './../../assets/nav-logo.svg';
import profile_icon from './../../assets/profile_icon.png';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { isAuthenticated, isAdmin, logout, loading } = useAuth();
    
    const handleLogout = () => {
        logout();
        navigate("/");
    };
    
    // Don't show login/logout during authentication check
    if (loading) {
        return (
            <div className="navbar">
                <Link to="/">
                    <img src={navlogo} alt="Urban Style Admin" className="nav-logo" />
                </Link>
                <div className="nav-right">
                    <div className="loading-dot"></div>
                </div>
            </div>
        );
    }
    
    return ( 
        <div className="navbar">
            <Link to={isAuthenticated && isAdmin ? "/addproduct" : "/"}>
                <img src={navlogo} alt="Urban Style Admin" className="nav-logo" />
            </Link>
            
            <div className="nav-right">
                {isAuthenticated && isAdmin ? (
                    <>
                        <p className="admin-badge">Admin Panel</p>
                        <button 
                            className="login-condition logout-btn" 
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <img src={profile_icon} alt="Admin" className="nav-profile" />
                    </>
                ) : (
                    <button 
                        className="login-condition" 
                        onClick={() => navigate("/")}
                    >
                        Login
                    </button>
                )}
            </div>
        </div> 
    );
};
 
export default Navbar;
