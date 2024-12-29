import React from 'react';
import ServiceBanner from '@/shared/ServiceBanner';
import SectionTitle from '@/shared/SectionTitles';
import BottomSection from '@/shared/BottomSection';
import ButtonPrimary from '@/shared/ButtonPrimary';
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4';
import img1 from '../../../public/assets/FotoJet.png';
import Universities from '@/components/Universities';


// List of Australian universities




const page = () => {
    return (
        <div className="relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 -z-10">
                <video
                    className="w-full h-full object-cover opacity-30"
                    autoPlay
                    loop
                    muted
                    playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <ServiceBanner text1={'Universities'} img={img1} />

            <div className="2xl:my-28 xl:my-20 my-10">
                <SectionTitle
                    subHeading={'Associate Universities'}
                    heading1={'The Universities We Serve'}
                />
            </div>
            <Universities/>
            <div className="max-w-[1440px] mx-auto 2xl:px-10 xl:px-10">
                <BottomSection />
            </div>
        </div>
    );
};

export default page;
