import React from 'react';

const HomeSectionCard = ({ product }) => {
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-[15rem] h-[22rem] mx-3 border">
            <div className="h-[13rem] w-[15rem] flex justify-center items-center">
                <img
                    className="object-cover h-full w-full"
                    src={product.image}
                    alt={product.title}
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <p className="mt-2 text-md font-bold text-black">{product.price}</p>
            </div>
        </div>
    );
};

export default HomeSectionCard;
