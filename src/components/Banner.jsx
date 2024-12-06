import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { Fade, Slide } from 'react-awesome-reveal';
import TextAnimation from '@/shared/TextAnimation';
import ButtonSecondary from '@/shared/ButtonSecondary';
import Animated from '@/shared/Animated';
import BannerBtn from './BannerBtn';
import ButtonPrimary from '@/shared/ButtonPrimary';
import BannerAnimation from './BannerAnimation';
import { serif } from '@/shared/Serif';

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

            <div className='absolute flex items-center 2xl:w-auto xl:w-auto -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-6 z-50'>
                <div className="2xl:space-y-16 xl:space-y-10 space-y-6">
                    {/* <div className="w-fit 2xl:mx-0 xl:mx-0 mx-auto rounded-xl  p-3 welcome">
                        <h5 className=" font-semibold text-deep-blue uppercase"></h5>
                    </div> */}
                    <button className='2xl:text-xl xl:text-base text-sm uppercase inline-block text-center p-3 border-2 border-deep-blue relative shadow-xl text-deep-blue hover:text-white focus:text-white transition-all ease-in duration-300 z-40 hover-element'>
                        <span className='z-40'>Welcome to UICC</span>
                    </button>
                    <div className='flex flex-col'>
                        <TextAnimation className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-deep-blue">
                            <span className={`${serif.className}`}>Transforming mind</span>
                        </TextAnimation>
                        <TextAnimation className="2xl:text-6xl xl:text-5xl text-3xl font-semibold text-orange">
                            <span className={`${serif.className}`}>Shaping future</span>
                        </TextAnimation>
                    </div>
                    <div className="flex items-center 2xl:justify-normal xl:justify-normal justify-center gap-3">
                        <div className="bg-orange w-[8px] 2xl:h-[50px] xl:h-[40px] h-[35px] rounded-xl"></div>
                        <TypeAnimation
                            sequence={[
                                500,
                                'We provide IELTS preparation courses',
                                1000,
                                'We offer visa processing services',
                                1000,
                                'We help with student and worker visas',
                                1000,
                                'Learn Korean, Japanese, and Chinese with us',
                                1000,
                                'Master German with our expert instructors',
                                500,
                            ]}
                            repeat={Infinity}
                            speed={50} // Adjusted for smoother typing
                            deletionSpeed={60}
                            className="2xl:text-xl xl:text-base text-sm font-semibold banner-text text-deep-blue 2xl:text-left xl:text-left text-center"
                        />
                    </div>
                    <div>
                        <Link href={'/signUp'} >
                            <Animated index={index}>
                                <ButtonSecondary text={'Register Now'} />
                            </Animated>
                        </Link>
                    </div>
                </div>
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