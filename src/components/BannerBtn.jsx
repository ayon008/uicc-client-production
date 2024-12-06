import React from 'react';
import { motion } from 'framer-motion'
import { serif } from '@/shared/Serif';

const BannerBtn = () => {
    return (
        <div>
            {/* <motion.a
                initial='initial'
                whileHover='hovered'
                className={`relative block overflow-hidden text-deep-blue whitespace-nowrap text-3xl ${serif.className}`}
            >
                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: '-100%' },
                    }}
                >
                    Welcome to UICC
                </motion.div>
                <motion.div
                    className='absolute inset-0'
                    variants={{
                        initial: { y: '100%' },
                        hovered: { y: '0' },
                    }}
                >
                    Welcome to UICC
                </motion.div>
            </motion.a> */}
            
        </div>
    );
};

export default BannerBtn;

