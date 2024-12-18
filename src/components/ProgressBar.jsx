'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SemiCircularProgressBar = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });

    return (
        <div className="flex justify-center items-center relative mt-4" ref={ref}>
            <svg viewBox="0 0 120 70" className="w-64 h-36">
                {/* Background Circle */}
                <path
                    d="M 20 60 A 45 45 0 1 1 100 60" // Adjusted radius from 55 to 45
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="4"
                />

                {/* Animated Progress Circle */}
                <motion.path
                    d="M 20 60 A 45 45 0 1 1 100 60" // Adjusted radius
                    fill="none"
                    stroke="#0b286d"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 0.95 } : { pathLength: 0 }}
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                />
            </svg>

            {/* Percentage/Status Text */}
            <div className="absolute flex flex-col items-center text-deep-blue">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="mb-2"
                >
                    <p className="text-base">Successful</p>
                </motion.span>
                {inView && (
                    <CountUp
                        className="font-semibold text-deep-blue text-lg"
                        start={0}
                        end={12000}
                        duration={1.5}
                        useEasing={true}
                        separator=","
                    />
                )}
            </div>
        </div>
    );
};

export default SemiCircularProgressBar;
