'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { serif } from './Serif';
import wave from '../../public/assets/animated_wave.svg'
import Image from 'next/image';

const ButtonPrimary = ({ text }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className="w-fit h-fit overflow-clip count px-7 py-4 rounded-[40px] btn border-none relative btn-hover" onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
            <motion.a
                initial='initial'
                whileHover='hovered'
                className={`relative block overflow-hidden text-lg font-semibold whitespace-nowrap text-white ${serif.className}`}
            >
                <motion.div
                    animate={hover ? { y: '-100%' } : { y: '0' }}
                    className="z-30"
                >
                    {text}
                </motion.div>
                <motion.div
                    animate={hover ? { y: 0 } : { y: '100%' }}
                    className='absolute z-30 inset-0'
                >
                    {text}
                </motion.div>
            </motion.a>
            {/* <div className='absolute bottom-0 z-20'>
                <Image src={wave} className='h-[100%] w-full' alt='' />
            </div> */}
        </div>

    );
};

export default ButtonPrimary;
