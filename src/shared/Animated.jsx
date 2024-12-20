'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Animated = ({ children, className, index, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

    return (
        <motion.div
            ref={ref}
            key={index ? index : 0}
            initial={{
                clipPath: 'inset(0 100% 0 0)', // Start off-screen to the right
                opacity: 0,
                // Start invisible for a smooth fade-in
            }}
            animate={isInView && { // Trigger animation when in view
                clipPath: 'inset(0 0% 0 0)', // Fully reveal the element
                opacity: 1, // Fade in to full visibility
            }}
            transition={{
                type: 'spring',
                duration: duration ? duration : 1.2, // Smooth transition
                ease: [0.25, 0.8, 0.25, 1], // Dynamic cubic-bezier curve
                delay: 0.05, // Minimal delay for responsiveness
                damping: 25, // Smooth spring effect
                stiffness: 100, // Slightly snappy transition
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Animated;
