import React, { useState } from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Popular from "../components/Popular/Popular";
import NewCollections from "../components/NewCollections/NewCollections";
import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import TrendsBanner from "../components/TrendsBanner/TrendsBanner";
import NewsletterSubscribe from "../components/NewsletterSubscribe/NewsletterSubscribe";
import QuickView from "../components/QuickView/QuickView";
import "./HomePage.css";

const Home = () => {
    const [quickViewItem, setQuickViewItem] = useState(null);
    
    const handleQuickView = (item) => {
        setQuickViewItem(item);
    };
    
    const closeQuickView = () => {
        setQuickViewItem(null);
    };
    
    return ( 
        <div className="home-page">
            {/* Main Carousel - unchanged as per requirements */}
            <MainCarousel />
            
            <div className="home-container">
                {/* Featured Categories - New section */}
                <section className="home-section featured-section">
                    <FeaturedCategories />
                </section>
                
                {/* Popular Products - Existing section */}
                <section className="home-section popular-section">
                    <Popular onQuickView={handleQuickView} />
                </section>
                
                {/* Trends Banner - New section with parallax effect */}
                <section className="trends-banner-container">
                    <TrendsBanner />
                </section>
                
                {/* New Collections - Existing section */}
                <section className="home-section collections-section">
                    <NewCollections onQuickView={handleQuickView} />
                </section>
                
                {/* Newsletter Subscribe - New section */}
                <section className="home-section newsletter-section">
                    <NewsletterSubscribe />
                </section>
            </div>
            
            {/* Quick View Modal */}
            {quickViewItem && (
                <QuickView item={quickViewItem} onClose={closeQuickView} />
            )}
        </div>
     );
}
 
export default Home;
