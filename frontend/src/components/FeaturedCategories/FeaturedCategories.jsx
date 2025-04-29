import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedCategories.css';

const FeaturedCategories = () => {
    // Category data with images, titles, and links
    const categories = [
        {
            id: 1,
            title: "Men's Collection",
            subtitle: "Premium Styles",
            image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            color: "#2c3e50",
            link: "/category/men"
        },
        {
            id: 2,
            title: "Women's Collection",
            subtitle: "Elegant Designs",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
            color: "#e74c3c",
            link: "/category/women"
        },
        {
            id: 3,
            title: "Accessories",
            subtitle: "Complete Your Look",
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            color: "#3498db",
            link: "/category/accessories"
        },
        {
            id: 4,
            title: "Footwear",
            subtitle: "Step in Style",
            image: "https://images.unsplash.com/photo-1518049362265-d5b2a6b00b37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
            color: "#9b59b6",
            link: "/category/footwear"
        }
    ];

    return (
        <div className="featured-categories">
            <h1>Shop By Category</h1>
            <p className="featured-subtitle">Discover our curated collections</p>
            <hr />
            
            <div className="category-grid">
                {categories.map((category, index) => (
                    <Link to={category.link} key={category.id} className="category-card" style={{'--card-color': category.color}} data-index={index}>
                        <div className="category-image-container">
                            <img src={category.image} alt={category.title} className="category-image" />
                            <div className="category-overlay"></div>
                        </div>
                        <div className="category-content">
                            <h3>{category.title}</h3>
                            <p>{category.subtitle}</p>
                            <span className="category-button">
                                Shop Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;

