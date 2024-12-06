'use client'
import React, { useEffect, useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import { serif } from '@/shared/Serif';
import FaTelegram from '@/icons/FaTelegram';
import TextAnimation from '@/shared/TextAnimation';
const ScrollDim = ({ heading1, subHeading }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start end', 'start start']
    })

    useEffect(() => {
        scrollYProgress.on('change', e => console.log(e))
    }, [scrollYProgress])

    return (
        <div>
            <div className="flex items-center justify-center gap-2">
                <FaTelegram />
                <h2 className="">
                    <TextAnimation className={'text-[#27437F] 2xl:text-2xl xl:text-xl font-semibold'}>
                        {subHeading}
                    </TextAnimation>
                </h2>
            </div>
            <motion.h1 ref={element} style={{ opacity: scrollYProgress }} className={`2xl:text-5xl xl:text-5xl text-2xl mt-2 text-center mx-auto ${serif.className}`}>{heading1}</motion.h1>
        </div>
    );
};

export default ScrollDim;