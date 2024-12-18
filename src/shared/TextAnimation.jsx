'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextAnimation = ({ children, className, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // Trigger only once when in view

    return (
        <motion.div ref={ref}>
            {isInView && ( // Start animation only when in view
                <motion.div
                    initial={{
                        clipPath: 'inset(0 100% 0 0)', // Start off-screen to the right
                        letterSpacing: '0em', // Start with tight letter spacing
                        opacity: 0, // Start invisible
                        x: -20, // Start slightly shifted to the left for smooth entry
                    }}
                    animate={{
                        clipPath: 'inset(0 0% 0 0)', // Fully reveal the element
                        letterSpacing: '0.05em', // Slight letter spacing increase
                        opacity: 1, // Fade in to full opacity
                        x: 0, // Move to normal position
                    }}
                    transition={{
                        duration: 2.5, // Slower animation
                        ease: 'easeOut', // Smooth transition with ease out
                        delay: delay || 0.1,
                        type: 'spring',
                        damping: 15,
                        stiffness: 80, // Lower stiffness to slow the effect down
                    }}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};

export default TextAnimation;
