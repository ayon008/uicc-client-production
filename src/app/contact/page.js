import React from 'react';
import image from '@/../public/assets/stephen-phillips-hostreviews-co-uk-3Mhgvrk4tjM-unsplash.jpg'
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import ServiceBanner from '@/shared/ServiceBanner';
import { FaPhoneAlt } from 'react-icons/fa';
import SectionTitle from '@/shared/SectionTitles';
import ContactForm from '@/components/ContactFrom';
import BottomSection from '@/shared/BottomSection';
import img1 from '../../../public/assets/WhatsApp Image 2024-12-29 at 13.44.31_6adcb3ad.jpg'
import email from '../../../public/assets/WhatsApp Image 2024-12-29 at 13.51.40_3e364274.jpg';


const page = () => {
    return (
        <div className=''>
            <ServiceBanner text1={'Contact Us'} img={img1} />
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-6 2xl:px-11 xl:px-8 2xl:py-14 xl:py-10 p-6 max-w-[1440px] mx-auto 2xl:mb-36 xl:mb-28 mb-16 mt-10'>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={email} alt='email' className='max-h-[227px] object-cover' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <AiOutlineMail size={48} color="black" />
                    </div>
                    <div className="card-body 2xl:mt-14 xl:mt-14 mt-8">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl text-lg font-medium">Send Us Mail</h2>
                        <p className="2xl:text-xl xl:text-lg text-center 2xl:mt-2 xl:mt-2 mt-1 text-[#808080]">
                            <a
                                href="mailto:info@uttara.com"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                info@uttara.com
                            </a>
                        </p>
                        <p className="2xl:text-xl xl:text-lg text-center 2xl:mt-2 xl:mt-2 mt-1 text-[#808080]">
                            <a
                                href="mailto:uttaraicc@gmail.com"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                uttaraicc@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={image} alt='email' className='max-h-[227px] object-fill' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <HiOutlineLocationMarker size={48} color="black" />
                    </div>
                    <div className="card-body 2xl:mt-14 xl:mt-14 mt-8">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl text-lg font-medium">Visit Our Office</h2>
                        <p className='2xl:text-base xl:text-sm text-[8px] 2xl:mt-6 xl:mt-6 mt-3 text-center text-[#808080]'>87, BNS Center, Sector-7, Uttara, Dhaka-1230
                        </p>
                    </div>
                </div>
                <div className="card card-compact rounded-lg shadow-xl relative">
                    <figure>
                        <Image src={image} alt='email' className='max-h-[227px] object-fill' />
                    </figure>
                    <div className='bg-white shadow-xl p-6 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit max-h-[227px]'>
                        <FaPhoneAlt size={48} color="black" />
                    </div>
                    <div className="card-body 2xl:mt-14 xl:mt-14 mt-8">
                        <h2 className="text-center 2xl:text-2xl xl:text-xl text-lg font-medium">Call Us Anytime</h2>
                        <p className='2xl:text-xl xl:text-lg 2xl:mt-6 xl:mt-6 mt-3 text-center text-[#808080]'>+880-1958377801</p>
                        <p className='2xl:text-xl xl:text-lg text-center 2xl:mt-2 xl:mt-2 mt-1 text-[#808080]'>+880-1958377802</p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto'>
                <SectionTitle heading1={'Get your first visa consultation free!'} subHeading={'Drop Us a Line'} />
            </div>
            <ContactForm />
            <BottomSection />
        </div>
    );
};

export default page;