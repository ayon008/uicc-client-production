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
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Student Visa Services</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we are passionate about helping students pursue their academic dreams abroad. Our *Student Visa Services* are designed to guide you through the entire visa process, from choosing the right program and destination to securing your student visa, ensuring that you can focus on your education without any visa-related worries.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Personalized Counseling: Our experienced counselors provide one-on-one consultations to help you select the best educational institution and program based on your interests, career goals, and financial situation.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Eligibility Assessment: We evaluate your academic background, financial capacity, and other essential factors to ensure that you meet the visa requirements for your chosen country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Preparation: We assist you in gathering all necessary documents, including proof of admission, financial statements, and language proficiency certificates, to ensure your application is complete and accurate.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Application Guidance: Our team walks you through the visa application process, helping you submit your application correctly and on time, reducing the chances of delays or rejections.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Preparation: If a visa interview is required, we offer mock interview sessions to help you feel confident and prepared to answer all questions effectively.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Countries We Support
                </h2>
                <ul className='space-y-6'>
                    <li>Our expertise spans a variety of study destinations, including:</li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Canada: Student visas and study permits for undergraduate and postgraduate programs.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            USA: F-1 visas for academic studies and J-1 visas for exchange programs.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Australia: Subclass 500 student visa for vocational and higher education courses.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            UK: Student visa for undergraduate and postgraduate degrees at top UK universities.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Europe: Schengen visas for short-term studies and residence permits for long-term programs in countries like Germany, France, and the Netherlands.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Japan and South Korea: Student visas for language schools, undergraduate, and postgraduate studies.
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
                            Proof of Admission: Assistance with obtaining the admission letter from a recognized educational institution.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Financial Proof: Guidance on presenting proof of funds to cover tuition fees, living expenses, and other costs.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Language Proficiency: Support with meeting language requirements, such as IELTS, TOEFL, or other necessary language tests, based on the country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Health and Character Requirements: Help with arranging medical examinations and police clearances where required.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Fee Payment: Assistance with the payment of visa application fees and submission of receipts.
                        </span>
                    </li>
                </ul>
                <div className="flex-1 flex flex-col justify-between px-10 mt-16 py-6 bg-[#FBFCFF]">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Student Visa</h2>
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
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Comprehensive Support</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">From choosing the right course to preparing for visa interviews, we provide end-to-end support throughout your student visa journey.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Experienced Advisors</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our counselors are experts in international student visa processes and stay updated with changing immigration policies.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Success-Oriented</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">With a high success rate in student visa applications, we ensure you have the best chance of getting approved.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Global Network</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">UICC has partnerships with top universities, colleges, and language institutions worldwide, giving you access to quality education options.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Visa Extensions and Post-Graduation Support</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We assist with visa extensions and provide advice on post-graduation work permits and pathways to permanent residency.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Additional Services for <br /> Students
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            University and College Selection: We help you choose the best institutions that match your academic profile and aspirations.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Scholarship Guidance: Assistance in identifying and applying for scholarships or financial aid options.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Pre-Departure Briefings: Information on what to expect upon arrival, including accommodation, transportation, and cultural adaptation.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            On-Arrival Support: Help with settling in, including airport pickup arrangements, finding housing, and opening bank accounts.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Post-Visa Support
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Relocation Assistance: Guidance on finding accommodation, managing finances, and navigating local services in your new country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Job Search Guidance: Information on part-time work opportunities for students, as well as pathways to post-study work visas.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Renewals: Support with renewing student visas or transitioning to work visas after graduation.
                        </span>
                    </li>
                </ul>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    At UICC, we believe that every student should have the opportunity to study abroad without the stress of visa issues. Our dedicated team will ensure that your student visa application is handled professionally and efficiently, so you can embark on your educational journey with confidence.
                </p>
            </div>
        </div >
    );
};

export default Page;