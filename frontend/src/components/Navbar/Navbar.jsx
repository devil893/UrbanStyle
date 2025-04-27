import React,{useContext, useRef, useState, useEffect} from 'react';
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import {Link, useNavigate} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import hamburger from './../../assets/hamburger.png'
import profile_icon from './../../assets/profile_icon.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems, all_product} = useContext(StoreContext);
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

    return ( 
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>UrbanStyle</p>
            </div>
            <img className="nav-hamburger" onClick={hamburger_toggle} src={hamburger} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>setMenu("home")}><Link style={{textDecoration: 'none'}} to="/" className={menu==="home"?"active":""}>Home</Link></li>
                <li onClick={()=>setMenu("polo")}><Link style={{textDecoration: 'none'}} to="/polo" className={menu==="polo"?"active":""}>Polo</Link></li>
                <li onClick={()=>setMenu("tshirts")}><Link style={{textDecoration: 'none'}} to="/tshirts" className={menu==="tshirts"?"active":""}>T-Shirts</Link></li>
                <li onClick={()=>setMenu("formalshirts")}><Link style={{textDecoration: 'none'}} to="/formalshirts" className={menu==="formalshirts"?"active":""}>Formal Shirts</Link></li>
            </ul>
            
            <div className="nav-search" ref={searchRef}>
                <div className="search-input-container">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowResults(true);
                        }}
                        onFocus={() => setShowResults(true)}
                    />
                    <div className="search-icon"></div>
                </div>
                
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
     );
}

export default Navbar;