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
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Language Training at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    Uttara International Career Council (UICC) offers language training programs designed to help students and professionals improve their language skills, particularly for those planning to study or work abroad.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    IELTS and TOEFL Preparation
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Intensive courses focused on preparing students for the IELTS and TOEFL exams, which are often required for studying in English-speaking countries.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Classes cover all test sections: listening, reading, writing, and speaking, with strategies to achieve high scores.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Practice exams, personalized feedback, and tips for handling test-day challenges.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Basic to Advanced English <br /> Language Courses
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            General English courses at different proficiency levels, from beginner to advanced.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Emphasis on building a strong foundation in grammar, vocabulary, pronunciation, and conversational skills.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Specialized modules for academic writing, business English, and communication skills.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Japanese Language Training
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Courses tailored to students interested in studying or working in Japan, covering both language skills and cultural awareness.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Preparation for the Japanese Language Proficiency Test (JLPT), which is often required for study and work opportunities in Japan.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Classes on conversational Japanese for daily use and business Japanese for professional settings.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Korean Language Training
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Courses designed for students aiming to study or work in South Korea, with a focus on speaking, reading, writing, and understanding Korean.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Preparation for the Test of Proficiency in Korean (TOPIK), which can enhance academic or professional prospects in South Korea.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Cultural insights to help students adapt to life in South Korea and understand the local customs.
                        </span>
                    </li>
                </ul>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold mt-10'>Other Language Courses</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    UICC may also offer training in additional languages based on demand, such as French, German, or Mandarin, especially for students targeting study or career opportunities in non-English-speaking countries.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Flexible Learning Options
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Classes are often available in different formats, including in-person and online, with options for group classes or one-on-one tutoring.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Flexible schedules to accommodate students’ and working professionals’ availability.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Cultural Orientation and Practical Use
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Beyond language, UICC’s programs often integrate cultural orientation, helping students understand the customs, etiquette, and communication styles of their target countries.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Practical language skills are emphasized, ensuring students can confidently navigate real-life situations, such as university settings, workplaces, or social interactions abroad.
                        </span>
                    </li>
                </ul>

                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    UICC’s language training programs aim to equip students with the skills needed to excel in foreign environments, making them well-prepared for their academic or professional journeys abroad.
                </p>
            </div>
        </div >
    );
};

export default Page;


