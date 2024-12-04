'use client';
import React from 'react';
import { motion } from 'framer-motion';

const TextAnimation = ({ children, className, x, delay, scale }) => {
    return (
        <motion.div
            transition={{
                duration: 1,
                ease: 'easeInOut',
                delay: 0.1,
                type: 'spring'
            }}
        >
            <motion.div
                initial={{
                    clipPath: 'inset(0 100% 0 0)', // Start hidden and shifted left
                    letterSpacing: '0em', // Initial tight letter spacing
                    // scale: scale ? scale : 0.8,
                    x: -20,
                    opacity: 0 // Initial smaller scale
                }}
                whileInView={{
                    clipPath: 'inset(0 0% 0 0)', // Reveal the element
                    letterSpacing: '0.1em', // Animate to normal letter spacing
                    scale: 1,
                    x: 0,
                    opacity: 1 // Animate to normal scale
                }}
                transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: delay ? delay : 0.1,
                    type: 'spring'
                }}
                className={className}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default TextAnimation;
