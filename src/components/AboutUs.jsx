import Image from 'next/image';
import React from 'react';
import image from '../../public/assets/pexels-cottonbro-4667331.jpg'
import Animated from '@/shared/Animated';
import img1 from '../../public/assets/1 (1).png'
import { FaPhoneAlt, FaPlus } from 'react-icons/fa';
import { rubik, serif } from '@/app/layout';
import { FiSend } from 'react-icons/fi';
import SemiCircularProgressBar from './ProgressBar';
import us from '@/../public/assets/us.png'
import kr from '@/../public/assets/kr.png'
import jp from '@/../public/assets/jp.png'
import nz from '@/../public/assets/nz.png'
import gb from '@/../public/assets/gb.png'
import can from '../../public/assets/ca.png'
import aus from '../../public/assets/aeacee374b2878078f489fb0e8234989.png'
import FaTelegram from '@/icons/FaTelegram';
import FaTicket from '@/icons/FaTicket';
import Link from 'next/link';
import TextAnimation from '@/shared/TextAnimation';
import ButtonSecondary from '@/shared/ButtonSecondary';
import { getData } from '@/js/getData';
// import video from '../../public/assets/About.mp4';

const AboutUs = async () => {
    const [data, user] = await Promise.all([
        getData('https://uicc-server.vercel.app/visitors'),
        getData('https://uicc-server.vercel.app/users')
    ]);
    const totalUser = user?.userCount + 4021;
    const visitors = data?.visitorCount;
    console.log(totalUser, visitors);
    return (
        <div className='relative'>
            <div className='absolute right-0 left-0 top-0 bottom-0 -z-10'>
                <video
                    className='w-full h-full object-cover opacity-50'
                    autoPlay
                    loop
                    muted>
                    <source src='/assets/About.mp4' type="video/mp4" />
                </video>
            </div>
            <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 max-w-[1440px] mx-auto 2xl:py-24 xl:py-24 2xl:pl-24 xl:pl-24 px-5 py-10 gap-24 relative">
                <div className='relative '>
                    <Animated className='2xl:absolute xl:absolute relative 2xl:mb-0 xl:mb-0 mb-2 2xl:-left-14 xl:-left-14 2xl:top-28 xl:top-28 2xl:w-auto xl:w-auto w-3/4'>
                        <div className='bg-orange hover:bg-deep-blue transition-all duration-300 ease-linear cursor-pointer flex items-center 2xl:gap-7 xl:gap-7 gap-3 2xl:px-8 2xl:py-6 xl:px-8 xl:py-6 px-4 py-2 2xl:rounded-3xl xl:rounded-3xl rounded-lg'>
                            <div className='2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] 2xl:block xl:block hidden rounded-full bg-white relative'>
                                <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <FaPhoneAlt size={'1.2rem'} color='#c6250c' className='2xl:block xl:block hidden' />
                                </div>
                            </div>
                            <div className='2xl:hidden xl:hidden block w-[40px] h-[40px] rounded-full bg-white relative'>
                                <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <FaPhoneAlt size={'0.6rem'} color='#c6250c' className='' />
                                </div>
                            </div>
                            <div>
                                <p className={`text-white 2xl:text-lg xl:text-lg text-sm font-normal ${serif.className}`}>Call For Consultation</p>
                                <h3 className={`mt-1 ${rubik.className} font-semibold text-white 2xl:text-2xl xl:text-2xl text-xl`}>
                                    <a href="tel:+8801958377801">
                                        +8801958377801
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </Animated>
                    <Image src={image} className='w-full max-h-[632px] object-cover object-center' priority placeholder='blur' alt='' />
                    <Animated className='absolute 2xl:-right-24 2xl:bottom-16 xl:-right-24 xl:bottom-16 2xl:left-auto xl:left-auto left-0 -bottom-5 pt-10 pr-10 bg-transparent'>
                        <div className='w-[250px] bg-white py-10 px-6 rounded-2xl relative'>
                            <div className='w-fit h-fit absolute -top-4 -right-4 bg-deep-blue p-4 rounded-full'>
                                <FiSend size={'1.5rem'} color='white' />
                            </div>
                            <h5 className='text-base pb-4 border-b-[1px] border-gray text-center'>Served Client</h5>
                            <div>
                                <SemiCircularProgressBar />
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='relative flex items-center'>
                                    <Image src={us} alt='' className='w-[40px] h-[40px] rounded-full border-2 border-white' />
                                    {/* <Image src={jp} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' /> */}
                                    <Image src={nz} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' />
                                    <Image src={can} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' />
                                    {/* <Image src={kr} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' /> */}
                                    <Image src={aus} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' />
                                    <Image src={gb} alt='' className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white' />
                                    <div className='w-[40px] h-[40px] rounded-full -ml-[20px] border-2 border-white relative bg-red-200'>
                                        <div className='w-fit h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                            <FaPlus color='red' />
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-deep-blue text-[10px]'>7 Countries</h3>
                            </div>
                        </div>
                    </Animated>
                    <Animated className='2xl:block xl:block hidden absolute top-10 -right-14'>
                        <div className="relative">
                            <Image className="z-30" src={img1} alt="" />
                            <div className="absolute top-1/2 -translate-y-1/2 z-40 left-10">
                                <h4>Visitors</h4>
                                <p>{visitors}</p>
                            </div>
                        </div>
                    </Animated>
                    <Animated className='2xl:block xl:block hidden absolute -left-14 bottom-28'>
                        <div className="relative">
                            <Image className="z-30" src={img1} alt="" />
                            <div className="absolute top-1/2 -translate-y-1/2 z-40 left-10">
                                <h4>Students</h4>
                                <p>{totalUser}</p>
                            </div>
                        </div>
                    </Animated>
                </div>
                <div className="flex flex-col justify-between 2xl:space-y-0 xl:space-y-0 space-y-6">
                    <div className="flex items-center gap-2">
                        <FaTelegram />
                        <TextAnimation className={'2xl:text-2xl xl:text-xl font-semibold uppercase text-[#27437F]'}>
                            About Us
                        </TextAnimation>
                    </div>
                    {/* <span className="dream relative">Dream into</span> Reality */}
                    <TextAnimation className="2xl:text-4xl xl:text-4xl text-2xl font-semibold mt-2 2xl:leading-[40px] xl:leading-[40px] uppercase">
                        <p className='whitespace-nowrap'>We help Making your</p>
                    </TextAnimation>
                    <TextAnimation delay={0.3} scale={0} className="2xl:text-4xl xl:text-4xl text-2xl font-semibold 2xl:-mt-14 xl:-mt-14 -mt-6 uppercase">
                        <p><span className="dream relative">Dream into</span> Reality</p>
                    </TextAnimation>
                    <p className="">
                        At Uttara International Career Council (UICC), we are dedicated to helping individuals unlock their global potential. Established with the vision of empowering students and professionals to pursue their dreams on an international scale, UICC offers a comprehensive range of services designed to guide you toward academic, linguistic, and career success abroad.
                    </p>
                    <div className="flex justify-between 2xl:gap-0 xl:gap-0 gap-6 items-center">
                        <Animated>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange w-fit p-3 rounded-full">
                                    <FaTicket />
                                </div>
                                <h3 className="2xl:text-xl xl:text-lg font-semibold">Visa Eligibilities</h3>
                            </div>
                        </Animated>
                        <Animated>
                            <div className="flex items-center gap-4">
                                <div className="bg-orange w-fit p-3 rounded-full">
                                    <FaTicket />
                                </div>
                                <h3 className="2xl:text-xl xl:text-lg font-semibold">Career Counseling</h3>
                            </div>
                        </Animated>
                    </div>
                    <div>
                        <Link href={'/signUp'}>
                            <Animated>
                                {/* <ButtonPrimary text={'Register Now'} /> */}
                                <ButtonSecondary text={'Register Now'} />
                            </Animated>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;