import Image from 'next/image';
import React from 'react';

// import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Fade, Slide } from 'react-awesome-reveal';
import TextAnimation from '@/shared/TextAnimation';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Animated from '@/shared/Animated';
import BannerBtn from './BannerBtn';
import ButtonPrimary from '@/shared/ButtonPrimary';
import BannerAnimation from './BannerAnimation';

const Banner = ({ bannerImage, flag, person, index }) => {
    const MotionImage = motion(Image);
    return (
        <div className="banner-image h-[600px] w-full relative">
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
            <div className='absolute inset-0 z-10 bg-gradient-to-r from-white/90 via-white/80 to-white/80'></div>
            <div className='2xl:block xl:block hidden'>
                <MotionImage
                    key={index}
                    src={flag}
                    alt=""
                    priority
                    initial={{ rotateX: -30, opacity: 0, bottom: 10, right: 0 }}
                    animate={{ rotateX: 0, opacity: 1, bottom: 0, right: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                    }}
                    className="absolute z-20"
                />
            </div>
            <div className="absolute right-10 bottom-0 z-30 h-[90%] 2xl:block xl:block hidden">
                <BannerAnimation index={index} className={'h-full'}>
                    <Image src={person} className="h-full w-auto" alt="" />
                </BannerAnimation>
            </div>
        </div>
    );
};

export default Banner;