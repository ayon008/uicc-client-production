
import React from 'react';
import Image from 'next/image';
import img1 from '@/../public/assets/timothy-ries-nlLII3H_tcY-unsplash.jpg'
import FaTicket from '@/icons/FaTicket';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';
import img2 from '../../../../public/assets/close-up-pupils-doing-japanese-calligraphy-called-shodo.jpg';

const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Japanese Language'} text2={'Course N4'} img={img2} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Japanese Language
                </h2>
                <ul className='supported-countries'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Unlimited Japan&apos;s student visa is relatively easy to obtain.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            IELTS is not required. You can go to Japan with an N5 level or a 4-month valid Japanese language course.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            There are many opportunities to get a student visa through the language program instead of other categories.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Obtaining a visa is quite easy. The most common and easiest way to get a visa for Japan is through the language program.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Generally, students can work part-time for about 4 hours a day or up to 28 hours a week. The hourly wage is between ¥1,100 and ¥1,350. In total, it can amount to between ¥120,000 and ¥150,000 per month.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Japanese Language Course N4
                </h2>
                <ul className='supported-countries'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Course Duration: 4 Months
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Every Week: 3 days Class
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Per day: 2+ Hours Class
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Text: Minnano Nihongo 2
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Syllabus: Lesson 26-50 + Kanji (N4)
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Course fee: 15,000/-
                        </span>
                    </li>
                </ul>
                <div className='flex 2xl:flex-row xl:flex-row flex-col items-center mt-10 2xl:gap-6 xl:gap-6 gap-3 w-full'>
                    <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                        <Image placeholder='blur' className='2xl:flex-1 xl:flex-1 w-full 2xl:h-[450px] xl:h-[350px] 350px object-cover' src={img1} alt='' />
                    </div>
                    <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                        <Image placeholder='blur' className='2xl:flex-1 xl:flex-1 w-full 2xl:h-[450px] xl:h-[350px] 350px object-cover' src={img2} alt='' />
                    </div>
                </div>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    COURSE CONTENTS
                </h2>
                <ul className='supported-countries'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Grammar, Listening, Kanji, Reading, Vocabulary
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Monthly test for constant improvement
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Regular homework for good hands-on practice
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Practice on JLPT/NAT previous question papers
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Free mock tests will be taken before JLPT/NAT exam
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Proper guidelines about Japanese culture from Japanese language instructors
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    FACILITIES
                </h2>
                <ul className='supported-countries'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Experienced & Full-Time Teachers
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            A to Z Full Support
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Free Book Materials
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Batch Changeable
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            AC Room
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Good Sound System
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Page;