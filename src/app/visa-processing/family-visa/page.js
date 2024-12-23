

import Image from 'next/image';
import img2 from '@/../public/assets/hoi-an-photographer-AILAeiIBrBg-unsplash.jpg'
import img1 from '@/../public/assets/family-with-luggage-exploring-map-min.jpeg'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Family Visa'} img={img2} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Family Visa Services</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we understand the importance of keeping families together, especially when pursuing opportunities abroad.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-6'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Expert Guidance: Our visa consultants are well-versed in the latest immigration policies and will guide you through every step of the family visa applications process.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Document Preparation: We help you gather, prepare and submit all required documents accurately and efficiently to avoid delays.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Post visa support: We even offer post visa support regarding schooling, relocating, including housing and adapting to a new country.
                        </span>
                    </li>
                </ul>
                <div className='flex 2xl:flex-row xl:flex-row flex-col items-center mt-10 2xl:gap-6 xl:gap-6 gap-3 w-full'>
                    <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                        <Image placeholder='blur' className='2xl:flex-1 xl:flex-1 w-full 2xl:h-[450px] xl:h-[400px] 350px object-fill w-full' src={img1} alt='' />
                    </div>
                    <div className='2xl:w-1/2 xl:w-1/2 w-full'>
                        <Image placeholder='blur' className='2xl:flex-1 xl:flex-1 w-full 2xl:h-[450px] xl:h-[400px] 350px object-cover' src={img2} alt='' />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between px-10 mt-16 py-6 bg-[#FBFCFF]">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Family Visa</h2>
                        </div>
                        <h1 className="2xl:text-5xl xl:text-5xl text-2xl font-semibold mt-3 w-full">
                            Reason to Choose Us
                        </h1>
                    </div>
                    <div className="space-y-14 mt-10">
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Experienced Team</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our team has extensive experience in dealing with family visa applications for a wide range of countries.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Success Rate</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our proven track record of successful visa applications ensures peace of mind for you and your family.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Visa Eligibility Requirements</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We assist with evaluating the eligibility criteria for different family visa types, which generally include:
                                </p>
                                <ul className='list-disc pl-6 mt-2 text-sm'>
                                    <li>Proof of Relationship: Documenting marriage, civil partnership or blood relations.</li>
                                    <li>Financial Requirements: Ensuring the sponsor meets income or savings thresholds.</li>
                                    <li>Sponsorship Proof: Helping you present the necessary documentation that proves your ability to support family member financially.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    At UICC, we are committed to helping families stay together while exploring global opportunities. Let us take care of the paperwork so you can focus  on staying your new chapter abroad.
                </p>
            </div>
        </div >
    );
};

export default Page;