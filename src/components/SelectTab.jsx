// 'use client'
// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { motion } from "framer-motion";
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// // import required modules
// import { Autoplay, Navigation } from 'swiper/modules';
// import Banner from './Banner';
// 
// import usFlag from '../../public/assets/flag-h1-2.png'
// import nzFlag from '../../public/assets/flag-h1-3.png'
// import canFlag from '../../public/assets/canada.png'
// import person1 from '../../public/assets/file (6).png'
// import person2 from '../../public/assets/file (2).png'


// // import person5 from '../../public/assets/file.png'
// import Link from 'next/link';

// const SelectTab = () => {
//     const swiperRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);

//     const goToSlide = (index) => {
//         if (swiperRef.current && swiperRef.current.swiper) {
//             swiperRef.current.swiper.slideTo(index);
//             setActiveIndex(index);
//         }
//     };

//     const handleSlideChange = (swiper) => {
//         setActiveIndex(swiper.activeIndex); // Reinitialize AOS to apply animations to the new slide
//     };

//     return (
//         <div>
//             <div className='2xl:mt-[100px] xl:mt-[100px] mt-0 sliders relative'>
//                 <Swiper
//                     lazy={true} // Lazy load for heavy images
//                     preloadImages={false}
//                     speed={600}
//                     ref={swiperRef}
//                     autoplay={{
//                         delay: 6000, // Time in milliseconds before moving to the next slide
//                         disableOnInteraction: false, // Keeps autoplay running after user interaction
//                     }}
//                     onSlideChange={handleSlideChange}
//                     modules={[Navigation, Autoplay]} // Include Autoplay in modules
//                     className="mySwiper 2xl:mt-10 xl:mt-10 mt-0 overflow-hidden">
//                     <SwiperSlide>
//                         <Banner bannerImage={bannerImage1} index={activeIndex + 1} person={person2} flag={canFlag} />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Banner bannerImage={bannerImage1} index={activeIndex + 1} person={person1} flag={nzFlag} />
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Banner person={person3} index={activeIndex + 1} bannerImage={bannerImage1} flag={usFlag} />
//                     </SwiperSlide>
//                 </Swiper>
//                 <div className="custom-pagination flex gap-4 justify-center 2xl:mb-0 xl:mb-0 mb-6">
//                     <button className='' onClick={() => goToSlide(0)}>
//                         <motion.div
//                             initial={{ border: 'none', padding: 12 }}
//                             animate={{ border: activeIndex === 0 ? '1px solid #f87171' : '1px solid #D3D3D3' }}
//                             transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                             className='rounded-full'>
//                             <motion.div
//                                 initial={{ backgroundColor: '#D3D3D3' }}
//                                 animate={{ backgroundColor: activeIndex === 0 ? '#f87171' : '#D3D3D3' }}
//                                 transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                                 className='2xl:w-[10px] 2xl:h-[10px] xl:w-[10px] xl:h-[10px] w-[6px] h-[6px] rounded-full'>

//                             </motion.div>
//                         </motion.div>
//                     </button>
//                     <button className='' onClick={() => goToSlide(1)}>
//                         <motion.div
//                             initial={{ border: 'none', padding: 12 }}
//                             animate={{ border: activeIndex === 1 ? '1px solid #f87171' : '1px solid #D3D3D3' }}
//                             transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                             className='rounded-full'>
//                             <motion.div
//                                 initial={{ backgroundColor: '#D3D3D3' }}
//                                 animate={{ backgroundColor: activeIndex === 1 ? '#f87171' : '#D3D3D3' }}
//                                 transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                                 className='2xl:w-[10px] 2xl:h-[10px] xl:w-[10px] xl:h-[10px] w-[6px] h-[6px] rounded-full'>

//                             </motion.div>
//                         </motion.div>
//                     </button>
//                     <button className='' onClick={() => goToSlide(2)}>
//                         <motion.div
//                             initial={{ border: 'none', padding: 12 }}
//                             animate={{ border: activeIndex === 2 ? '1px solid #f87171' : '1px solid #D3D3D3' }}
//                             transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                             className='rounded-full'>
//                             <motion.div
//                                 initial={{ backgroundColor: '#D3D3D3' }}
//                                 animate={{ backgroundColor: activeIndex === 2 ? '#f87171' : '#D3D3D3' }}
//                                 transition={{ duration: 0.3, ease: "easeInOut", delay: 0.01 }}
//                                 className='2xl:w-[10px] 2xl:h-[10px] xl:w-[10px] xl:h-[10px] w-[6px] h-[6px] rounded-full'>

//                             </motion.div>
//                         </motion.div>
//                     </button>
//                 </div>
//                 <div className={'grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-2'}>
//                     <Link href={'/language-training'} className={`border-[0.1px] border-[#E5E7EB] text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 py-2 text-center hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear font-semibold 2xl:text-2xl xl:text-lg text-[8px]`} >
//                         Language Training
//                     </Link>
//                     <Link href={'/career-counseling'} className={`border-[0.1px] border-[#E5E7EB] text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 py-2 text-center hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear font-semibold 2xl:text-2xl xl:text-lg text-[8px]`} >
//                         Career Counseling
//                     </Link>
//                     <Link href={'/visa-processing'} className={`border-[0.1px] border-[#E5E7EB] text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 py-2 text-center hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear font-semibold 2xl:text-2xl xl:text-lg text-[8px]`} >
//                         Visa Processing
//                     </Link>
//                     <Link href={'/air-ticket'} className={`border-[0.1px] border-[#E5E7EB] text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center py-2 hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear font-semibold 2xl:text-2xl xl:text-lg text-[8px]`} >
//                         Air Ticketing
//                     </Link>
//                     <Link href={'/'} className={`border-[0.1px] border-[#E5E7EB] text-deep-blue cursor-pointer 2xl:py-6 xl:py-4 text-center py-2 hover:bg-deep-blue hover:text-white transition-all duration-300 ease-linear font-semibold 2xl:text-2xl xl:text-lg text-[8px] 2xl:block xl:block hidden`}>
//                         Training Center
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SelectTab;

'use client'
import React, { useEffect, useState } from 'react';
import bannerImage from '../../public/assets/freepik__expand__51261.png'
import flag from '../../public/assets/rb_2150369201.png';
import Image from 'next/image';
import { serif } from '@/shared/Serif';
import { motion } from 'framer-motion'
import BannerAnimation from './BannerAnimation';
import person1 from '../../public/assets/portrait-flight-attendant-holding-plane-figurine.png';
import person2 from '../../public/assets/front-view-man-working-travel-agency.png'
import person3 from '../../public/assets/three-happy-graduates-smiling-holding-diplomas.png';
import person4 from '../../public/assets/smiling-young-pretty-student-girl-wearing-back-bag-holding-airplane-ticket-globe-isolated-pink-wall.png'
import person5 from '../../public/assets/smiley-woman-playing-with-paper-plane.png'

const SelectTab = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const MotionImage = motion(Image);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex < 4 ? prevIndex + 1 : 0)); // Assuming you have 5 images
        }, 10000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mb-20">
            <div className='overflow-hidden relative'>
                <Image src={bannerImage} alt="" className="w-full h-[650px] object-fill z-30 image-animation" />
                <div className='w-fit h-fit absolute top-16 left-0 z-20'>
                    <MotionImage
                        key={activeIndex}
                        src={flag}
                        alt=""
                        priority
                        initial={{ rotateX: 50, opacity: 0, bottom: 10, right: 0 }}
                        animate={{ rotateX: 0, opacity: 1, bottom: 0, right: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.42, 0, 0.58, 1], // Custom cubic-bezier for smoother easing
                        }}
                        className='object-contain'
                    />
                </div>
                <div className="absolute right-0 w-fit bottom-0 z-30 h-[90%] 2xl:block xl:block hidden">
                    <BannerAnimation activeIndex={activeIndex} className={'h-full'}>
                        {
                            activeIndex === 0 &&
                            <Image src={person4} className="h-full w-auto" alt="" />
                        }
                        {
                            activeIndex === 1 &&
                            <Image src={person2} className="h-full w-auto" alt="" />
                        }
                        {
                            activeIndex === 2 &&
                            <Image src={person3} className="h-full w-auto" alt="" />
                        }
                        {
                            activeIndex === 3 &&
                            <Image src={person1} className="h-full w-auto" alt="" />
                        }
                        {
                            activeIndex === 4 &&
                            <Image src={person5} className="h-full w-auto" alt="" />
                        }
                    </BannerAnimation>
                </div>
                <div className='absolute flex items-center 2xl:w-auto xl:w-auto -translate-y-1/2 h-fit top-1/2 2xl:left-20 xl:left-16 left-6 z-40'>

                </div>
            </div>
            <div className="grid grid-cols-5">
                <div onClick={() => setActiveIndex(0)}>
                    <h1 className={`${serif.className} ${activeIndex === 0 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35`}>Visa Solution</h1>
                </div>
                <div onClick={() => setActiveIndex(1)}>
                    <h1 className={`${serif.className} ${activeIndex === 1 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35`}>Immigration</h1>
                </div>
                <div onClick={() => setActiveIndex(2)}>
                    <h1 className={`${serif.className} ${activeIndex === 2 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35`}>Education</h1>
                </div>
                <div onClick={() => setActiveIndex(3)}>
                    <h1 className={`${serif.className} ${activeIndex === 3 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35`}>Consultancy</h1>
                </div>
                <div onClick={() => setActiveIndex(4)}>
                    <h1 className={`${serif.className} ${activeIndex === 4 ? 'bg-deep-blue text-white' : 'text-deep-blue bg-transparent'} text-center text-2xl p-4 border-r-[0.60px] border-r-sky-500 border-opacity-35`}>Language Training</h1>
                </div>
            </div>
        </div>
    );
};

export default SelectTab;