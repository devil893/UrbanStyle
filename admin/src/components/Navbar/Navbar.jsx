import React from "react";
import { useAuth } from "../../context/AuthContext";
import './Navbar.css';
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
                <Link to="/" className="navbar-brand">
                    <h1 className="urbanstyle-logo">Urban<span>Style</span></h1>
                </Link>
            </div>
        );
    }
    
    return ( 
        <div className="navbar">
            <Link to={isAuthenticated && isAdmin ? "/addproduct" : "/"} className="navbar-brand">
                <h1 className="urbanstyle-logo">Urban<span>Style</span></h1>
            </Link>
            
            <div className="nav-right">
                {isAuthenticated && isAdmin ? (
                    <>
                        <span className="admin-panel-text">Admin Panel</span>
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
