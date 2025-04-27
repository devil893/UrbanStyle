import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Item from '../components/Item/Item';
import { StoreContext } from '../context/StoreContext';
import './CSS/SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { all_product } = useContext(StoreContext);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        // Get search query from URL
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get('q') || "";
        setSearchQuery(query);

        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }

        // Filter products based on search query
        const results = all_product.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setSearchResults(results);
    }, [location.search, all_product]);

    return (
        <div className="search-results-page">
            <div className="search-results-header">
                <h1>Search Results for "{searchQuery}"</h1>
                <p>{searchResults.length} products found</p>
            </div>

            {searchResults.length > 0 ? (
                <div className="search-results-grid">
                    {searchResults.map((item, i) => (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <h2>No products found</h2>
                    <p>Try a different search term or browse our categories</p>
                    <button onClick={() => navigate('/')}>Back to Home</button>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
