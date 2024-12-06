'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '@/../public/assets/44923e5447f015910dcbb865d34f84e2.png'
import img2 from '@/../public/assets/b655cb9ea254db8e60a6ccaa93a1d36b.png'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import { TickIcon } from '../../layout';

const Page = () => {
    return (
        <div>
            <div>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Tourist Visa Services</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we simplify the visa process so you can focus on your travel plans. Whether you’re exploring new places, visiting family, or traveling for leisure, we provide comprehensive support to ensure your tourist visa is approved without hassle.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Personalized Consultation: Guidance on visa requirements based on your destination.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Preparation: Assistance with all necessary documents, including passport, financial proof, travel itinerary, and invitation letters.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Application Assistance: Step-by-step support to ensure your application is submitted correctly.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Prep: Mock interviews and tips for countries requiring visa interviews.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Countries We Support
                </h2>
                <ul className='supported-countries'>
                    <li>We assist with tourist visas for countries like:</li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Canada
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            USA
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            UK
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Schengen (Europe)
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Australia
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Japan
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            South Korea
                        </span>
                    </li>
                </ul>
                <div className='flex items-center mt-10 2xl:gap-6 xl:gap-6 gap-3 w-full'>
                    <div className='w-1/2'>
                        <Image className='2xl:flex-1 xl:flex-1 w-full' src={img1} alt='' />
                    </div>
                    <div className='w-1/2'>
                        <Image className='2xl:flex-1 xl:flex-1 w-full' src={img2} alt='' />
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    At UICC, we make travel easy. Let us manage the visa process while you plan your dream trip.
                </p>
            </div>
        </div >
    );
};

export default Page;