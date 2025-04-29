import React from "react";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import Popular from "../components/Popular/Popular";
import NewCollections from "../components/NewCollections/NewCollections";


const Shop = () => {
    return ( 
        <div>
            <MainCarousel />
            <Popular/>
            <NewCollections/>
        </div>
     );
}
 
export default Shop;
