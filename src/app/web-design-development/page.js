
import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/WhatsApp Image 2024-12-28 at 13.41.41_802367cb.jpg'
import img2 from '../../../public/assets/WhatsApp Image 2024-12-28 at 13.41.43_28c0fa6a.jpg'
import img3 from '../../../public/assets/WhatsApp Image 2024-12-28 at 13.41.41_a38d43d2.jpg';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';
import logo1 from '../../../public/assets/images (1).png'
import logo2 from '../../../public/assets/png-transparent-visual-studio-code-hd-logo-thumbnail.png'
import logo3 from '../../../public/assets/images.jpeg'
import logo4 from '../../../public/assets/png-transparent-vuejs-logos-and-brands-line-filled-icon-thumbnail.png'
import logo5 from '../../../public/assets/download (1).png'
import logo6 from '../../../public/assets/download (2).png';
import { FaChalkboardTeacher } from 'react-icons/fa';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Web Design &'} text2={'Development'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <div className="grid grid-cols-2 items-stretch my-10 gap-10"
                    style={{
                        background: 'linear-gradient(to bottom right, #ffe5f0 10%, #ffffff 70%)',
                    }}
                >
                    <div className="w-full space-y-6 pl-5 my-5"
                    >
                        {/* <h4 className="2xl:text-3xl xl:text-2xl font-semibold text-red-600">Turn Your Passion into an Artistic Profession</h4> */}
                        <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Web Design & Full Stack Development</h1>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Duration</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">6 Months</h1>
                            </div>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Lectures</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">128</h1>
                            </div>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Projects</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">15+</h1>
                            </div>
                        </div>
                        <p className='text-slate-500'>
                            Web development is one of the fastest-growing fields in the age of technology that offers a promising career with competitive salary. According to the US Bureau of Labor Statistics, the average growth rate of this sector from 2022-32 is 16%, much higher than any occupation. A full-stack developer becomes a valuable asset for a company that builds a fully functional website using his front-end and back-end skills. In this diploma course, we have combined both back and front-end development to make you a pro in the IT sector.
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <Image className='w-full h-full object-cover' src={img2} alt='' />
                    </div>
                </div>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Course Overview                    </span> <br />
                    In this comprehensive course, web developers gain an in-depth understanding of the web development process and its life cycle. The front-end portion teaches you to create dynamic web pages with HTML, CSS, react JS, and JavaScript, apply essential programming concepts when designing HTML forms, select an appropriate web hosting service, and publish your web pages. The back end covers the fundamental knowledge of PHP and Laravel to make you an expert at building a wide range of custom web applications. In addition, you learn API functionalities, tools, and procedures. Loaded with practical projects, this course increases your work efficacy exposing you to practical problems so that you can easily break any blocks that come to the professional platforms.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Course Curriculum</span> <br />
                </p>
                <ul className='list-disc pl-6 mt-2'>
                    <li>React JS</li>
                    <li>React Redux</li>
                    <li>E-commerce Website Design With API</li>
                    <li>HTML5 & CSS3</li>
                    <li>Basics Of Vue.js</li>
                    <li>OOP PHP</li>
                    <li>ECommerce Project With Laravel Vue</li>
                    <li>API</li>
                    <li>JavaScript Functions</li>
                    <li>React Context API</li>
                    <li>Next JS</li>
                    <li>Create Next JS Web Page JavaScript (JS)</li>
                    <li>Raw PHP & MySQL Database Laravel CRUD</li>
                </ul>

                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Softwares you will learn</span> <br />
                </p>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='flex items-center gap-5'>
                        <Image src={logo1} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Figma</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo3} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Web Browser</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo5} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Laravel</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo2} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>VS Code</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo4} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Vue Js</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo6} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>PHP</h3>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-stretch my-16">
                    <div className='w-full h-full'>
                        <Image src={img3} className='h-full w-full object-fill' alt="" />
                    </div>
                    <div>
                        <div className='w-full h-full pl-10 py-6' style={{ background: "linear-gradient(180deg, #fdfde5, #f8f9d8" }}>
                            <FaChalkboardTeacher size={'1.5rem'} color='#B8860B' />
                            <p className='2xl:text-xl xl:text-lg font-normal mt-8 2xl:w-[65%] xl:w-[65%]'>
                                <span className='font-bold text-3xl inline-block mb-[10px]'>Review Class</span> <br />
                                Do you face difficulty when you review the previous concepts? To ensure the best learning outcome, we arrange review classes that help our students overcome any problem in their skill development process. You will be able to understand the topics that you find complex under the close supervision of our skilled mentors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;