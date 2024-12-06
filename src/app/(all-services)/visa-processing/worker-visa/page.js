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
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Worker Visa Services at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we provide comprehensive support for individuals seeking employment opportunities abroad through Worker Visa Services. Navigating the visa process can be complex and time-consuming, but our team of experts is here to make it simple and efficient, helping you secure the visa you need to build your career internationally.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Consultation: Our experienced counselors provide personalized guidance to help you choose the right worker visa based on your profession, destination, and long-term goals.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Eligibility Assessment: We help assess your qualifications to determine which countries and visa categories you are eligible for, ensuring you have the best chances of success.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Preparation: From gathering necessary documents to completing forms accurately, we assist you in preparing a flawless application.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Employer Liaison: We guide you on how to secure a job offer from a foreign employer, a crucial requirement for most worker visas.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Application Tracking: We monitor your application process and provide timely updates to ensure everything runs smoothly.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Types of Worker Visas We <br /> Assist With
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Skilled Worker Visa: For professionals with specialized skills, including IT, engineering, healthcare, and more.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Work Permit Visa: Assistance with obtaining work permits for countries that require employer sponsorship.
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
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Key Visa Requirements We <br /> Help You Meet
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Job Offer: Assistance with securing employment and obtaining necessary employer sponsorship.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Skill Assessment: We help you prepare for any required skill or qualification assessments needed by the immigration authorities of your target country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Language Proficiency: Guidance on meeting English language requirements through exams like IELTS or other required tests.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Financial Requirements: Help in documenting proof of sufficient funds, if applicable.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Health and Background Checks: Support with medical exams and police clearances, ensuring compliance with visa conditions.
                        </span>
                    </li>
                </ul>
                <div className="flex-1 flex flex-col justify-between px-10 mt-16 py-6 bg-[#FBFCFF]">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Worker Visa</h2>
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
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Industry Expertise</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our counselors are up-to-date with the latest visa policies and requirements, giving you the best chance of success.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Tailored Solutions</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We offer customized advice based on your industry, experience, and career goals.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">End-to-End Support</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">From visa consultation to post-approval services like relocation and settlement assistance, we cover every step of the journey.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">High Success Rate</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our track record of successful worker visa applications speaks for itself, ensuring that you can trust us with your international career dreams.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Post-Visa Support
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Relocation Assistance: We help you settle in by providing guidance on housing, banking, and local services.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Employment Support: Information on workplace culture, labor laws, and rights in your new country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Renewals and Extensions: Assistance with extending your work visa or transitioning to permanent residency.
                        </span>
                    </li>
                </ul>

                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    At UICC, we are committed to helping you achieve your global career aspirations with ease. Let our expertise guide you through the worker visa process, so you can focus on starting your new professional journey abroad.
                </p>
            </div>
        </div >
    );
};

export default Page;