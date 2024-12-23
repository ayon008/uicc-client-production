import Image from 'next/image';
import img1 from '../../../public/assets/1000001627.jpg'
import img2 from '@/../public/assets/john-mcarthur-X_MOr6oa4-k-unsplash.jpg'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Air Ticket'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Air Ticket Support at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    At Uttara International Career Council (UICC), we offer convenient Air Ticket Support services to complement your visa and travel needs. Whether you’re traveling for study, work, or leisure, we ensure that your flight bookings are smooth and hassle-free.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    What We Offer
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Flight Booking Assistance: We help you find and book affordable flights that suit your schedule and budget.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Special Discounts: Access to exclusive deals and discounts for students, workers, and families traveling abroad.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Flexible Booking Options: Assistance with booking flexible or refundable tickets to accommodate visa processing times or changes in travel plans.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Group Bookings: Special support for group travel arrangements, making it easier for families or colleagues to fly together.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            24/7 Support: Our team is available to assist with any flight-related queries or changes before your departure.
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
                <div className="flex-1 flex flex-col justify-between px-10">
                    <div className="mt-16">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Air Ticketing</h2>
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
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Convenience</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We handle the entire flight booking process, saving you time and effort.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Competitive Pricing</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Access to competitive fares and deals for your destination.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Travel Expertise</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We provide guidance on the best routes and airlines for your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    Let UICC take care of your travel plans with our reliable air ticket support, so you can focus on your next adventure.
                </p>
            </div>
        </div >
    );
};

export default Page;


