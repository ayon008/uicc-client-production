'use client'
import React, { act, useEffect, useState } from 'react';
import bannerImage from '../../public/assets/freepik__expand__51261.png'
import flag from '../../public/assets/rb_2150369201 (1).png';
import Image from 'next/image';
import { serif } from '@/shared/Serif';
import { motion } from 'framer-motion'
import BannerAnimation from './BannerAnimation';
import person1 from '../../public/assets/portrait-flight-attendant-holding-plane-figurine.png';
import person2 from '../../public/assets/young-traveler-man-holding-air-tickets-suitcase-looking-camera-smiling-with-happy-face-standing-isolated-white-background.png'
import person3 from '../../public/assets/three-happy-graduates-smiling-holding-diplomas.png';
import person4 from '../../public/assets/smiling-young-pretty-student-girl-wearing-back-bag-holding-airplane-ticket-globe-isolated-pink-wall.png'
import person5 from '../../public/assets/smiley-woman-playing-with-paper-plane.png'
import { rubik } from '@/shared/Rubik';
import person6 from '../../public/assets/file (8) (1).png'
import ButtonSecondary from '@/shared/ButtonSecondary';

const SelectTab = () => {
    const [activeIndex, setActiveIndex] = useState(5);
    const MotionImage = motion(Image);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex < 5 ? prevIndex + 1 : 0)); // Assuming you have 5 images
        }, 20000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div className='overflow-hidden relative'>
                <Image src={bannerImage} alt="" className="w-full 2xl:h-[690px] xl:h-[690px] h-[600px] object-fill z-30 image-animation" />
                <div className="absolute inset-0 bg-black 2xl:bg-opacity-10 xl:bg-opacity-10 bg-opacity-20 z-[35]"></div>
                <div className='w-[60%] 2xl:block xl:block hidden h-fit absolute -bottom-[90px] right-0 z-20 overflow-hidden'>
                    <MotionImage
                        key={activeIndex}
                        src={flag}
                        alt=""
                        priority
                        initial={{ rotateX: 50, opacity: 0, bottom: 10, right: 0 }}
                        animate={{ rotateX: 0, opacity: 1, bottom: 0, right: 0 }}
                        transition={{
                            duration: 2,
                            ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                        }}
                        className='2xl:object-fill xl:object-fill object-cover w-full h-full overflow-hidden'
                    />
                </div>
                <div className="absolute right-0 w-fit bottom-0 z-30 h-fit 2xl:block xl:block hidden">
                    <BannerAnimation activeIndex={activeIndex} className={'h-fit'}>
                        {
                            activeIndex === 0 &&
                            <Image src={person4} className="h-[600px] w-auto object-contain" alt="" />
                        }
                        {
                            activeIndex === 1 &&
                            <Image src={person2} className="h-[600px] w-auto object-contain" alt="" />
                        }
                        {
                            activeIndex === 2 &&
                            <Image src={person3} className="h-[600px] w-auto object-contain" alt="" />
                        }
                        {
                            activeIndex === 3 &&
                            <Image src={person1} className="h-[600px] w-auto object-contain" alt="" />
                        }
                        {
                            activeIndex === 4 &&
                            <Image src={person5} className="h-[600px] w-auto object-contain" alt="" />
                        }
                        {
                            activeIndex === 5 &&
                            <Image src={person6} className="h-[600px] w-auto object-contain" alt="" />
                        }
                    </BannerAnimation>
                </div>
                <div className='absolute 2xl:w-auto xl:w-auto -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-6 z-40 mt-[50px]'>
                    <BannerAnimation activeIndex={activeIndex}>
                        <div>
                            <h4 className={`${rubik.className} text-[#FAEBD7] uppercase font-medium px-3 border border-white w-fit`}>Welcome to UICC</h4>
                        </div>
                    </BannerAnimation>
                    <BannerAnimation activeIndex={activeIndex} delay={1.2}>
                        <div className='my-6'>
                            <h1 className={`text-[#FAEBD7] 2xl:text-7xl xl:text-7xl text-4xl ${serif.className}`}>
                                We Ensure <br className='2xl:block xl:block hidden' />
                                Great Lifestyle <br />
                                For your Family
                            </h1>
                        </div>
                    </BannerAnimation>
                    <BannerAnimation activeIndex={activeIndex} delay={1.6}>
                        <div className='flex items-center gap-6'>
                            <div className='w-[2px] 2xl:h-[44px] xl:h-[44px] h-[55px] rounded-t-md rounded-b-md bg-white'>

                            </div>
                            <h5 className={`text-[#FAEBD7] 2xl:text-base xl:text-base text-sm ${rubik.className}`}>We provide a complete immigration & visa services for USA Canada <br /> Australia UK Japan Korea for travel & Education</h5>
                        </div>
                    </BannerAnimation>
                    <BannerAnimation activeIndex={activeIndex} delay={2}>
                        <div className='mt-6'>
                            <ButtonSecondary text={'Register Now'} />
                        </div>
                    </BannerAnimation>
                </div>
            </div>
            <div className="hidden grid-cols-5 2xl:grid xl:grid">
                <div onClick={() => setActiveIndex(0)}>
                    <h1 className={`${serif.className} ${activeIndex === 0 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35 border-b-[0.60px] border-b-sky-500`}>Visa Solution</h1>
                </div>
                <div onClick={() => setActiveIndex(1)}>
                    <h1 className={`${serif.className} ${activeIndex === 1 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35 border-b-[0.60px] border-b-sky-500`}>Immigration</h1>
                </div>
                <div onClick={() => setActiveIndex(2)}>
                    <h1 className={`${serif.className} ${activeIndex === 2 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35 border-b-[0.60px] border-b-sky-500`}>Education</h1>
                </div>
                <div onClick={() => setActiveIndex(3)}>
                    <h1 className={`${serif.className} ${activeIndex === 3 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35 border-b-[0.60px] border-b-sky-500`}>Consultancy</h1>
                </div>
                <div onClick={() => setActiveIndex(4)}>
                    <h1 className={`${serif.className} ${activeIndex === 4 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35 border-b-[0.60px] border-b-sky-500`}>Language Training</h1>
                </div>
            </div>
        </div>
    );
};

export default SelectTab;