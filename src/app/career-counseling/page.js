
import Image from 'next/image';
import img1 from '../../../public/assets/WhatsApp Image 2024-12-23 at 16.50.58_0e3d27c9.jpg'
import img2 from '../../../public/assets/WhatsApp Image 2024-12-23 at 16.27.30_35fc9bc3.jpg'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Career'} text2={'Counseling'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Career Counseling at UICC</h1>
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    International Career Council at Uttara offers *comprehensive career counseling services* to help individuals identify their passions, skills, and opportunities to excel in their chosen fields. Whether you&apos;re a student, job seeker, or professional looking to pivot, our expert counselors provide personalized guidance tailored to your needs and goals.
                </p>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Career Assessment and Planning
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Skill and Interest Evaluation: We assess your strengths, interests, and personality traits using proven tools and methodologies.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Career Mappin: Aligning your abilities with viable career paths that match your ambitions and goals.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Goal Setting: Help in setting achievable short-term and long-term career goals.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Education and Training Guidance
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Academic Counseling: Guidance for students choosing their educational paths, including subjects, universities, and degrees that align with their career goals.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Certification and Skill Development: Recommendations for courses like IELTS, Japanese, and Korean language training to enhance employability.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Study Abroad Counseling
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Program Selection: Assistance in identifying suitable study programs and universities globally.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Application Support: Help with admission procedures, including documentation, essays, and application forms.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Scholarship Guidance: Information about scholarships and financial aid opportunities.
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

                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Job Market Preparation
                </h2>

                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Resume and Cover Letter Writing: Professional assistance to create impactful resumes and cover letters.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Interview Preparation: Tips, mock interviews, and feedback to build confidence for job interviews.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Job Search Strategies: Guidance on finding job opportunities and leveraging platforms like LinkedIn.
                        </span>
                    </li>
                </ul>
                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Career Transition and Development
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Career Change Guidance: Support for professionals looking to transition into new roles or industries.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Leadership Coaching: For those seeking growth into managerial or leadership positions.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Freelancing and Entrepreneurship Advice: Help in exploring independent career paths or starting a business.
                        </span>
                    </li>
                </ul>

                <h2 className='2xl:text-5xl xl:text-4xl font-semibold my-10'>
                    Industry-Specific Counseling
                </h2>
                <ul className='space-y-10'>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Emerging Opportunities: Guidance on careers in trending sectors like IT, healthcare, digital marketing, and more.
                        </span>
                    </li>
                    <li className='flex items-center'>
                        <TickIcon />
                        <span>
                            Language-Based Careers: Insights into job opportunities requiring language skills (e.g., Japanese and Korean translators, teachers, or corporate roles).
                        </span>
                    </li>
                </ul>
                <div className="mt-10 py-10 flex-1 flex flex-col justify-between px-10 bg-[#FBFCFF]">
                    <div className="">
                        <div className="flex items-center gap-2">
                            <FaTelegram />
                            <h2 className="2xl:text-2xl xl:text-xl font-semibold">Career Counseling</h2>
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
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Experienced Counselors</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Our team has extensive knowledge of local and international career trends. </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Tailored Advice</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Personalized plans based on your unique profile and aspirations. </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Global Network</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">We connect you with educational institutions, training programs, and job opportunities worldwide.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-2 w-fit bg-orange-light rounded-full">
                                <div className="p-2 bg-orange rounded-full">
                                    <FaTicket />
                                </div>
                            </div>
                            <div>
                                <h2 className="2xl:text-3xl xl:text-2xl font-semibold">Ongoing Support</h2>
                                <p className="2xl:text-xl xl:text-lg font-normal mt-3">Career counseling is an ongoing process; we remain your partner at every step of your journey. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='2xl:text-2xl xl:text-xl font-semibold mt-16'>
                    Whether you are at the start of your career journey, considering higher education abroad, or planning to make a significant career shift, International Career Council’s expert counseling services are here to guide you. *Contact us today* to schedule a consultation and take the first step toward a fulfilling career!
                </p>
            </div>
        </div >
    );
};

export default Page;