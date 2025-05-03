import React,{useContext, useRef, useState, useEffect} from 'react';
import './Navbar.css'
import cart_icon from '../../assets/cart_icon.png'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { DarkModeContext } from '../../context/DarkModeContext';
import hamburger from './../../assets/hamburger.png'
import profile_icon from './../../assets/profile_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems, all_product} = useContext(StoreContext);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const menuRef = useRef();
    const searchRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const hamburger_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
    }

    const logout=()=>{
        localStorage.removeItem('token');
        window.location.replace('/');
    }

    const navigate = useNavigate();
    
    // Filter products as user types
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
            return;
        }
        
        const filtered = all_product
            .filter(product => 
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(0, 5); // Limit to 5 results
            
        setSearchResults(filtered);
    }, [searchTerm, all_product]);
    
    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    // Handle search result click
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
        setSearchTerm("");
        setShowResults(false);
    };

    // Handle search form submit
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
            setShowResults(false);
        }
    };

    // Handle key press in search input
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit(e);
        }
    };

    return ( 
        <>
            <div className='shipping-banner'>
                <p>Free Shipping Over Rs. 5000</p>
            </div>
            <div className='navbar'>
            <div className="nav-logo">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <p>Urban<span>Style</span></p>
                </Link>
            </div>
            
            <img className="nav-hamburger" onClick={hamburger_toggle} src={hamburger} alt="" />
            
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>setMenu("home")}><Link style={{textDecoration: 'none'}} to="/" className={menu==="home"?"active":""}>Home</Link></li>
                <li onClick={()=>setMenu("polo")}><Link style={{textDecoration: 'none'}} to="/polo" className={menu==="polo"?"active":""}>Polo</Link></li>
                <li onClick={()=>setMenu("tshirts")}><Link style={{textDecoration: 'none'}} to="/tshirts" className={menu==="tshirts"?"active":""}>T-Shirts</Link></li>
                <li onClick={()=>setMenu("formalshirts")}><Link style={{textDecoration: 'none'}} to="/formalshirts" className={menu==="formalshirts"?"active":""}>Formal Shirts</Link></li>
            </ul>
            
            <div className="nav-search" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="search-input-container">
                    <input 
                        type="text" 
                        placeholder="Search & press Enter..." 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowResults(true);
                        }}
                        onFocus={() => setShowResults(true)}
                        onKeyPress={handleKeyPress}
                    />
                    <div 
                        className="search-icon" 
                        onClick={handleSearchSubmit}
                        title="Search"
                    ></div>
                </form>
                
                {showResults && searchResults.length > 0 && (
                    <ul className="search-results">
                        {searchResults.map((item) => (
                            <li 
                                key={item.id} 
                                onClick={() => handleProductClick(item.id)}
                            >
                                <div className="search-result-item">
                                    <img src={item.image} alt={item.name} className="search-result-image" />
                                    <span className="search-result-name">{item.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            
            <div className="nav-login-cart">
                <div className="dark-mode-toggle" onClick={toggleDarkMode} title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
                    {darkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </div>
                {!localStorage.getItem('token')?<Link to="/login"><button>Login</button></Link>:
                <div className='navbar-profile'>
                    <img src={profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                       <li onClick={()=>navigate("/myorders")}>Orders</li>
                       <hr />
                       <li onClick={logout}>Logout</li>
                    </ul>
                </div>}
                <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        </>
     );
}

export default Navbar;
