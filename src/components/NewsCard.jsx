import Image from 'next/image';
import React from 'react';
// import image from '@/../public/assets/image (2).png'
import ButtonPrimary from '@/shared/ButtonPrimary';
import Animated from '@/shared/Animated';
import Link from 'next/link';

const NewsCard = ({ text, heading, img }) => {
    return (
        <Animated>
            <div className='2xl:p-7 xl:p-5 p-2'>
                <div className='border-2 border-[#E7E7E7] flex items-center gap-4 rounded-lg'>
                    <div className='w-[40%] flex flex-col h-full'>
                        <Image className='w-full h-[300px] object-cover' src={img} alt='' />
                    </div>
                    <div className='flex flex-col h-full space-y-4 pr-6 w-[60%]'>
                        <div className='pl-10'>
                            <h3 className='2xl:text-xl xl:text-lg text-sm font-semibold date text-[#919191] relative'>1 Aug, 2024</h3>
                        </div>
                        <h1 className='2xl:text-[28px] xl:text-2xl text-sm font-semibold 2xl:mt-6 xl:mt-6 mt-1'>{heading}</h1>
                        <p className='2xl:text-[12px] xl:text-[10px] text-[10px] 2xl:mt-3 xl:mt-3 mt-1'>{text}</p>
                        <Link href={"/signUp"}>
                            <ButtonPrimary text={'Register Now'} />
                        </Link>
                    </div>
                </div>
            </div>
        </Animated>
    );
};

export default NewsCard;
