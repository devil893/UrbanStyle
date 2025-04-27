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
    
    // Filter states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
    const [filteredResults, setFilteredResults] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    
    // Available categories
    const categories = [
        { id: "tshirts", name: "T-Shirts" },
        { id: "polo", name: "Polo" },
        { id: "formalshirts", name: "Formal Shirts" }
    ];

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
    
    // Apply filters to search results
    useEffect(() => {
        if (searchResults.length === 0) {
            setFilteredResults([]);
            return;
        }

        let filtered = [...searchResults];
        
        // Apply category filter
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(item => selectedCategories.includes(item.category));
        }
        
        // Apply price range filter
        filtered = filtered.filter(item => 
            item.new_price >= priceRange.min && item.new_price <= priceRange.max
        );
        
        setFilteredResults(filtered);
    }, [searchResults, selectedCategories, priceRange]);
    
    // Handle category filter
    const handleCategoryChange = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };
    
    // Handle price range change
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange({
            ...priceRange,
            [name]: Number(value)
        });
    };
    
    // Clear all filters
    const clearFilters = () => {
        setSelectedCategories([]);
        setPriceRange({ min: 0, max: 200 });
    };
    
    // Toggle filter visibility on mobile
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };
    return (
        <div className="search-results-page">
            <div className="search-results-header">
                <h1>Search Results for "{searchQuery}"</h1>
                <p>{filteredResults.length} products found</p>
                
                <button className="filter-toggle" onClick={toggleFilters}>
                    {showFilters ? "Hide Filters" : "Show Filters"}
                </button>
            </div>
            
            <div className="search-results-container">
                <div className={`filter-sidebar ${showFilters ? 'show' : ''}`}>
                    <div className="filter-section">
                        <h3>Filter By Category</h3>
                        <div className="filter-options">
                            {categories.map(category => (
                                <label key={category.id} className="filter-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category.id)}
                                        onChange={() => handleCategoryChange(category.id)}
                                    />
                                    <span>{category.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="filter-section">
                        <h3>Filter By Price</h3>
                        <div className="price-range">
                            <div className="price-inputs">
                                <div>
                                    <label>Min ($)</label>
                                    <input
                                        type="number"
                                        name="min"
                                        value={priceRange.min}
                                        onChange={handlePriceChange}
                                        min="0"
                                    />
                                </div>
                                <div>
                                    <label>Max ($)</label>
                                    <input
                                        type="number"
                                        name="max"
                                        value={priceRange.max}
                                        onChange={handlePriceChange}
                                        min="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button className="clear-filters" onClick={clearFilters}>
                        Clear All Filters
                    </button>
                </div>
                
                {searchResults.length > 0 ? (
                    <div className="search-results-grid">
                        {filteredResults.map((item, i) => (
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
        </div>
    );
};

export default SearchResults;
