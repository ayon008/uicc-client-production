'use client'
import Arrow from '@/icons/Arrow';
import React from 'react';
import { motion } from 'framer-motion';

const ScrollTopBtn = () => {
    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <motion.button
            className='border-none rounded-full btn bg-orange shadow-lg hover:bg-orange-600 transition duration-300'
            onClick={scrollToTop}
            aria-label="Scroll to top"
            animate={{ scale: [1, 1.6, 1] }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        >
            <Arrow />
        </motion.button>
    );
};

export default ScrollTopBtn;
