import React from 'react';
import image2 from '../../public/assets/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg'
import FaTelegram from '@/icons/FaTelegram';
import Image from 'next/image';
import FaTicket from '@/icons/FaTicket';
import image from '../../public/assets/halftone-world-map-background-from-dots_1164-2245.avif'
import TextAnimation from '@/shared/TextAnimation';
import Animated from '@/shared/Animated';

const ChooseUs = () => {
    return (
        <div className="relative mx-auto flex justify-between gap-6 2xl:mb-40 xl:mb-28 mb-16">
            <div className='absolute top-0 bottom-0 2xl:right-1/2 xl:right-1/2 right-0 opacity-30 left-0 z-10 '>
                <Image src={image} className='object-cover h-full w-full' alt='' />
            </div>
            <div className="flex-1 flex flex-col justify-between relative z-40 2xl:pl-10 xl:pl-10 pl-6 pb-14">
                <div className="2xl:mt-16 xl:mt-16 mt-8">
                    <div className="flex items-center gap-2">
                        <FaTelegram />
                        <TextAnimation className="2xl:text-2xl xl:text-xl text-base font-semibold">
                            Why Choose UICC
                        </TextAnimation>
                    </div>
                    <h1>
                        <TextAnimation className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-2 w-full">
                            Reason to Choose Us
                        </TextAnimation>
                    </h1>
                </div>
                <div className="2xl:space-y-10 xl:space-y-10 space-y-6 2xl:mt-0 xl:mt-0 mt-6">
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <Animated>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Expert Faculty</h2>
                                <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">Our team consists of seasoned professionals with years of experience in international education, language training, and career guidance.</p>
                            </div>
                        </Animated>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <Animated>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Student-Centered Approach</h2>
                                <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">We pride ourselves on offering tailored solutions that cater to the individual goals and aspirations of our students.</p>
                            </div>
                        </Animated>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-2 w-fit bg-orange-light rounded-full">
                            <div className="p-2 bg-orange rounded-full">
                                <FaTicket />
                            </div>
                        </div>
                        <Animated>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl text-lg font-semibold">Global Network</h2>
                                <p className="2xl:text-xl xl:text-lg text-sm font-normal mt-3">UICC has established connections with universities, companies, and professionals across the world, giving our students access to valuable resources and opportunities.</p>
                            </div>
                        </Animated>
                    </div>
                </div>
            </div>
            <Image className="w-1/2 max-h-[700px] object-cover 2xl:block xl:block hidden" src={image2} alt="" />
        </div>
    );
};

export default ChooseUs;