import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import products from '../../data'; // Ensure correct path

const HomePage = () => {
    // Filter products by category
    const mensPolos = products.filter(product => product.category === 'Mens Polos');
    const tops = products.filter(product => product.category === 'Tops');
    const shirts = products.filter(product => product.category === 'Shirts');
    const jeans = products.filter(product => product.category === 'Jeans');

    return (
        <div>
            <MainCarousel />
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10 bg-gray-100">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center 
                   bg-gray-200 px-4 py-3 shadow-md rounded-md
                   relative pb-2 after:absolute after:content-[''] 
                   after:w-24 after:h-1 after:bg-gradient-to-r after:from-red-500 after:to-orange-400 
                   after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Men's Polo Shirts
                </h2>
                <HomeSectionCarousel products={mensPolos} />

                <h2 className="text-3xl font-extrabold text-gray-900 text-center 
                   bg-gray-200 px-4 py-3 shadow-md rounded-md
                   relative pb-2 after:absolute after:content-[''] 
                   after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-indigo-400 
                   after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Men's T-Shirts
                </h2>
                <HomeSectionCarousel products={tops} />

                <h2 className="text-3xl font-extrabold text-gray-900 text-center 
                   bg-gray-200 px-4 py-3 shadow-md rounded-md
                   relative pb-2 after:absolute after:content-[''] 
                   after:w-24 after:h-1 after:bg-gradient-to-r after:from-green-500 after:to-teal-400 
                   after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Men's Formal & Casual Shirts
                </h2>
                <HomeSectionCarousel products={shirts} />

                <h2 className="text-3xl font-extrabold text-gray-900 text-center 
                   bg-gray-200 px-4 py-3 shadow-md rounded-md
                   relative pb-2 after:absolute after:content-[''] 
                   after:w-24 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-400 
                   after:bottom-0 after:left-1/2 after:-translate-x-1/2">
                    Men's Jeans & Denim
                </h2>
                <HomeSectionCarousel products={jeans} />
            </div>
        </div>
    );
};

export default HomePage;
