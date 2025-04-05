import React from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const ProductsCategory = () => {
  const { category, subcategory } = useParams();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        {subcategory 
          ? `${category} / ${subcategory.replaceAll('-', ' ')}` 
          : category.replaceAll('-', ' ')}
      </h1>
      <Product category={category} subcategory={subcategory} />
    </div>
  );
};

export default ProductsCategory;