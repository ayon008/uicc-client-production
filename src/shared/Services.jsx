import FaVisa from '@/icons/FaVisa';
import React from 'react';
import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';

const Services = ({ heading, subHeading, text, btn, href, color }) => {
    return (
        <div className="2xl:px-10 xl:px-8 2xl:py-6 xl:py-4 flex flex-col h-full">
            <div className='w-fit mx-auto mb-2'>
                <FaVisa size={70} />
            </div>
            <div className="h-full flex flex-col justify-between">
                <p className={`text-orange 2xl:text-sm ${color === 'black' ? 'text-deep-blue' : 'text-white'} font-bold xl:text-xs mb-2 `}>{heading}</p>
                <h1 className={`2xl:text-2xl xl:text-xl ${color === 'black' ? 'text-deep-blue' : 'text-white'} font-semibold`}>{subHeading}</h1>
                <p className={`my-4  ${color === 'black' ? 'text-deep-blue' : 'text-white'}`}>{text}</p>
                <Link href={`${href}`}>
                    <ButtonPrimary text={`${btn ? 'Register Now' : 'Register Now'}`} />
                </Link>
            </div>
        </div>
    );
};

export default Services;