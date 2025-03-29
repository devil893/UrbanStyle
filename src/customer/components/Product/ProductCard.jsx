import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-lg">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt={title}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
