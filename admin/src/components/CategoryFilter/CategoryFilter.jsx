import React, { useState, useEffect } from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ products, onFilterChange }) => {
    const [activeTab, setActiveTab] = useState("All");
    const tabs = ["All", "Polo", "T-Shirts", "Formal Shirts"];

    const getCategoryCount = (category) => {
        if (category === "All") return products.length;
        
        const categoryMap = {
            "Polo": "polo",
            "T-Shirts": "tshirts",
            "Formal Shirts": "formalshirts"
        };
        
        return products.filter(item => item.category === categoryMap[category]).length;
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        
        if (tab === "All") {
            onFilterChange(products);
            return;
        }
        
        const categoryMap = {
            "Polo": "polo",
            "T-Shirts": "tshirts",
            "Formal Shirts": "formalshirts"
        };
        
        const filteredProducts = products.filter(item => 
            item.category === categoryMap[tab]
        );
        
        onFilterChange(filteredProducts);
    };

    return (
        <div className="category-filter">
            <h3>Filter by Category</h3>
            <div className="category-tabs">
                {tabs.map((tab) => (
                    <div 
                        key={tab}
                        className={`category-tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        <span>{tab}</span>
                        <span className="category-count">{getCategoryCount(tab)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;

