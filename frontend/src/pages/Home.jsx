import React from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";


const Shop = () => {
    return ( 
        <div>
            <MainCarousel />
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
     );
}
 
export default Shop;