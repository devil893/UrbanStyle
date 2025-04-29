import React from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Popular from "../components/Popular/Popular";
import NewCollections from "../components/NewCollections/NewCollections";
import "./HomePage.css";

const Home = () => {
    return ( 
        <div className="home-page">
            <MainCarousel />
            <div className="home-container">
                <section className="home-section popular-section">
                    <Popular/>
                </section>
                <section className="home-section collections-section">
                    <NewCollections/>
                </section>
            </div>
        </div>
     );
}
 
export default Home;
