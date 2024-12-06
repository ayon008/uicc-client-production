'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Fade, Slide } from 'react-awesome-reveal';
import TextAnimation from '@/shared/TextAnimation';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Animated from '@/shared/Animated';
import BannerBtn from './BannerBtn';
import ButtonPrimary from '@/shared/ButtonPrimary';

const Banner = ({ bannerImage, flag, person, index }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, [index]);

    const MotionImage = motion(Image);
    return (
        <div className="banner-image h-[800px] w-full relative">
            <div className="relative w-full h-full overflow-hidden">
                <MotionImage
                    src={bannerImage}
                    alt="Banner Image"
                    layout="fill"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{
                        duration: 10,
                        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smooth easing
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    priority
                    className="w-full h-full object-fill z-0"
                />
                <div className='absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/80 to-white/80'></div>
            </div>
            <div className='absolute flex items-center 2xl:w-auto xl:w-auto -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-1/2 2xl:-translate-x-0 xl:-translate-x-0 -translate-x-1/2 z-50'>
                <div className="2xl:space-y-16 xl:space-y-10 space-y-6">
                    {/*
                     <div className="w-fit 2xl:mx-0 xl:mx-0 mx-auto rounded-xl border-2 border-deep-blue p-3 welcome">
                        
                    </div>
                    */}
                    <BannerBtn />
                    <div>
                        <TextAnimation className={'flex flex-col'}>
                            <span className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-deep-blue">Transforming mind</span>
                            <span className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-orange">Shaping future</span>
                        </TextAnimation>
                    </div>
                    <div className="flex items-center 2xl:justify-normal xl:justify-normal justify-center gap-3">
                        <div className="bg-orange w-[8px] 2xl:h-[50px] xl:h-[40px] h-[35px] rounded-xl"></div>
                    </div>
                    {/* <Animated>
                        <Link href={'/signUp'}>
                            <ButtonSecondary text={'Register Now'} />
                           
                        </Link>
                    </Animated> */}
                    <ButtonPrimary text={'Register Now'} />
                </div>
            </div>
            <div className='2xl:block xl:block hidden'>
                <MotionImage
                    key={index}
                    src={flag}
                    alt=""
                    priority
                    initial={{ rotateX: -45, opacity: 0, right: 0, bottom: 10 }}
                    animate={{ rotateX: 0, opacity: 1, right: 0, bottom: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                    }}
                    className="absolute z-20"
                />
            </div>
            <motion.div
                key={index}
                initial={{ clipPath: 'inset(0 100% 0 0)', x: 100 }}
                animate={{ clipPath: 'inset(0 0% 0 0)', x: 0 }}
                transition={{
                    duration: 0.5,
                    ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                }}
                className="absolute right-10 bottom-0 z-30 h-[90%] 2xl:block xl:block hidden"
            >
                <Image src={person} className="h-full w-auto" alt="" />
            </motion.div>
        </div>
    );
};

export default Banner;