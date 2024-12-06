'use client'
import React, { useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import { serif } from '@/shared/Serif';
import FaTelegram from '@/icons/FaTelegram';
import TextAnimation from '@/shared/TextAnimation';

const ScrollDim = ({ heading1, subHeading, show }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start end', 'start 0.25']
    });
    const words = heading1.split(' ');

    const Character = ({ children, range, progress }) => {
        const opacity = useTransform(progress, range, [0, 1]);
        return (
            <span>
                <span className='absolute opacity-20'>{children}</span>
                <motion.span style={{ opacity: opacity, transition: 'opacity 1.2s ease-in-out' }}>
                    {children}
                </motion.span>
            </span>
        );
    };

    const Word = ({ children, range, progress }) => {
        const characters = children.split('');
        const amount = range[1] - range[0];
        const step = amount / children.length;
        return (
            <span className={`mx-2 relative text-white ${serif.className}`}>
                {
                    characters.map((character, i) => {
                        const start = range[0] + (step * i);
                        const end = range[0] + (step * (i + 1));
                        console.log([start, end]);

                        return (
                            <Character range={[start, end]} progress={progress} key={i}>
                                {character}
                            </Character>
                        );
                    })
                }
            </span>
        );
    };

    return (
        <div>
            {show &&
                <div className="flex items-center justify-center gap-2">
                    <FaTelegram />
                    <h2 className="">
                        <TextAnimation className={'text-white 2xl:text-2xl xl:text-xl font-semibold'}>
                            {subHeading}
                        </TextAnimation>
                    </h2>
                </div>}
            <h1 ref={element} className={`2xl:text-5xl xl:text-5xl text-2xl mt-2 text-center mx-auto flex justify-center flex-wrap ${serif.className}`}>{
                words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;
                    console.log([start, end]);
                    return (
                        <Word range={[start, end]} progress={scrollYProgress} key={i}>
                            {word}
                        </Word>
                    );
                })
            }</h1>
        </div>
    );
};

export default ScrollDim;
