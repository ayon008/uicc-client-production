'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'

const Listen = ({ img, name, designation, text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 70 }}
            transition={{
                duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.05, damping: 25, stiffness: 100,
            }}
            className='flex gap-10 w-full items-center border p-3 rounded shadow-xl border-gray-1 border-opacity-70'>
            <div className='w-[40%] relative aspect-[3/2]'>
                <Image className='fill' src={img} alt='' />
            </div>
            <div className='w-[60%] flex flex-col space-y-5'>
                <h3 className='text-deep-blue text-3xl font-semibold'>{name}</h3>
                <p className='text-deep-blue text-xl font-semibold'>{designation}</p>
                <p className='text-lg'>{text}</p>
            </div>
        </motion.div>
    );
};

export default Listen;