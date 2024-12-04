'use client'
import React, { useState } from 'react';
import '../css/btn-secondary.css'
import { color, motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa';

const ButtonSecondary = ({ text }) => {
    const [isHover, setHover] = useState(false);
    return (
        <div className='w-fit h-fit overflow-clip bg-white px-7 py-4 rounded-[40px] btn border-none' onMouseEnter={(e) => setHover(true)} onMouseLeave={() => setHover(false)}>
            <button className=''>
                <div className='flex items-center justify-center gap-1'>
                    <motion.div className='w-[8px] h-[8px] bg-deep-blue rounded-full'
                        animate={{
                            scale: isHover ? 50 : 1,
                            // background:isHover?'':'#FFF'
                        }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.4
                        }}
                    >

                    </motion.div>
                    <motion.h4d
                        animate={{
                            x: isHover ? -8 : 8,
                            color: isHover ? '#FFF' : '#0b286d'
                        }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.4
                        }}
                        className='text-lg font-semibold'>{text}</motion.h4d>
                    <motion.div
                        animate={{
                            x: isHover ? 0 : 24
                        }}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.4
                        }}
                        className='w-fit h-fit z-30'>
                        <FaArrowRight color="white" />
                    </motion.div>
                </div>
            </button>
        </div>
    );
};

export default ButtonSecondary;