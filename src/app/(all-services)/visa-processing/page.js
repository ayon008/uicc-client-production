'use client'
import React from 'react';
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
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Visa Processing</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    Uttara International Career Council now provides a comprehensive visa processing service designed to simplify and support the application process for students, professionals, and travelers. Our services include guidance for various visa types, ensuring your application meets all requirements for a successful outcome. Here’s a detailed breakdown of what we offer:
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Consultation and Eligibility Assessment
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Initial Consultation: We offer a consultation to understand your needs, destination, and specific visa requirements
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Eligibility Check: Our experts assess your eligibility, guiding you on the best visa options for your travel, work, or study plans
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Document Verification and Preparation
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Checklist: We provide a list of required documents specific to the type of visa and the country you’re applying for.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Review: Our team meticulously reviews your documents to ensure they meet embassy requirements, avoiding potential delays or rejections.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Translations and Notarization: We assist with translations, notarizations, and certifications when needed for documents such as educational records, work certificates, and personal identification.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Application Assistance
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Form Filling Support: Visa applications often require detailed information; our team helps you fill out these forms accurately.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Personalized Guidance: We offer step-by-step support, making sure your application is comprehensive and correct.
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
                    Interview Preparation and Mock Interviews
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Coaching: For visa types requiring an interview, we provide guidance on possible questions and tips for a successful interview.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Mock Interview: Practice interviews with feedback to build confidence and ensure you’re well-prepared.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Follow-Up and Tracking
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Application Tracking: We monitor the status of your application, providing updates and communicating with the embassy if required.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Follow-Up Services: In case of additional requirements or document requests from the embassy, we help facilitate prompt responses to avoid delays.
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
                            Travel and Relocation Assistance: Once your visa is approved, we can assist with travel arrangements, including flight bookings and accommodations.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Pre-Departure Briefing: Essential information about your destination, cultural insights, and local regulations to ensure a smooth transition.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Types of Visas We Support
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Student Visa: For those planning to study abroad, especially for programs like IELTS, Japanese, and Korean language studies.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Work Visas: Assistance for individuals seeking employment abroad, covering documentation for work permits and sponsorships.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Tourist Visas: Guidance for short-term travel and tourism, ensuring hassle-free applications.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Business Visas: For professionals attending meetings, conferences, or short-term business stays.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Family and Dependent Visas: Support for family members joining relatives who are living or working abroad.
                        </span>
                    </li>
                </ul>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    By choosing International Career Council&apos;s visa processing service, you benefit from personalized support, expert guidance, and a dedicated team that makes visa application stress-free. For more details
                </p>
            </div>
        </div >
    );
};

export default Page;