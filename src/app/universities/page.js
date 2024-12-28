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
            'Focus on Practical Problem Solving',

        ]
    },
    {
        name: 'University of California, Berkeley',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Leading Public Research University',
            'Diverse Student Body',
            'Top Programs in Science & Engineering',

        ]
    },
    {
        name: 'California Institute of Technology (Caltech)',
        country: 'USA',
        description: 'Admission Service',
        benefits: [
            'Small Class Sizes',
            'Focus on Advanced Research',
            'Cutting-Edge Space Exploration',

        ]
    }
];

const Card = ({ university }) => {
    let img = university.country === 'USA' ? us : university.country === 'Japan' ? jap : image1;
    return (
        <div className="rounded-xl box-shadow p-6 h-[400px] flex flex-col">
            <div className="flex items-center gap-2">
                <Image src={img} alt={`${university.name} image`} />
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
                <ButtonPrimary text={'Register Now'} />
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
