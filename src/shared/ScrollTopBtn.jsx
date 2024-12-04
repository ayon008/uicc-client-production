'use client'
import Arrow from '@/icons/Arrow';
import React from 'react';

const ScrollTopBtn = () => {
    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <button
            className='border-none rounded-full btn bg-orange shadow-lg hover:bg-orange-600 transition duration-300'
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <Arrow />
        </button>
    );
};

export default ScrollTopBtn;