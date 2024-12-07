import SectionTitle from '@/shared/SectionTitles';
import React from 'react';
import ScrollDim from './ScrollDim';
import Services from '@/shared/Services';
import Image from 'next/image';
import ielts from '../../public/assets/image (4).png'
import img2 from '../../public/assets/7cf35f6ab24ee8d5c906ab5657a6ca72.png'
import img1 from '../../public/assets/429b4dc278066dff3de30390f03f017e.png'
import video from '@/../public/assets/Cool black Background (1).mp4'

const ServicesCom = () => {
    return (
        <div className='mt-20'>
            <div className='pt-20 relative'>
                <div className='absolute right-0 bottom-0 w-full left-0 top-0 pointer-events-none -z-10 opacity-90 backdrop-blur-lg'>
                    <video
                        className='w-full h-full object-cover'
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className='2xl:w-[60%] xl:w-[60%] w-[90%] mx-auto'>
                    <ScrollDim heading1={'We Provide Language Support and Visa Processing'} heading2={'and Visa Processing'} show={true} subHeading={'Our Services'} />
                </div>
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 2xl:gap-0 xl:gap-0 gap-6 2xl:px-0 xl:px-0 px-4 mt-10 max-w-7xl mx-auto">
                    <Services heading={'Career'} href={'/signUp'} subHeading={'Career Counseling'} text={'UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.'} />
                    <Image src={img1} className="h-full object-cover" alt="" />
                    <Services heading={'IELTS'} href={'/signUp'} subHeading={'IELTS Preparation'} text={'We offer specialized IELTS training programs that are designed to help students achieve the scores required for admission to international universities and professional qualifications.'} />
                    <Image src={ielts} className="h-full object-cover" alt="" />
                    <Services heading={'language training'} href={'/signUp'} subHeading={'Japanese and Korean Language'} text={'Whether for academic purposes, career advancement, or personal interest, our language courses are led by experienced instructors to ensure fluency and cultural competency.'} />
                    <Image src={img2} className="h-full object-cover" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServicesCom;