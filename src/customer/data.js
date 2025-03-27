const products = [
    // Men's Polos (10)
    {
        id: 1,
        image: '/images/polo1.jpg',
        title: "Eternity Premium Men's Contrast Striped Polo Shirt",
        price: "Rs 2,199.00",
        category: "Mens Polos"
    },
    {
        id: 2,
        image: '/images/polo2.jpg',
        title: "Eternity Premium Men's Logo Embroidered Polo Shirt",
        price: "Rs 2,199.00",
        category: "Mens Polos"
    },
    {
        id: 3,
        image: '/images/polo3.jpg',
        title: "Eternity Premium Men's Contrast Collar Polo Shirt",
        price: "Rs 2,199.00",
        category: "Mens Polos"
    },
    {
        id: 4,
        image: '/images/polo4.jpg',
        title: "Eternity Premium Men's Zipper Polo Shirt",
        price: "Rs 2,199.00",
        category: "Mens Polos"
    },
    {
        id: 5,
        image: '/images/polo5.jpg',
        title: "Max 21 Men's Jacquard Trim Polo Shirt",
        price: "Rs 1,499.00",
        category: "Mens Polos"
    },
    {
        id: 6,
        image: '/images/polo6.jpg',
        title: "Max 21 Men's Lion Rampant Polo Shirt",
        price: "Rs 1,399.00",
        category: "Mens Polos"
    },
    {
        id: 7,
        image: '/images/polo7.jpg',
        title: "Max 21 Men's Two-Tone Polo Shirt",
        price: "Rs 1,399.00",
        category: "Mens Polos"
    },
    {
        id: 8,
        image: '/images/polo8.jpg',
        title: "Men's Color-Block Polo Shirt",
        price: "Rs 1,299.00",
        category: "Mens Polos"
    },
    {
        id: 9,
        image: '/images/polo9.jpg',
        title: "Men's Contrast Collar Polo Shirt",
        price: "Rs 1,299.00",
        category: "Mens Polos"
    },
    {
        id: 10,
        image: '/images/polo10.jpg',
        title: "Men's Classic Contrast Polo Shirt",
        price: "Rs 1,299.00",
        category: "Mens Polos"
    },

    // Tops (10)
    {
        id: 11,
        image: '/images/top1.jpg',
        title: "Polo Republica Steve Jobs Quote Tee Shirt",
        price: "Rs 1,499.00",
        category: "Tops"
    },
    {
        id: 12,
        image: '/images/top2.jpg',
        title: "Max 21 Men's Enjoying Great Time Tee Shirt",
        price: "Rs 1,299.00",
        category: "Tops"
    },
    {
        id: 13,
        image: '/images/top3.jpg',
        title: "Max 21 Men's Great Things Take Time Tee Shirt",
        price: "Rs 1,299.00",
        category: "Tops"
    },
    {
        id: 14,
        image: '/images/top4.jpg',
        title: "Max 21 Men's Crew Neck Tee Shirt",
        price: "Rs 1,199.00",
        category: "Tops"
    },
    {
        id: 15,
        image: '/images/top5.jpg',
        title: "Max 21 Men's End Game Tee Shirt",
        price: "Rs 1,299.00",
        category: "Tops"
    },
    {
        id: 16,
        image: '/images/top6.jpg',
        title: "Polo Republica Minimalist Cotton Tee",
        price: "Rs 1,599.00",
        category: "Tops"
    },
    {
        id: 17,
        image: '/images/top7.jpg',
        title: "Casual V-Neck Cotton T-Shirt",
        price: "Rs 1,499.00",
        category: "Tops"
    },
    {
        id: 18,
        image: '/images/top8.jpg',
        title: "Max 21 Men's Long Sleeve Henley Shirt",
        price: "Rs 1,799.00",
        category: "Tops"
    },
    {
        id: 19,
        image: '/images/top9.jpg',
        title: "Classic Crew Neck Tee",
        price: "Rs 1,199.00",
        category: "Tops"
    },
    {
        id: 20,
        image: '/images/top10.jpg',
        title: "Graphic Print Casual T-Shirt",
        price: "Rs 1,399.00",
        category: "Tops"
    },

    // Shirts (10)
    {
        id: 21,
        image: '/images/shirt1.jpg',
        title: "Espada Men's Premium Button Down Casual Shirt",
        price: "Rs 2,199.00",
        category: "Shirts"
    },
    {
        id: 22,
        image: '/images/shirt2.jpg',
        title: "Espada Men's Checkered Casual Shirt",
        price: "Rs 2,199.00",
        category: "Shirts"
    },
    {
        id: 23,
        image: '/images/shirt3.jpg',
        title: "Espada Men's Button Down Casual Shirt",
        price: "Rs 2,199.00",
        category: "Shirts"
    },
    {
        id: 24,
        image: '/images/shirt4.jpg',
        title: "Espada Men's Textured Casual Shirt",
        price: "Rs 2,199.00",
        category: "Shirts"
    },
    {
        id: 25,
        image: '/images/shirt5.jpg',
        title: "Espada Men's Slim Fit Casual Shirt",
        price: "Rs 2,199.00",
        category: "Shirts"
    },
    {
        id: 26,
        image: '/images/shirt6.jpg',
        title: "Formal Office Slim Fit Shirt",
        price: "Rs 2,599.00",
        category: "Shirts"
    },
    {
        id: 27,
        image: '/images/shirt7.jpg',
        title: "Men's Striped Cotton Shirt",
        price: "Rs 2,399.00",
        category: "Shirts"
    },
    {
        id: 28,
        image: '/images/shirt8.jpg',
        title: "Classic White Button-Up Shirt",
        price: "Rs 2,499.00",
        category: "Shirts"
    },
    {
        id: 29,
        image: '/images/shirt9.jpg',
        title: "Navy Blue Slim Fit Shirt",
        price: "Rs 2,699.00",
        category: "Shirts"
    },
    {
        id: 30,
        image: '/images/shirt10.jpg',
        title: "Casual Denim Button Shirt",
        price: "Rs 2,399.00",
        category: "Shirts"
    },

    // Jeans (10)
    {
        id: 31,
        image: '/images/jeans1.jpg',
        title: "Men's Slim Fit Denim Jeans",
        price: "Rs 2,499.00",
        category: "Jeans"
    },
    {
        id: 32,
        image: '/images/jeans2.jpg',
        title: "Classic Straight Fit Jeans",
        price: "Rs 2,499.00",
        category: "Jeans"
    },
    {
        id: 33,
        image: '/images/jeans3.jpg',
        title: "Loose Fit Ripped Denim Jeans",
        price: "Rs 2,699.00",
        category: "Jeans"
    },
    {
        id: 34,
        image: '/images/jeans4.jpg',
        title: "Dark Wash Slim Fit Jeans",
        price: "Rs 2,799.00",
        category: "Jeans"
    },
    {
        id: 35,
        image: '/images/jeans5.jpg',
        title: "Tapered Fit Stretch Jeans",
        price: "Rs 2,599.00",
        category: "Jeans"
    },
    {
        id: 36,
        image: '/images/jeans6.jpg',
        title: "Skinny Fit Black Denim",
        price: "Rs 2,699.00",
        category: "Jeans"
    },
    {
        id: 37,
        image: '/images/jeans7.jpg',
        title: "Men's Relaxed Fit Jeans",
        price: "Rs 2,499.00",
        category: "Jeans"
    },
    {
        id: 38,
        image: '/images/jeans8.jpg',
        title: "Blue Wash Distressed Jeans",
        price: "Rs 2,799.00",
        category: "Jeans"
    },
    {
        id: 39,
        image: '/images/jeans9.jpg',
        title: "Cargo Denim Utility Jeans",
        price: "Rs 2,899.00",
        category: "Jeans"
    },
    {
        id: 40,
        image: '/images/jeans10.jpg',
        title: "High-Rise Baggy Denim Jeans",
        price: "Rs 2,999.00",
        category: "Jeans"
    }
];

export default products;
