import Image from 'next/image';
import React from 'react';
import image1 from '../../../public/assets/Image-80 (2).png';
import { FaCheck } from 'react-icons/fa';
import { ButtonTerTiary } from '../page';
import ServiceBanner from '@/shared/ServiceBanner';
import SectionTitle from '@/shared/SectionTitles';
import BottomSection from '@/shared/BottomSection';
import ButtonPrimary from '@/shared/ButtonPrimary';
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4';
import us from '../../../public/assets/Image-80 (3).png'
import img1 from '../../../public/assets/FotoJet.png';
import jap from '../../../public/assets/Image-80 (5).png'
import Link from 'next/link';

// List of Australian universities
const universities = [
    {
        name: 'The University of Sydney',
        description: 'Admission Service',
        benefits: [
            'Top QS Rankings',
            'Comprehensive Courses',
            'Diverse Campus Life',
            'Strong Alumni Network'
        ]
    },
    {
        name: 'The University of Melbourne',
        description: 'Admission Service',
        benefits: [
            'World-Class Research',
            'Industry Connections',
            'Innovative Learning',
            'Global Recognition'
        ]
    },
    {
        name: 'Australian National University',
        description: 'Admission Service',
        benefits: [
            'High Academic Standards',
            'Beautiful Campus',
            'International Faculty',
            'Flexible Programs'
        ]
    },
    {
        name: 'The University of Queensland',
        description: 'Admission Service',
        benefits: [
            'Advanced Research Labs',
            'Vibrant Student Community',
            'Global Partnerships',
            'Scholarship Opportunities'
        ]
    },
    {
        name: 'The University of New South Wales',
        description: 'Admission Service',
        benefits: [
            'Innovative Curriculum',
            'Career-Oriented Education',
            'State-of-the-Art Facilities',
            'Supportive Environment'
        ]
    },
    {
        name: 'The University of Tokyo',
        country: 'Japan',
        description: 'Admission Service',
        benefits: [
            'Japan’s Top University',
            'Global Research Network',
            'Innovative Learning Environment',
            'Comprehensive Degree Programs'
        ]
    },
    {
        name: 'Kyoto University',
        country: 'Japan',
        description: 'Admission Service',
        benefits: [
            'Renowned for Nobel Laureates',
            'State-of-the-Art Facilities',
            'Focus on Scientific Research',
            'Strong Academic Reputation'
        ]
    },
    {
        name: 'Osaka University',
        country: 'Japan',
        description: 'Admission Service',
        benefits: [
            'Ranked Among Top Global Universities',
            'Cutting-Edge Research Opportunities',
            'Interdisciplinary Programs',
            'Dynamic Campus Life'
        ]
    },
    {
        name: 'Tohoku University',
        country: 'Japan',
        description: 'Admission Service',
        benefits: [
            'Top-Ranked in Asia',
            'Strong Focus on Engineering & Science',
            'Global Exchange Programs',
            'Scholarship Opportunities'
        ]
    },
    {
        name: 'Nagoya University',
        country: 'Japan',
        description: 'Admission Service',
        benefits: [
            'High International Recognition',
            'Focus on Practical Learning',
            'Innovative Research Labs',
            'Active Industry Collaboration'
        ]
    },
    {
        name: 'Harvard University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'World-Renowned Faculty',
            'Extensive Alumni Network',
            'Top-Tier Research Facilities',
            'Diverse Academic Programs'
        ]
    },
    {
        name: 'Stanford University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Innovative Research Opportunities',
            'Proximity to Silicon Valley',
            'Interdisciplinary Education',
            'Entrepreneurial Ecosystem'
        ]
    },
    {
        name: 'Massachusetts Institute of Technology (MIT)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Pioneers in Science and Technology',
            'World-Class Labs and Facilities',
            'Focus on Practical Problem Solving'
        ]
    },
    {
        name: 'University of California, Berkeley',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Leading Public Research University',
            'Diverse Student Body',
            'Top Programs in Science & Engineering'
        ]
    },
    {
        name: 'California Institute of Technology (Caltech)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Small Class Sizes',
            'Focus on Advanced Research',
            'Cutting-Edge Space Exploration'
        ]
    },
    {
        name: 'Cornell University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Programs',
            'Top-Notch Research Opportunities',
            'Strong Alumni Network',
            'Beautiful Campus'
        ]
    },
    {
        name: 'University of Chicago',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Focus on Rigorous Academics',
            'Strong Community Engagement',
            'Global Research Opportunities',
            'Renowned Faculty'
        ]
    },
    {
        name: 'Princeton University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Liberal Arts Focus',
            'World-Class Faculty',
            'Strong Alumni Network',
            'Small Class Sizes'
        ]
    },
    {
        name: 'Yale University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Ivy League Excellence',
            'Comprehensive Academic Programs',
            'Prestigious Law and Arts Schools',
            'Rich History'
        ]
    },
    {
        name: 'Johns Hopkins University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Global Leader in Research',
            'Top Medical School',
            'Diverse Academic Options',
            'Innovative Programs'
        ]
    },
    {
        name: 'Columbia University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Prime New York City Location',
            'World-Class Faculty',
            'Strong Journalism Programs',
            'Rich Alumni Network'
        ]
    },
    {
        name: 'University of California, Los Angeles (UCLA)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Top Public University',
            'Cultural Diversity',
            'Proximity to Tech Hubs'
        ]
    },
    {
        name: 'New York University (NYU)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Global Campus Network',
            'Top Arts Programs',
            'Located in NYC',
            'Wide Range of Disciplines'
        ]
    },
    {
        name: 'University of Michigan-Ann Arbor',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Public Research University',
            'Strong Engineering Programs',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Northwestern University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Renowned Journalism Programs',
            'Interdisciplinary Learning',
            'Strong Alumni Network',
            'Beautiful Campus'
        ]
    },
    {
        name: 'Carnegie Mellon University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Computer Science Programs',
            'Innovative Research',
            'Global Recognition',
            'Diverse Learning Environment'
        ]
    },
    {
        name: 'Duke University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Strong Medical Programs',
            'Top Athletics Teams',
            'Renowned Faculty',
            'Beautiful Campus'
        ]
    },
    {
        name: 'University of Texas at Austin',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Public University',
            'Strong Engineering and Business Programs',
            'Dynamic Campus Life',
            'Global Network'
        ]
    },
    {
        name: 'University of Illinois at Urbana-Champaign',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Engineering Programs',
            'Strong Focus on Research',
            'Diverse Community',
            'Active Alumni Network'
        ]
    },
    {
        name: 'University of California, San Diego (UCSD)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Public Research University',
            'Focus on Biotechnology and Medicine',
            'Proximity to Research Labs',
            'Beautiful Coastal Campus'
        ]
    },
    {
        name: 'University of Washington',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Computer Science Programs',
            'Strong Focus on Research',
            'Global Alumni Network',
            'Vibrant Campus Community'
        ]
    },
    {
        name: 'Brown University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Open Curriculum',
            'Prestigious Ivy League Institution',
            'Diverse Academic Opportunities',
            'Strong Community Engagement'
        ]
    },
    {
        name: 'Pennsylvania State University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Public Research Institution',
            'Strong Engineering and Business Programs',
            'Global Alumni Network',
            'Dynamic Campus Life'
        ]
    },
    {
        name: 'Purdue University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Renowned Engineering Programs',
            'Focus on STEM Fields',
            'Diverse Academic Offerings',
            'Supportive Campus Community'
        ]
    },
    {
        name: 'Georgia Institute of Technology',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Focus on Science and Technology',
            'Strong Industry Connections',
            'Innovative Research Opportunities',
            'Global Recognition'
        ]
    },
    {
        name: 'University of Wisconsin-Madison',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Top Public Research University',
            'Diverse Student Body',
            'Strong Alumni Network',
            'Beautiful Campus'
        ]
    },
    {
        name: 'University of Southern California',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Located in Los Angeles',
            'Top Programs in Arts and Media',
            'Global Recognition',
            'Dynamic Campus Life'
        ]
    },
    {
        name: 'University of California, Davis',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Focus on Agriculture and Environment',
            'Diverse Academic Opportunities',
            'Proximity to Research Facilities',
            'Supportive Community'
        ]
    },
    {
        name: 'Rice University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Small Class Sizes',
            'Focus on Research and Innovation',
            'Dynamic Student Community',
            'Beautiful Campus'
        ]
    },
    {
        name: 'Michigan State University',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Aberdeen',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Abertay University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Aberystwyth University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Anglia Ruskin University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Aston University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Bangor University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Bath',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Bath Spa University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Bedfordshire',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Birmingham',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Birmingham City University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Birmingham Newman University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University College Birmingham',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Bishop Grosseteste University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Essex',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Falmouth University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Coventry University',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Cumbria',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of East London',
        country: 'UK',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Monash University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'The University of Western Australia',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'The University of Adelaide',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Technology Sydney',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Macquarie University (Sydney, Australia)',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'RMIT University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Wollongong',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'The University of Newcastle, Australia (UON)',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Curtin University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Queensland University of Technology (QUT)',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Deakin University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'La Trobe University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Griffith University',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'Swinburne University of Technology',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    },
    {
        name: 'University of Tasmania',
        country: 'Australia',
        description: 'Admission Service',
        benefits: [
            'Diverse Academic Offerings',
            'Strong Focus on Research',
            'Vibrant Campus Life',
            'Global Alumni Network'
        ]
    }
];


const Card = ({ university }) => {
    let img = university.country === 'USA' ? us : university.country === 'Japan' ? jap : image1;
    return (
        <div className="rounded-xl box-shadow p-6 h-[400px] flex flex-col">
            <div className="flex items-center gap-2">
                <Image src={img} className='w-[60px] h-[60px] rounded-full' alt={`${university.name} image`} />
                <div>
                    <p className="text-orange text-xs font-medium">{university.description}</p>
                    <h4 className="text-base font-medium">{university.name}</h4>
                </div>
            </div>
            <div className="mt-6 uni">
                <ul className="space-y-1">
                    {university.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <FaCheck className="text-orange" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-auto h-fit">
                <Link href={"/signUp"}>
                    <ButtonPrimary text={'Register Now'} />
                </Link>
            </div>
        </div>
    );
};

const page = () => {
    return (
        <div className="relative">
            <div className="absolute right-0 left-0 top-0 bottom-0 -z-10">
                <video
                    className="w-full h-full object-cover opacity-30"
                    autoPlay
                    loop
                    muted
                    playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <ServiceBanner text1={'Universities'} img={img1} />
            <div className="2xl:my-28 xl:my-20 my-10">
                <SectionTitle
                    subHeading={'Associate Universities'}
                    heading1={'The Universities We Serve'}
                />
            </div>
            <div className="px-10 max-w-[1440px] mx-auto grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-1 gap-6">
                {universities.map((university, i) => (
                    <Card key={i} university={university} />
                ))}
            </div>
            <div className="max-w-[1440px] mx-auto 2xl:px-10 xl:px-10">
                <BottomSection />
            </div>
        </div>
    );
};

export default page;
