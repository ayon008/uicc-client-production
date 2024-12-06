'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '@/../public/assets/44923e5447f015910dcbb865d34f84e2.png'
import img2 from '@/../public/assets/b655cb9ea254db8e60a6ccaa93a1d36b.png'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import { TickIcon } from '../layout';

const Page = () => {
    return (
        <div>
            <div>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Air Ticket Support at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we offer convenient Air Ticket Support services to complement your visa and travel needs. Whether you’re traveling for study, work, or leisure, we ensure that your flight bookings are smooth and hassle-free.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Flight Booking Assistance: We help you find and book affordable flights that suit your schedule and budget.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Special Discounts: Access to exclusive deals and discounts for students, workers, and families traveling abroad.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Flexible Booking Options: Assistance with booking flexible or refundable tickets to accommodate visa processing times or changes in travel plans.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Group Bookings: Special support for group travel arrangements, making it easier for families or colleagues to fly together.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            24/7 Support: Our team is available to assist with any flight-related queries or changes before your departure.
                        </span>
                    </li>
                </ul>
                <div className='flex items-center mt-8 gap-6'>
                    <Image className='flex-1' src={img1} alt='' />
                    <Image className='flex-1' src={img2} alt='' />
                </div>
                <div className="flex-1 flex flex-col justify-between px-10">
                    <div className="mt-16">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Air Ticketing</h2>
                        </div>
                        <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-3 w-full">
                            Reason to Choose Us
                        </h1>
                    </div>
                    <div className="space-y-14 mt-10">
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Convenience</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We handle the entire flight booking process, saving you time and effort.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Competitive Pricing</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Access to competitive fares and deals for your destination.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Travel Expertise</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We provide guidance on the best routes and airlines for your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    Let UICC take care of your travel plans with our reliable air ticket support, so you can focus on your next adventure.
                </p>
            </div>
        </div >
    );
};

export default Page;


