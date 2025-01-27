
import React from 'react';
import Image from 'next/image';
import img1 from '../../../../public/assets/IMG_1564.JPEG.jpg'
import img2 from '../../../../public/assets/students-working-as-team-college.jpg'
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';

const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Korean'} text2={'Regular Batch'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Korean Language</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    To study in South Korea, students typically need a D-2 (Study Abroad Visa) or D-4 (General Training Visa) depending on the length and type of program. Here’s an overview of the requirements for each:
                </p>
                <ul className='supported-countries mt-7'>
                    <li className='flex items-start'>
                        <TickIcon />
                        <span>
                            <span className='text-deep-blue font-bold'>D-2 Visa (Study Abroad Visa):</span> For Undergraduate or Graduate Programs
                            <ul className='list-disc pl-6 mt-2'>
                                <li>Eligibility: Students enrolled in full-time academic programs (bachelor&apos;s, master&apos;s, or doctoral degree).</li>
                                <li>Required Documents:
                                    <ul className='list-item-dash'>
                                        <li>Passport</li>
                                        <li>Completed visa application form</li>
                                        <li>Passport-sized photo</li>
                                        <li>Certificate of Admission (issued by the Korean university)</li>
                                        <li>Proof of funds (bank statements showing sufficient funds for tuition and living expenses)</li>
                                        <li>Education certificates (high school diploma for undergraduate, or prior degree for graduate studies)</li>
                                        <li>Tuition payment receipt or proof of scholarship, if applicable</li>

                                    </ul>
                                </li>
                                <li>Processing Time: Usually 2-4 weeks.</li>
                                <li>Duration: Generally granted for one year; renewable based on the program length.</li>
                            </ul>
                        </span>
                    </li>
                    <li className='flex items-start'>
                        <TickIcon />
                        <span>
                            <span className='text-deep-blue font-bold'>D-4 Visa (General Training Visa):</span> For Language Programs or Short-term Studies
                            <ul className='list-disc pl-6 mt-2'>
                                <li>Eligibility: Students enrolled in language training or non-degree programs (like Korean language courses).</li>
                                <li>Required Documents:
                                    <ul className='list-item-dash'>
                                        <li>Passport</li>
                                        <li>Visa application form</li>
                                        <li>Passport photo</li>
                                        <li>Certificate of Enrollment from a Korean educational institution</li>
                                        <li>Proof of financial ability to cover costs (often required to show around $10,000 in the bank)</li>
                                        <li>Health certificate (may be required by some consulates)</li>

                                    </ul>
                                </li>
                                <li>Processing Time: Usually 2-4 weeks,but it can vary</li>
                                <li>Duration: Typically six months to one year, renewable if needed.</li>
                            </ul>
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Interview: Some consulates may require an interview.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Health Insurance: South Korea requires international students to be enrolled in the national health insurance, which is automatically applied after 6 months in the country.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Medical Exam: Some universities require a tuberculosis test or other medical exam.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Alien Registration Card (ARC): Once in South Korea, students need to apply for an ARC at a local immigration office within 90 days of arrival. This card is essential for opening bank accounts, signing up for phone plans, and more.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <span>
                            Check with the nearest South Korean consulate or embassy, as visa requirements and procedures can vary slightly by location.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Korean Regular Batch
                </h2>
                <ul className='space-y-6'>
                    <li>Our expertise spans a variety of study destinations, including:</li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            EPS-TOPIK (I-II) & Question bank solving
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            4 Months duration
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            3 days a week
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            5 Mock tests & 2 Assessment tests
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Speaking mock test every day
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Course fee: 10,000/-
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
                    FACILITIES
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Learn Korean (Beginning to advanced)
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Study Visa Processing
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            EPS-TOPIK, TOPIK Exam Preparation
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Experienced Tutor
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Multimedia classroom & standard study materials
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Free learning materials
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Free mock test through our website
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Weekly class test & assessment test
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            After completing the course successfully will provide an Online Certificate
                        </span>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Page;