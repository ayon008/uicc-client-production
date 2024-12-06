'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import bannerImage from '../../public/assets/95fd7409683450e056377de24dc1e82b.png';

const ServiceBanner = ({ text }) => {
    // Define the animation variants
    const textVariants = {
        hidden: { x: '-100%', opacity: 0 }, // Start off-screen to the left
        visible: { x: 0, opacity: 1 }, // Move to the center and fade in
    };

    return (
        <div className="relative 2xl:mt-[100px] xl:mt-[100px]">
            {/* Background image */}
            <Image src={bannerImage} className="w-full max-h-[380px] min-h-[220px] object-cover" alt="Banner" />

            {/* Overlay with text */}
            <div className="absolute inset-0">
                <div className="max-w-[1440px] mx-auto relative">
                    {/* Animated text */}
                    <motion.h1
                        className="2xl:text-5xl xl:text-5xl font-bold absolute left-11 top-20 text-white uppercase tracking-wider"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 1, ease: 'easeOut' }} // Customize duration and easing
                    >
                        {text}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;