
import React from 'react';
import Image from 'next/image';
import img1 from '@/../public/assets/1000001637.jpg'
import img2 from '@/../public/assets/1000001628.jpg'
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';



const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'English Communication'} text2={'Skill Development'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>IELTS Programme</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    Get the IELTS score you need with our proven methods and expert teachers. Our comprehensive IELTS course is intended to give you everything you need to succeed and get the score you require. You will receive personalised feedback regarding your areas of improvement. You can also take unlimited mock tests with us to hone your skills and get one step closer to your dreams.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    English Communication Skill <br /> Development Course
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            3 months course
                        </span>
                    </li>
                    <li>
                        <div className='flex items-center'>
                            <TickIcon />
                            <span>
                                3 days a week
                            </span>
                        </div>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Course fee: 12,000/-
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
                    What You Will Learn from the Course
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Unlimited Mock Tests and Interview Sessions: Students will be able to take unlimited mock tests and 1-1 speaking exams to improve their test-taking skills.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Access to 1,000+ Practice Materials: Our materials will familiarize students with every type of question and we will guide students to answer questions smartly.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Repeat Course Once: Students will be able to repeat the course once if they fail to achieve their required score the first time.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            1-1 Counselling Sessions from Expert Teachers: Students will receive 1-1 feedback from teachers to understand exactly where they need to improve.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Bonus Workshops: Throughout the course, students will have the opportunity to participate in numerous free workshops to improve their overall writing and speaking skills.
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Page;