'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Animated = ({ children, className }) => {
    return (
        <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{
                type: 'spring',
                duration: 0.9, // Reduced duration for a faster transition
                ease: [0.33, 1, 0.68, 1], // Faster cubic-bezier curve for a snappy yet smooth effect
                delay: 0.05, // Minimal delay for responsiveness
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Animated;
