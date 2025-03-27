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
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'> 
                <h2 className="text-xl font-bold">Men's Polos</h2>
                <HomeSectionCarousel products={mensPolos} />

                <h2 className="text-xl font-bold">Tops</h2>
                <HomeSectionCarousel products={tops} />

                <h2 className="text-xl font-bold">Shirts</h2>
                <HomeSectionCarousel products={shirts} />

                <h2 className="text-xl font-bold">Jeans</h2>
                <HomeSectionCarousel products={jeans} />
            </div>
        </div>
    );
};

export default HomePage;
