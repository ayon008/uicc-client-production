import Image from 'next/image';
import img1 from '../../../public/assets/WhatsApp Image 2024-12-25 at 13.08.22_24105f65.jpg'
import img2 from '../../../public/assets/WhatsApp Image 2024-12-25 at 13.29.15_2b562a82.jpg'
import FaTicket from '@/icons/FaTicket';
import FaTelegram from '@/icons/FaTelegram';
import TickIcon from '@/components/TickIcon';
import ServiceBanner from '@/shared/ServiceBanner';


const Page = () => {
    return (
        <div>
            <ServiceBanner text1={'Digital Marketing'} img={img1} />
            <div className='2xl:p-20 xl:p-16 p-12'>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Introduction to Digital Marketing.</h1>
                <div className="flex 2xl:flex-row xl:flex-row flex-col items-stretch my-10 gap-10">
                    <div className="2xl:w-1/2 xl:w-1/2 w-full">
                        <p className='2xl:text-xl xl:text-lg font-normal text-left'>
                            In today’s hyper-connected world communications are conducted through online, internet is the keystone of communication. Digital marketing is also called online marketing, it is a key tool for business success but what exactly is digital marketing? and why has it become essential in today’s business strategies? Some common strategies and techniques in digital marketing include:
                        </p>
                        <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                            <span className='font-bold text-3xl inline-block mb-[6px]'>Defining Digital Marketing</span> <br />
                            Digital marketing includes a wide range of online channels and strategies to promote products and services through various digital channels, this includes not only email, social media, web-based advertising etc. Unlike traditional marketing channels that rely on print, television and radio advertising more so, digital marketing helps to reach the target audience and engage online better.
                        </p>
                    </div>
                    <div className="2xl:w-1/2 xl:w-1/2 w-full">
                        <Image className='w-full' src={img1} alt='' />
                    </div>
                </div>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Components of digital marketing</span> <br />
                    <span className="font-bold">Search Engine Optimization</span> : Search engine optimization is the process of increasing website visibility and ranking on search engine result pages, by strategic use of keywords, content optimization and link building, businesses can increase their organic traffic and improve their online presence.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Social Media Marketing (SMM)</span> <br />
                    <span className="font-bold">Social Media Marketing (SMM)</span> : Social media plays a crucial role in people’s daily life. Social media marketing involves creating and sharing contents on social media platforms like Facebook, Instagram, Twitter, LinkedIn, to connect with audience, build brand awareness, drive website traffic, and generate leads. Effective social media marketing requires a deep understanding of audiences, strategic content planning and consistent engagement
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Content Marketing</span> <br />
                    Content marketing involves creating and distributing valuable, relevant, and consistent contents, it includes blog posts, articles, videos, infographics, podcasts, and more to attract and retain a clearly defined audience. The goal of content marketing is to provide information or entertainment that resonates with your audience while subtly promoting your brand and offerings.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Search Engine Marketing (SEM)</span> <br />
                    Search engine marketing involves paid advertising that increases visibility on search engine results pages. This includes pay-per-click (PPC) campaigns, where advertisers pay a fee each time when their ad is clicked.  Search engine marketing involves bidding on keywords relevant to your business and creating compelling ads that appear on the top of search results. Search engine marketing strategies use keyword research, ad targeting and compelling ad copy to drive quality traffic to your website. Popular platforms for search engine marketing include Google Ads.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Email Marketing</span> <br />
                    Email marketing involves sending targeted messages to subscribers with the aim of building relationships, promoting products or services, and driving conversions. Strategies include segmentation, personalization, automation, optimization, mobile responsiveness, interactive content, and analytics to optimize campaign performance.
                </p>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>Role of Artificial Intelligence in Digital marketing.</h1>
                <Image className='my-8' src={img2} alt='' />
                <p className='2xl:text-xl xl:text-lg font-normal mt-6'>
                    In today’s hyper-connected world communications are conducted through online, internet is the keystone of communication. Digital marketing is also called online marketing, it is a key tool for business success but what exactly is digital marketing? and why has it become essential in today’s business strategies? Some common strategies and techniques in digital marketing include:
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Artificial Intelligence</span> <br />
                    It’s a branch of computer science that aims to create systems capable of performing tasks that typically require human intelligence. Tasks include wide range of activities like problem-solving, learning, perception, reasoning, and decision-making. AI includes various subfields that is,
                    <ul className='space-y-10 my-10'>
                        <li className='flex items-center'>
                            <TickIcon />
                            <span>
                                Machine learning
                            </span>
                        </li>
                        <li className='flex items-center'>
                            <TickIcon />
                            <span>
                                Natural language processing
                            </span>
                        </li>
                        <li className='flex items-center'>
                            <TickIcon />
                            <span>
                                computer vision
                            </span>
                        </li>
                        <li className='flex items-center'>
                            <TickIcon />
                            <span>
                                Neural Networks
                            </span>
                        </li>
                        <li className='flex items-center'>
                            <TickIcon />
                            <span>
                                Role of AI in Digital Marketing
                            </span>
                        </li>
                    </ul>
                    In today’s, AI has emerged as a game-changer in digital world, offering various opportunities for businesses to increase strategies, optimize campaigns, engage with potential audiences and more.
                </p>
                <h1 className='2xl:text-5xl xl:text-4xl font-semibold'>How is AI helping in digital marketing?</h1>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Personalization</span> <br />
                    Personalization is the process of knowing the needs, preferences, and interests of your current customers so that you can serve them exactly what they are looking. Through advanced algorithms and machine learning techniques, AI can analyze customer data in real time to create highly personalized content, it helps to create highly personalized marketing campaigns. Whether it’s sending targeted email campaigns optimizing website experiences. AI enables marketers to engage with consumers on a one-to-one level, promote stronger brand relationships and increase conversion rates.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Content Optimization</span> <br />
                    AI content generation and optimization tools like ChatGPT and Jasper help to create relevant contents. From blog posts and social media updates to product descriptions and email newsletters, AI enables marketers to create relevant content that resonates with target audience.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Chatbots and Virtual Assistants</span> <br />
                    Chatbots and virtual assistants are used to provide instant and accurate customer support, answering queries and provide product recommendations. These AI systems can handle wide range of customer queries and real-time assistance. It increases customer experiences and engagements.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Optimized Advertising Campaigns</span> <br />
                    AI algorithms optimizes advertising campaigns by analyzing performance data and adjusting strategies in real time. They can determine effective ad placements, automatically adjust bidding strategies and target accurate audiences to maximize ROI and conversions.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Predictive Analytics</span> <br />
                    AI-powered predictive analytics helps to predict future trends in markets and behavior based on historical data. This allows businesses to anticipate customer needs and adjust their marketing strategies accordingly, it improves efficiency and ROI.
                </p>
                <p className='2xl:text-xl xl:text-lg font-normal my-10'>
                    <span className='font-bold text-3xl inline-block mb-[6px]'>Conclusion</span> <br />
                    Role of AI in digital marketing expands continuously. AI can provide businesses to competitive edge by delivering seamless, personalized experiences that resonate with customers. AI’s predictive capabilities and automation tools can make stronger customer relationships, growth in revenue, and overcome the complexities of digital marketplace with confidence.
                </p>
            </div>
        </div >
    );
};

export default Page;


