import Image from 'next/image';
import React from 'react';
import image from '@/../public/assets/1b3da64de52034b51f6246051b268a8a.png'
import image1 from '@/../public/assets/8465bf6b1213d39678808487b085218f.png'
import image2 from '@/../public/assets/fec51fd1393a3cb27b4bfd98f36e8c9e.png'
import image3 from '@/../public/assets/461e8b3f78c3c1e2faa3a3e4f1360f16.png'
import img1 from '../../../public/assets/WhatsApp Image 2024-12-26 at 13.06.53_edce4c89.jpg'
import ServiceBanner from '@/shared/ServiceBanner';
import SectionTitle from '@/shared/SectionTitles';
import BottomSection from '@/shared/BottomSection';
import ServiceHistory from '@/shared/ServiceHistory';
import AboutUs from '@/components/AboutUs';
import ChooseUs from '@/components/ChooseUs';
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4';
import engr from '../../../public/assets/WhatsApp Image 2025-01-01 at 18.50.00_1de9d313.jpg'
import director from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.41.19_475fc44b.jpg'
import chairman from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.41.02_2e6a53c7.jpg'
import administration from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.42.47_dcfd8d94.jpg'
import affairs from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.41.30_539d9d5b.jpg'
import it from '../../../public/assets/WhatsApp Image 2025-01-01 at 17.36.54_92131a7b.jpg'
import instructor1 from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.39.33_81cdaa08.jpg'
import instructor2 from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.39.10_6400ed68.jpg'
import itExecutive from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.41.43_bb465933.jpg'
import marketing1 from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.40.08_02fdb5d4.jpg'
import marketing2 from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.40.21_543b9073.jpg'
import marketing3 from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.39.51_e39926c6.jpg'
import office from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.38.32_0b721a90.jpg'
import officeAssi from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.41.55_3b69d93e.jpg'
import executive from '../../../public/assets/WhatsApp Image 2025-01-01 at 13.40.42_9f86dda3.jpg'
import Listen from '@/components/Listen';
import { serif } from '@/shared/Serif';

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
            <ServiceBanner show={true} text1={'About Us'} img={img1} />
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
            <SectionTitle heading1="Hear from Our Esteemed Team" subHeading="Insights Directly from Us" />
            <div className='pt-10 pb-20 px-20 space-y-8'>
                <Listen img={engr} name={'Engr.A.K.M Abu Raihan'} designation={'Chairman'} text={'As the founder of UICC Language Institute, I am passionate about providing exceptional language education that empowers individuals to communicate confidently and effectively. Our institute is dedicated to fostering linguistic proficiency through innovative teaching methods, creating an environment where students can thrive and achieve their personal and professional goals.'} />
                <Listen img={director} name={'Mohammad Atiful Haque'} designation={'Manging Director'} text={'I am committed to guiding individuals toward global career success by fostering strategic partnerships and enhancing skill development programs. With a passion for innovation and collaboration, I focus on empowering aspiring professionals, creating opportunities that inspire growth, and driving meaningful achievements that shape their future and open doors to new possibilities.'} />
                <Listen img={chairman} name={'Lucky Akter'} designation={'Vice Chairman'} text={'We are deeply committed to achieving our goals with unwavering focus and determination. Every step we take is guided by a strong sense of purpose and a dedication to excellence. Together, we embrace challenges as opportunities for growth, working relentlessly to turn our vision into reality and deliver exceptional results.'} />
                <Listen img={administration} name={'MD Shafiq Bashar'} designation={'Director Administration'} text={'I am a dedicated leader focused on operational excellence, playing a key role in streamlining administrative processes and ensuring smooth daily operations. With a strategic vision, I foster a productive work environment, empowering teams to achieve their goals efficiently. My leadership inspires growth and drives success across all levels.'} />
                <Listen img={affairs} name={'MD Zahurul Haque'} designation={' Director Academic affairs '} text={'I am dedicated to fostering student success by creating an environment that nurtures growth, learning, and achievement. Through personalized support and innovative strategies, I strive to empower students to reach their full potential. My focus is on guiding them toward their goals, ensuring they thrive both academically and personally.'} />
                <Listen img={it} name={'Sanwar Hossain'} designation={'Head Of IT'} text={'As Head of IT at UICC Language Institute, I am a dedicated technology leader focused on enhancing our digital infrastructure. With a commitment to innovation, I ensure the seamless integration of technology to support educational objectives, streamline operations, and deliver efficient, modern IT solutions that empower both students and staff.'} />
            </div>
            <div>
                <SectionTitle heading1={'We Have the Best Team'} subHeading={'Our Team'} />
                <div className='2xl:grid xl:grid hidden grid-cols-3 gap-6 count px-10 pb-10'>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={instructor2} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>ADNAN HOSSEN SHOUROB</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>CHIEF INSTRUCTOR</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={instructor1} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>MD SHAMIM</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>INSTRUCTOR</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={itExecutive} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>MD Rakibul Islam Raj</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>IT Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={marketing1} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>Nasir uddin Sumon</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Marketing Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={marketing2} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>MD Mafujur Rahman Rokun</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Marketing Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={marketing3} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>MD Mafujur Rahman Rokun</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Marketing Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={executive} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>Nasir Sikder Antor</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Junior Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={office} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>Anisur Rahman</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Office Executive</p>
                        </div>
                    </div>
                    <div>
                        <Image className='h-[400px] object-fill object-center' src={officeAssi} alt='' />
                        <div className='mt-4 space-y-2'>
                            <h2 className={`text-center text-white text-2xl uppercase ${serif.className} font-normal`}>Shamim Hawladar</h2>
                            <p className={`text-center ${serif.className} font-normal uppercase text-lg text-white`}>Office Assistant</p>
                        </div>
                    </div>
                </div>
                <ServiceHistory count={'count'} />
                <BottomSection />
            </div>
        </div>
    );
};

export default page;