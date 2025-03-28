import React, { useRef, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({ products }) => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(1);

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        900: { items: 3 },
        1200: { items: 4 },
    };

    const updateVisibleItems = () => {
        const width = window.innerWidth;
        if (width >= 1200) {
            setVisibleItems(4);
        } else if (width >= 900) {
            setVisibleItems(3);
        } else if (width >= 600) {
            setVisibleItems(2);
        } else {
            setVisibleItems(1);
        }
    };

    useEffect(() => {
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const maxIndex = products.length - visibleItems;

    const slidePrev = () => {
        if (carouselRef.current && currentIndex > 0) {
            carouselRef.current.slidePrev();
            setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const slideNext = () => {
        if (carouselRef.current && currentIndex < maxIndex) {
            carouselRef.current.slideNext();
            setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
        }
    };

    const syncActiveIndex = ({ item }) => setCurrentIndex(item);

    const items = products.map((product) => (
        <HomeSectionCard key={product.id} product={product} />
    ));

    return (
        <div className="relative p-5 border">
            <AliceCarousel
                ref={carouselRef}
                items={items}
                responsive={responsive}
                disableDotsControls
                disableButtonsControls
                controlsStrategy="alternate"
                onSlideChanged={syncActiveIndex}
                activeIndex={currentIndex}
            />

            {/* Render both buttons only when needed */}
            {products.length > visibleItems && (
                <>
                    {currentIndex > 0 && (
                        <Button
                            variant="contained"
                            className="z-50 shadow-lg"
                            onClick={slidePrev}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '1rem',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#ff6f61',
                                width: '3.5rem',
                                height: '3.5rem',
                                minWidth: '3.5rem',
                                borderRadius: '50%',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#ff3b2f',
                                    transform: 'translateY(-50%) scale(1.1)',
                                },
                            }}
                            aria-label="previous"
                        >
                            <KeyboardArrowLeftIcon sx={{ fontSize: '2rem', color: 'white' }} />
                        </Button>
                    )}

                    {currentIndex < maxIndex && (
                        <Button
                            variant="contained"
                            className="z-50 shadow-lg"
                            onClick={slideNext}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: '1rem',
                                transform: 'translateY(-50%)',
                                backgroundColor: '#ff6f61',
                                width: '3.5rem',
                                height: '3.5rem',
                                minWidth: '3.5rem',
                                borderRadius: '50%',
                                padding: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#ff3b2f',
                                    transform: 'translateY(-50%) scale(1.1)',
                                },
                            }}
                            aria-label="next"
                        >
                            <KeyboardArrowRightIcon sx={{ fontSize: '2rem', color: 'white' }} />
                        </Button>
                    )}
                </>
            )}
        </div>
    );
};

export default HomeSectionCarousel;
