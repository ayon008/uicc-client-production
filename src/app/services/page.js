
import ielts from '@/../public/assets/image (4).png'
import BottomSection from '@/shared/BottomSection';
import SectionTitle from '@/shared/SectionTitles';
import ServiceBanner from '@/shared/ServiceBanner';
import Services from '@/shared/Services';
import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/assets/lazaro-rodriguez-Ij5oHzQEh8Q-unsplash.jpg'
import img2 from '../../../public/assets/conner-ching-0U1rWYHF0tg-unsplash.jpg'
import img3 from '../../../public/assets/bayu-nugroho-4biaA0DSR44-unsplash.jpg'
import img4 from '../../../public/assets/saung-digital-OosjBGZ-aRM-unsplash.jpg'
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4'


const page = () => {
    return (
        <div>
            <ServiceBanner text1={'Services'} />
            <div className="pt-20 2xl:px-10 xl:px-10 px-6 relative">
                <div className='absolute right-0 left-0 top-0 bottom-0 -z-10'>
                    <video
                        className='w-full h-full object-cover opacity-30'
                        autoPlay
                        loop
                        muted
                        playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <SectionTitle heading1={'Committed to provide'} heading2={'you best visa services'} subHeading={'Visa Services'} />
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 mt-10 w-7xl mx-auto 2xl:px-10 xl:px-10 2xl:gap-0 xl:gap-0 gap-6">
                    <Services color="black" btn={true} heading={'Career'} subHeading={'Career Counseling'} text={'UICC offers personalized career counseling to help students navigate the complexities of international job markets, providing insights into visa requirements, professional certifications, and career pathways.'} />
                    <div className="h-full w-full">
                        <Image src={ielts} className="h-[400px] object-cover" alt="" />
                    </div>
                    <Services color="black" btn={true} heading={'IELTS'} href={'/ielts'} subHeading={'IELTS Preparation'} text={'We offer specialized IELTS training programs that are designed to help students achieve the scores required for admission to international universities and professional qualifications.'} />
                    <div className="h-full w-full">
                        <Image src={img1} className="h-[400px] object-cover" alt="" />
                    </div>
                    <Services color="black" btn={true} heading={'language training'} subHeading={'Japanese and Korean Language'} text={'Whether for academic purposes, career advancement, or personal interest, our language courses are led by experienced instructors to ensure fluency and cultural competency.'} />
                    <div className="h-full w-full">
                        <Image src={img2} className="h-[400px] object-cover" alt="" />
                    </div>
                    <Services color="black" btn={true} heading={'Ticket'} href={'/air-ticket'} subHeading={'Air Ticket Support'} text={'UICC, we offer convenient Air Ticket Support services to complement your visa and travel needs. Whether you’re traveling for study, work, or leisure, we ensure that your flight bookings are smooth and hassle-free.'} />
                    <div className="h-full w-full">
                        <Image src={img3} className="h-[400px] object-cover" alt="" />
                    </div>
                    <Services color="black" btn={true} heading={'Visa'} href={'/visa-processing'} subHeading={'Visa Processing'} text={'We are passionate about helping students pursue their academic dreams abroad. Our *Visa Services* are designed to guide you through the entire visa process, from choosing the right program and destination.'} />
                </div>
                <BottomSection />
            </div>
        </div>
    );
};

export default page;