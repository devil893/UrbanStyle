import React from 'react';
import { Link } from 'react-router-dom';

const HomeSectionCard = ({ product }) => {
    return (
        <Link 
            to={`/product/${product.id}`}
            state={{ product }} // Pass the product data via state
            className="cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-[15rem] h-[22rem] mx-3 border hover:shadow-xl transition-shadow duration-300"
        >
            <div className="h-[13rem] w-[15rem] flex justify-center items-center">
                <img
                    className="object-cover h-full w-full"
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300';
                    }}
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <div className="mt-2 flex justify-center items-center gap-2">
                    <p className="text-md font-bold text-black">${product.discountedPrice || product.price}</p>
                    {product.discountedPrice && (
                        <p className="text-sm text-gray-500 line-through">${product.price}</p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default HomeSectionCard;