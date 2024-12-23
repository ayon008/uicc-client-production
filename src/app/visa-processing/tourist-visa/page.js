

import Image from 'next/image';
import img1 from '../../../../public/assets/WhatsApp Image 2024-12-23 at 15.29.50_4df6b5e5.jpg'
import img2 from '../../../../public/assets/WhatsApp Image 2024-12-23 at 15.32.46_9fd1375e.jpg'
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Tourist Visa'} img={img2} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Tourist Visa Services</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we simplify the visa process so you can focus on your travel plans. Whether you’re exploring new places, visiting family, or traveling for leisure, we provide comprehensive support to ensure your tourist visa is approved without hassle.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Personalized Consultation: Guidance on visa requirements based on your destination.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Preparation: Assistance with all necessary documents, including passport, financial proof, travel itinerary, and invitation letters.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Visa Application Assistance: Step-by-step support to ensure your application is submitted correctly.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Prep: Mock interviews and tips for countries requiring visa interviews.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Countries We Support
                </h2>
                <ul className='supported-countries'>
                    <li>We assist with tourist visas for countries like:</li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Canada
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            USA
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            UK
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Schengen (Europe)
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Australia
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Japan
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            South Korea
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
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    At UICC, we make travel easy. Let us manage the visa process while you plan your dream trip.
                </p>
            </div>
        </div >
    );
};

export default Page;