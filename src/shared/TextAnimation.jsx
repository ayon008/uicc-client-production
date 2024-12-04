'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = ({ children, className, x, delay, scale }) => {
    return (
        <motion.div
            transition={{
                duration: 2.5, // Increased duration for slower animation
                ease: 'easeOut', // Smooth out at the end
                delay: 0.1,
                type: 'spring', // Make the animation feel more natural
                damping: 15, // Reduce damping for a little bounce effect
                stiffness: 80, // Lower stiffness for a slower, more relaxed animation
            }}
        >
            <motion.div
                initial={{
                    clipPath: 'inset(0 100% 0 0)',  // Start off-screen to the right
                    letterSpacing: '0em',  // Start with tight letter spacing
                    opacity: 0,  // Start invisible
                    x: -20, // Start slightly shifted to the left for smooth entry
                }}
                whileInView={{
                    clipPath: 'inset(0 0% 0 0)',  // Fully reveal the element
                    letterSpacing: '0.05em',  // Slight letter spacing increase
                    opacity: 1,  // Fade in to full opacity
                    x: 0, // Move to normal position
                }}
                transition={{
                    duration: 2.5,  // Slower animation
                    ease: 'easeOut', // Smooth transition with ease out
                    delay: delay ? delay : 0.1,
                    type: 'spring',
                    damping: 15,
                    stiffness: 80,  // Lower stiffness to slow the effect down
                }}
                className={className}
            >
                {children}
            </motion.div>
        </motion.div>

    );
};

export default TextAnimation;
