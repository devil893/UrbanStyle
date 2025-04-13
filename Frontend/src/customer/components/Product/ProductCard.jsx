import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, title, price, image, brand, discountedPrice, discountPersent } = product;

  return (
    <Link 
      to={`/product/${id}`}
      state={{ product }} // Pass the product via state
      className="productCard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-lg"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt={title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300';
          }}
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{brand}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">PKR {discountedPrice}</p>
          <p className="opacity-50 line-through">PKR {price}</p>
          <p className="text-green-600 font-semibold">
            {discountPersent}% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;