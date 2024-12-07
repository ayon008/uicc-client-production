import Image from 'next/image';
import React from 'react';
import image from '@/../public/assets/1b3da64de52034b51f6246051b268a8a.png'
import image1 from '@/../public/assets/8465bf6b1213d39678808487b085218f.png'
import image2 from '@/../public/assets/fec51fd1393a3cb27b4bfd98f36e8c9e.png'
import image3 from '@/../public/assets/461e8b3f78c3c1e2faa3a3e4f1360f16.png'
import ServiceBanner from '@/shared/ServiceBanner';
import SectionTitle from '@/shared/SectionTitles';
import BottomSection from '@/shared/BottomSection';
import ServiceHistory from '@/shared/ServiceHistory';
import AboutUs from '@/components/AboutUs';
import ChooseUs from '@/components/ChooseUs';
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4';

const page = () => {
    return (
        <div className='max-w-[1440px] relative mx-auto'>
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
            <ServiceBanner text={'About Us'} />
            <div className='2xl:my-20 xl:my-16 my-10 2xl:px-0 xl:px-0 px-6'>
                <SectionTitle heading1={'We Help Making your'} heading2={'Dream into Reality'} subHeading={'About Our Company'} />
            </div>
            <div className='flex 2xl:px-10 xl:px-10 px-6 justify-between gap-10 mt-10'>
                <div className='flex-1 2xl:block xl:block hidden'>
                    <Image
                        className="w-full h-full object-cover"
                        style={{ objectPosition: '-520px center' }}
                        src={image}
                        alt=""
                    />
                </div>
                <div className='flex-1'>
                    <h5 className='2xl:text-xl xl:text-xl text-base font-medium'>
                        The mission of the UICC is to encourage the learning of in demand languages. With the right guidance and support you will be on your way to achieving your desire language test score and opening doors to world of opportunities. UICC language institute emphasizes personalized attention. Our classes are smaller batch sizes and one-to-one sessions are given where instructions address individual strengths and waitresses to improve specific areas.
                    </h5>
                    <div className='w-fit 2xl:my-8 xl:my-6 my-5'>
                        <span className='2xl:text-2xl xl:text-xl text-lg font-semibold w-fit'>Our Vision</span>
                        <div className='w-[60%] h-1 bg-orange rounded-[2px]'>

                        </div>
                    </div>
                    <div className=''>
                        <h3 className='text-base font-medium mb-2'>We are dedicated to..............</h3>
                        <ul className='space-y-2 list-disc offers pl-5'>
                            <li className='font-medium text-base relative'>Offering superior instructions and an ideal learning environment.</li>
                            <li className='font-medium text-base relative'>Promoting all round development of students abilities and personalities, and empower the potential.</li>
                            <li className='font-medium text-base relative'>Providing effortless and distinctive quality service.</li>
                            <li className='font-medium text-base relative'>Maintaining the high standard of professionalism, performance and quality to establish exemplary excellence in higher education, and work together with prospective students and overseas colleges, universities</li>
                        </ul>
                    </div>
                </div>
            </div>
            <AboutUs />
            <ChooseUs />
            <div>
                <SectionTitle heading1={'We Have the Best Team'} subHeading={'Our Team'} />
                <div className='2xl:mt-72 xl:mt-72 mt-16'>
                    <div className='grid 2xl:hidden xl:hidden grid-cols-1 gap-6'>
                        <Image className='h-[400px] object-cover' src={image1} alt='' />
                        <Image className='h-[400px] object-cover' src={image3} alt='' />
                        <Image className='h-[400px] object-cover' src={image2} alt='' />
                    </div>
                    <div className='count 2xl:h-[500px] xl:h-[400px] flex flex-col relative'>
                        <div className='2xl:grid xl:grid hidden grid-cols-3 gap-6 absolute bottom-1/2 px-10'>
                            <Image className='h-[400px] object-cover' src={image1} alt='' />
                            <Image className='h-[400px] object-cover' src={image3} alt='' />
                            <Image className='h-[400px] object-cover' src={image2} alt='' />
                        </div>
                        <div className='mt-auto'>
                            <ServiceHistory count={'count'} />
                        </div>
                    </div>
                </div>
                <BottomSection />
            </div>
        </div>
    );
};

export default page;