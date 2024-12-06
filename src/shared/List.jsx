'use client'
import React from 'react';
import { motion } from 'framer-motion';

const List = ({ heading, subHeading }) => {
    return (
        <div className='max-w-[400px]'>
            <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }} // Adding transition for smoothness
            >
                <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">{heading}</h2>
                <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">{subHeading}</p>
            </motion.div>
        </div>
    );
};

export default List;
