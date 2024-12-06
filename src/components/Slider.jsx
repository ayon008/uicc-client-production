'use client'
import React, { act, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../public/assets/vasily-koloda-8CqDvPuo_kI-unsplash.jpg'
import slider2 from '../../public/assets/95fd7409683450e056377de24dc1e82b.png'
import slider3 from '../../public/assets/5c2466386a1b75626cab32c62279a16c.png'
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import ButtonPrimary from '@/shared/ButtonPrimary';
import BannerAnimation from './BannerAnimation';

export default function Slider() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    return (
        <div className='sliders'>
            <Swiper
                ref={swiperRef}
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                pagination={{ clickable: true }}
                autoplay={false}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Navigation, Pagination]}
                className="mySwiper mt-10">
                <SwiperSlide>
                    <motion.div
                        key={activeIndex}
                        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, }} transition={{ clipPath: { type: 'spring', duration: 1.5, ease: 'easeInOut', delay: 0.1, damping: 20, stiffness: 80 }, opacity: { duration: 1.5, ease: 'easeInOut', delay: 0.1 }, }}
                        className='relative'>
                        <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-fill' src={slider1} alt='' />
                        <div className='absolute bottom-0 w-1/2 left-0 bg-orange 2xl:py-6 xl:py-6 py-2 2xl:px-12 xl:px-12 px-3  2xl:block xl:block hidden'>
                            <h3 className='2xl:mt-6 xl:mt-6 my-3 font-semibold 2xl:text-3xl xl:text-2xl text-[10px] text-white'>IELTS Regular Programme</h3>
                            <p className='2xl:my-4 xl:my-4 my-3 2xl:text-2xl xl:text-xl font-medium text-[7px] text-white'>The IELTS Regular Programme helps students improve their English skills for the IELTS exam, focusing on speaking, listening, reading, and writing. It offers practice tests and expert guidance to achieve desired scores for study, work, or immigration.</p>
                            <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                                <Link href={'/signUp'}>
                                    <ButtonPrimary text={'Register Now'} width={9} height={8} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        key={activeIndex}
                        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.2, }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, }} transition={{ clipPath: { type: 'spring', duration: 1.5, ease: 'easeInOut', delay: 0.1, damping: 20, stiffness: 80 }, opacity: { duration: 1.5, ease: 'easeInOut', delay: 0.1 }, }}
                        className='relative'>
                        <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-fill' src={slider2} alt='' />
                        <div className='absolute bottom-0 w-1/2 left-0 bg-orange 2xl:py-6 xl:py-6 py-2 2xl:px-12 xl:px-12 px-3  2xl:block xl:block hidden'>
                            <h3 className='2xl:mt-6 xl:mt-6 my-3 font-semibold 2xl:text-3xl xl:text-2xl text-[10px] text-white'>Visa Processing</h3>
                            <p className='2xl:my-4 xl:my-4 my-3 2xl:text-2xl xl:text-xl font-medium text-[7px] text-white'>We provide expert assistance with student, work, family, and tourist visa applications. Our services include guidance on documentation, application processing, and interview preparation to ensure a smooth and successful visa experience.</p>
                            <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                                <Link href={'/signUp'}>
                                    <ButtonPrimary text={'Register Now'} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        key={activeIndex}
                        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0, }} animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1, }} transition={{ clipPath: { type: 'spring', duration: 1.5, ease: 'easeInOut', delay: 0.1, damping: 20, stiffness: 80 }, opacity: { duration: 1.5, ease: 'easeInOut', delay: 0.1 }, }}
                        className='relative'>
                        <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-cover object-top' src={slider3} alt='' />
                        <div className='absolute bottom-0 w-1/2 left-0 bg-orange 2xl:py-6 xl:py-6 py-2 2xl:px-12 xl:px-12 px-3 2xl:block xl:block hidden'>
                            <h3 className='2xl:mt-6 xl:mt-6 my-3 font-semibold 2xl:text-3xl xl:text-2xl text-[10px] text-white'>Air Ticket</h3>
                            <p className='2xl:my-4 xl:my-4 my-3 2xl:text-2xl xl:text-xl font-medium text-[7px] text-white'>We offer reliable air ticket booking services, ensuring affordable prices, flexible options, and hassle-free travel arrangements for domestic and international flights.</p>
                            <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                                <Link href={'/signUp'}>
                                    <ButtonPrimary text={'Register Now'}/>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className='relative'>
                        <Image className='w-full max-h-[600px] xl:h-[550px] 2xl:h-[600px] h-[300px] object-cover object-top' src={slider3} alt='' />
                        <div className='absolute bottom-0 w-1/2 left-0 bg-orange 2xl:py-6 xl:py-6 py-2 2xl:px-12 xl:px-12 px-3'>
                            <h3 className='2xl:mt-6 xl:mt-6 my-3 font-semibold 2xl:text-3xl xl:text-2xl text-[10px] text-white'>Air Ticket</h3>
                            <p className='2xl:my-4 xl:my-4 my-3 2xl:text-2xl xl:text-xl font-medium text-[7px] text-white'>We offer reliable air ticket booking services, ensuring affordable prices, flexible options, and hassle-free travel arrangements for domestic and international flights.</p>
                            <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                                <Link href={'/signUp'}>
                                    <ButtonPrimary text={'Register Now'} width={9} height={8} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> */}
                <div className="custom-next swiper-button-next">
                    <div className='bg-white px-3 rounded-full cursor-pointer'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="49" viewBox="0 0 24 49" fill="none">
                            <path d="M4.90397 13.5819L7.02597 11.4619L18.584 23.0159C18.7703 23.201 18.9181 23.4211 19.019 23.6636C19.1199 23.9061 19.1719 24.1662 19.1719 24.4289C19.1719 24.6915 19.1199 24.9516 19.019 25.1941C18.9181 25.4366 18.7703 25.6567 18.584 25.8419L7.02597 37.4019L4.90597 35.2819L15.754 24.4319L4.90397 13.5819Z" fill="black" />
                        </svg>
                    </div>
                </div>
                <div className="custom-prev swiper-button-prev">
                    <div className='bg-white px-3 rounded-full cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="49" viewBox="0 0 24 49" fill="none">
                            <path d="M19.096 35.2619L16.974 37.3819L5.41603 25.8279C5.22972 25.6428 5.08186 25.4226 4.98096 25.1801C4.88007 24.9376 4.82812 24.6775 4.82812 24.4149C4.82812 24.1522 4.88007 23.8922 4.98096 23.6497C5.08186 23.4072 5.22972 23.187 5.41603 23.0019L16.974 11.4419L19.094 13.5619L8.24603 24.4119L19.096 35.2619Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </Swiper>
            <div className="custom-pagination-1 flex gap-4 justify-center mt-4">
                <button className='' onClick={() => goToSlide(0)}>
                    <motion.div
                        initial={{ border: 'none', padding: 12 }}
                        animate={{ border: activeIndex === 0 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                        className='rounded-full'>
                        <motion.div
                            initial={{ backgroundColor: '#D3D3D3' }}
                            animate={{ backgroundColor: activeIndex === 0 ? '#ff8c3a' : '#D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='w-[10px] h-[10px] rounded-full'>

                        </motion.div>
                    </motion.div>
                </button>
                <button className='' onClick={() => goToSlide(1)}>
                    <motion.div
                        initial={{ border: 'none', padding: 12 }}
                        animate={{ border: activeIndex === 1 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                        className='rounded-full'>
                        <motion.div
                            initial={{ backgroundColor: '#D3D3D3' }}
                            animate={{ backgroundColor: activeIndex === 1 ? '#ff8c3a' : '#D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='w-[10px] h-[10px] rounded-full'>

                        </motion.div>
                    </motion.div>
                </button>
                <button className='' onClick={() => goToSlide(2)}>
                    <motion.div
                        initial={{ border: 'none', padding: 12 }}
                        animate={{ border: activeIndex === 2 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                        className='rounded-full'>
                        <motion.div
                            initial={{ backgroundColor: '#D3D3D3' }}
                            animate={{ backgroundColor: activeIndex === 2 ? '#ff8c3a' : '#D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='w-[10px] h-[10px] rounded-full'>

                        </motion.div>
                    </motion.div>
                </button>
                {/* <button className='' onClick={() => goToSlide(3)}>
                    <motion.div
                        initial={{ border: 'none', padding: 12 }}
                        animate={{ border: activeIndex === 3 ? '1px solid #ff8c3a' : '1px solid #D3D3D3' }}
                        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                        className='rounded-full'>
                        <motion.div
                            initial={{ backgroundColor: '#D3D3D3' }}
                            animate={{ backgroundColor: activeIndex === 3 ? '#ff8c3a' : '#D3D3D3' }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
                            className='w-[10px] h-[10px] rounded-full'>

                        </motion.div>
                    </motion.div>
                </button> */}
            </div>
        </div>
    );
}