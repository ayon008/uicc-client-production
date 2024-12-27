
import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/WhatsApp Image 2024-12-26 at 15.29.42_574c13a6.jpg'
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';
import logo1 from '../../../public/assets/Microsoft_Office_PowerPoint_Logo_512px.png'
import logo2 from '../../../public/assets/download.png'
import logo3 from '../../../public/assets/png-clipart-logo-product-design-brand-font-adobe-illustrator-text-trademark-thumbnail.png'
import logo4 from '../../../public/assets/download.jpeg'
import logo5 from '../../../public/assets/images.png'


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Graphics Design'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <div className="grid grid-cols-2 items-stretch my-10 gap-10"
                    style={{
                        background: 'linear-gradient(to bottom right, #ffe5f0 10%, #ffffff 70%)',
                    }}
                >
                    <div className="w-full space-y-6 pl-5 my-5"
                    >
                        <h4 className="2xl:text-3xl xl:text-2xl font-semibold text-red-600">Turn Your Passion into an Artistic Profession</h4>
                        <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Professional Graphic Design</h1>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Duration</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">6 Months</h1>
                            </div>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Lectures</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">48</h1>
                            </div>
                            <div className='border border-opacity-55 rounded-3xl p-2'>
                                <h2 className='text-center text-slate-500 2xl:text-2xl xl:text-xl text-lg font-semibold'>Projects</h2>
                                <h1 className="text-center 2xl:text-3xl xl:text-2xl font-semibold">30+</h1>
                            </div>
                        </div>
                        <p className='text-slate-500'>
                            Considering the growing demand for visual content, marketers are promoting their products through graphical ideas nowadays. The increasing need for graphic designers has unlocked many opportunities for the people who prefer working independently. A study shows, all the companies prioritize their visual acceptance, even a small company spends up to 500 dollars to create a perfect logo. If you are passionate about making designs, this updated Graphic Design course is for you.
                        </p>
                    </div>
                    <div className="w-full h-full">
                        <Image className='w-full h-full object-cover' src={img1} alt='' />
                    </div>
                </div>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Course Overview                    </span> <br />
                    Our updated curriculum, along with the project-based work, prepares you to be a Professional Graphic Designer. The course module covers a wide range of topics, through which you learn how to use digital tools to create unique designs. Using Adobe Photoshop or Adobe Illustrator, you will be able to design a variety of things including banners, t-shirts, products, etc during the course. The lab facilities that we provide make you competent to perform better in the global marketplace. So, if you are interested to explore the field of innovative designs, enroll in this course now.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Course Curriculum</span> <br />
                </p>
                <ul className='list-disc pl-6 mt-2'>
                    <li>Course Curriculum</li>
                    <li>Raster To Vector</li>
                    <li>Letterhead Design Logo Design</li>
                    <li>Product Packaging</li>
                    <li>T-Shirt Design</li>
                    <li>Landscape Design</li>
                    <li>Magazine Design Web UI Design</li>
                    <li>Al For Logo Idea (Logo.ai & Looka.com)</li>
                    <li>Al For Searching (siderAi)</li>
                    <li>Al For Images (leonardo.ai, Github - Fooocus & Playgroundai.com)</li>
                    <li>Invoice Template Design Brochure Layout</li>
                    <li>Desk & Wall Calendar Design Certificate Template Design Resume & Cover Letter Design Banner / Poster Design Web Banner Design</li>
                    <li>Al For Freelancer (Chatgpt)</li>
                    <li>Al For Resume (kickresume.com)</li>
                    <li>Al For Gig Research (Quilbolt)</li>
                </ul>

                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Softwares you will learn</span> <br />
                </p>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex items-center gap-5'>
                        <Image src={logo1} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Microsoft Office <br />PowerPoint</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo3} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Adobe Illustrator</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo5} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Adobe XD</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo2} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Adobe Photoshop</h3>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Image src={logo4} className='w-[50px]' alt='' />
                        <h3 className='text-2xl font-semibold text-slate-600'>Adobe InDesign</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;