'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '@/../public/assets/tarik-8Du4GS1nn7c-unsplash.jpg'
import slider2 from '@/../public/assets/tomas-nozina-UP22zkjJGZo-unsplash.jpg'
import { motion } from "framer-motion";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
// import FaPlane from '@/icons/FaPlane';
import img1 from '../../public/assets/icons8-team-FcLyt7lW5wg-unsplash.jpg'
import img2 from '../../public/assets/mina-rad-K9T9hdf4PmI-unsplash.jpg'
import img3 from '../../public/assets/carlos-_nnhAjZpVC4-unsplash.jpg'
import img4 from '../../public/assets/saung-digital-OosjBGZ-aRM-unsplash.jpg'
import img5 from '../../public/assets/conner-ching-0U1rWYHF0tg-unsplash.jpg'
import img6 from '../../public/assets/samuel-chan-93a2ny2Vnp8-unsplash.jpg'
import { FaArrowRight, FaBook, FaBusinessTime, FaHardHat, FaLanguage, FaPassport } from 'react-icons/fa';
// import img2 from '@/../public/assets/Worker VISA.png'
// import { montserrat } from './MonoFont';
import { FaPlane } from "react-icons/fa";
import { FaUserGraduate } from 'react-icons/fa';
import { RiBuildingLine } from 'react-icons/ri';
import { serif } from '@/shared/Serif';
import { MdLanguage } from 'react-icons/md';
import video from '@/../public/assets/animate.mp4';
import SectionTitle from '@/shared/SectionTitles';

// import img3 from '../../public/assets/'




export default function VisaService() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex); // Reinitialize AOS to apply animations to the new slide
    };


    const Card = ({ img, headline, text, icon }) => {
        const [hover, setHover] = useState(false);
        return (
            <div className="relative overflow-hidden" onMouseEnter={(e) => setHover(true)} onMouseLeave={() => setHover(false)}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 z-40 pointer-events-none" />
                <motion.div
                    className='absolute bottom-0 right-0 left-0 z-[55] bg-gradient-to-b from-black/70 via-black/60 to-black/40 pointer-events-none'
                    initial={{ top: "100%", opacity: 0 }}
                    animate={hover ? { top: "0%", opacity: 1 } : { top: "100%", opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1], // Ease out cubic for a realistic flow
                        opacity: { duration: 0.5, ease: "easeInOut" }, // Fading effect
                    }}
                    delay={0.2}
                >
                    <div className='px-6 py-14'>
                        <h3 className={`text-white text-2xl ${serif.className}`}>{headline}</h3>
                        <p className={`text-white text-base mt-8 ${serif.className}`}>{text}</p>
                    </div>
                </motion.div>
                <figure>
                    {/* Animated Image */}
                    <motion.div
                        className="h-[487px] w-full z-30"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: "linear", type: 'spring' }}
                        delay={0.5}
                    >
                        <Image
                            src={img}
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                    {/* Icon */}
                    <div className="absolute bottom-8 left-6 z-50">
                        {icon}
                        <div className='mt-4'>
                            <h3 className={`text-white text-2xl ${serif.className}`}>{headline}</h3>
                            {/* <p className={`text-white text-base ${serif.className}`}>{text}</p> */}
                        </div>
                    </div>
                </figure>
            </div>
        )
    }

    return (
        <div className='sliders relative px-10 py-20'>
            {/* <div className='absolute right-0 w-full left-0 -top-10 pointer-events-none -z-10 opacity-35'>
                <video
                    className=''
                    autoPlay
                    loop
                    muted
                    preload=''
                    playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div> */}
            <div className='h-[190px]'>
                <SectionTitle subHeading={'VISA SERVICES'} heading1={'Committed to provide '} heading2={'you the best visa services'} />
            </div>
            <div className='2xl:block xl:block hidden'>
                <Swiper
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 8000, // Time in milliseconds before moving to the next slide
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    onSlideChange={handleSlideChange}
                    modules={[Autoplay]}
                    className="mySwiper mt-10">
                    <SwiperSlide>
                        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 gap-6'>
                            <Card img={img4} headline={'IELTS'} icon={<FaBook color="white" size="3rem" />} text={'Navigating the IELTS exam can be overwhelming, but our agency makes it easy. We assist with preparation, scheduling, and all the necessary steps to ensure you’re ready. Focus on acing the test—we’ll take care of the logistics!'} />
                            <Card img={img5} headline={'Korean Language'} icon={<FaLanguage color="white" size="3rem" />} text={'Learning Korean made simple—our agency supports you through every step of the process, from selecting the right course to providing guidance on exams and certifications. Focus on mastering the language, and let us handle the details'} />
                            <Card img={img6} headline={'Chinese Language'} icon={<MdLanguage color="white" size="3rem" />} text={'Mastering Chinese is now easier with our agency. We guide you through course selection, exam preparation, and certification, ensuring a smooth learning journey. Focus on your language skills while we manage the rest!'} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 gap-6'>
                            <Card img={img1} headline={'Student Visa'} icon={<FaUserGraduate color="white" size="3rem" />} text={'Our agency streamlines the student visa process, handling documentation, applications, and interview prep while keeping you updated. Focus on your education—we’ll manage the rest!'} />
                            <Card img={img2} headline={'Work Visa'} icon={<RiBuildingLine color="white" size="3rem" />} text={'We streamline the worker visa process for you, handling everything from paperwork and application submissions to interview coaching. Concentrate on your professional growth while we take care of the visa details!'} />
                            <Card img={img3} headline={'Tourist Visa'} icon={<FaBusinessTime color="white" size="3rem" />} text={'Planning your dream vacation? Our agency handles your tourist visa process from start to finish, including documentation, application, and updates. You focus on the adventure—we’ll handle the paperwork!'} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='2xl:hidden xl:hidden block'>
                <Swiper
                    ref={swiperRef}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 8000, // Time in milliseconds before moving to the next slide
                        disableOnInteraction: false, // Keeps autoplay running after user interaction
                    }}
                    onSlideChange={handleSlideChange}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    className="mySwiper mt-10 2xl:hidden xl:hidden block">
                    <SwiperSlide>
                        <Card img={img4} headline={'IELTS'} icon={<FaBook color="white" size="3rem" />} text={'Navigating the IELTS exam can be overwhelming, but our agency makes it easy. We assist with preparation, scheduling, and all the necessary steps to ensure you’re ready. Focus on acing the test—we’ll take care of the logistics!'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card img={img5} headline={'Korean Language'} icon={<FaLanguage color="white" size="3rem" />} text={'Learning Korean made simple—our agency supports you through every step of the process, from selecting the right course to providing guidance on exams and certifications. Focus on mastering the language, and let us handle the details'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card img={img6} headline={'Chinese Language'} icon={<MdLanguage color="white" size="3rem" />} text={'Mastering Chinese is now easier with our agency. We guide you through course selection, exam preparation, and certification, ensuring a smooth learning journey. Focus on your language skills while we manage the rest!'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card img={img1} headline={'Student Visa'} icon={<FaUserGraduate color="white" size="3rem" />} text={'Our agency streamlines the student visa process, handling documentation, applications, and interview prep while keeping you updated. Focus on your education—we’ll manage the rest!'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card img={img2} headline={'Work Visa'} icon={<RiBuildingLine color="white" size="3rem" />} text={'We streamline the worker visa process for you, handling everything from paperwork and application submissions to interview coaching. Concentrate on your professional growth while we take care of the visa details!'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card img={img3} headline={'Tourist Visa'} icon={<FaBusinessTime color="white" size="3rem" />} text={'Planning your dream vacation? Our agency handles your tourist visa process from start to finish, including documentation, application, and updates. You focus on the adventure—we’ll handle the paperwork!'} />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="custom-pagination-1 flex gap-4 justify-center mt-1">
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
                {/* <button className='' onClick={() => goToSlide(2)}>
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
                <button className='' onClick={() => goToSlide(3)}>
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