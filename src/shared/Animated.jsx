'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Animated = ({ children, className }) => {
    return (
        <motion.div
            initial={{
                clipPath: 'inset(0 100% 0 0)',  // Start from off-screen to the right
                opacity: 0,  // Start invisible for a smooth fade-in
            }}
            whileInView={{
                clipPath: 'inset(0 0% 0 0)',  // Fully reveal the element from right to left
                opacity: 1,  // Fade in the element smoothly
            }}
            transition={{
                type: 'spring',
                duration: 1.2,  // Increased duration for a smoother effect
                ease: [0.25, 0.8, 0.25, 1],  // A more natural cubic-bezier curve for a slower, more dynamic transition
                delay: 0.05,  // Minimal delay to keep the responsiveness
                damping: 25,  // Reduced damping to make the transition feel smoother
                stiffness: 100,  // Increased stiffness for a slightly snappy feel
            }}
            className={className}
        >
            {children}
        </motion.div>

    );
};

export default Animated;
