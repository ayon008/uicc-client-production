'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const ServiceBanner = ({ text1, text2, img }) => {
    // Define the animation variants
    const textVariants = {
        hidden: { x: '-100%', opacity: 0 }, // Start off-screen to the left
        visible: { x: 0, opacity: 1 }, // Move to the center and fade in
    };

    return (
        <div className="relative 2xl:mt-[100px] xl:mt-[100px]">
            <div className='w-full h-full absolute inset-0 z-30 bg-black bg-opacity-30'></div>
            {/* Background image */}
            <div className="h-[400px] xl:h-[650px] 2xl:h-[700px]">
                <Image
                    src={img}
                    className="w-full h-full 2xl:object-fill xl:object-cover object-fill z-20"
                    alt="Banner"
                    priority
                />
            </div>
            {/* Overlay with text */}
            <div className="absolute inset-0 z-40">
                <div className="max-w-[1440px] mx-auto relative">
                    {/* Animated text */}
                    <motion.h1
                        className="2xl:text-5xl xl:text-5xl text-2xl font-bold absolute left-11 2xl:top-[320px] xl:top-[270px] top-[200px] text-white uppercase tracking-wider"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 1, ease: 'easeOut' }} // Customize duration and easing
                    >
                        {text1}
                    </motion.h1>
                    <motion.h1
                        className="2xl:text-5xl xl:text-5xl text-2xl font-bold absolute left-11 2xl:top-[390px] xl:top-[340px] top-[250px] text-white uppercase tracking-wider"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ duration: 1, ease: 'easeOut' }} // Customize duration and easing
                    >
                        {text2}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;
