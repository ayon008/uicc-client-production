'use client'
import React from 'react';
import image2 from '../../public/assets/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg'
import FaTelegram from '@/icons/FaTelegram';
import Image from 'next/image';
import FaTicket from '@/icons/FaTicket';

const ChooseUs = () => {
    return (
        <div className="2xl:px-10 xl:px-10 px-6 max-w-7xl mx-auto flex justify-between gap-6 2xl:mb-40 xl:mb-28 mb-16">
            <div className="flex-1 flex flex-col justify-between">
                <div className="2xl:mt-16 xl:mt-16 mt-8">
                    <div className="flex items-center gap-2">
                        <FaTelegram />
                        <h2 className="2xl:text-2xl xl:text-xl text-base font-semibold">Why Choose UICC</h2>
                    </div>
                    <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 w-full">
                        Reason to Choose Us
                    </h1>
                </div>
                <div className="2xl:space-y-10 xl:space-y-10 space-y-6 2xl:mt-0 xl:mt-0 mt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Expert Faculty</h2>
                            <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">Our team consists of seasoned professionals with years of experience in international education, language training, and career guidance.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Student-Centered Approach</h2>
                            <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">We pride ourselves on offering tailored solutions that cater to the individual goals and aspirations of our students.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <div>
                            <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Global Network</h2>
                            <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">UICC has established connections with universities, companies, and professionals across the world, giving our students access to valuable resources and opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Image className="w-1/2 max-h-[700px] object-fill 2xl:block xl:block hidden" src={image2} alt="" />
        </div>
    );
};

export default ChooseUs;