'use client'
import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import flag1 from '../../public/assets/aeacee374b2878078f489fb0e8234989.png'
import Image from 'next/image';
import world1 from '@/../public/assets/image 22.png'
import world2 from '../../public/assets/image 22 (1).png'
import au from '../../public/assets/au.png'
import ca from '../../public/assets/ca.png'
import us from '../../public/assets/us.png'
import gb from '../../public/assets/gb.png'
import jp from '../../public/assets/jp.png'
import nz from '../../public/assets/nz.png'
import aus from '../../public/assets/images.jpg'
import kr from '../../public/assets/kr.png'
import uk from '../../public/assets/c6cae16cfb0b890601f8050cc179326a.png'
import usa from '../../public/assets/2ba37f8e6ba6d9af3ea7e40a47287986.png'
import can from '../../public/assets/6948c86a0fde16ff34c4a0d0e3c15f7e.png'
import jap from '../../public/assets/1b589b44d0cb35eda74d26ac516e6899.png'
import sk from '../../public/assets/e4ddbc2dec6441d0cd7eb408b7589d7e.png'
import nzl from '../../public/assets/82c7acee9c6a83e97829b10c33b06123.png'
import Link from 'next/link';
import ButtonSecondary from '@/shared/ButtonSecondary';
import { serif } from '@/shared/Serif';
import { motion, useMotionValue } from 'framer-motion'

const Country = ({ country, flag, i, image }) => {
    console.log(country);
    return (
        <div className='h-full w-full pb-10 min-h-[560px] bg-red-50'>
            <div className='bg-orange py-6'>
                <p className='text-white my-auto text-center uppercase 2xl:text-5xl xl:text-4xl text-2xl font-semibold'>{country}</p>
            </div>
            {
                country === 'JAPAN' ?
                    <div className='flex relative 2xl:flex-row xl:flex-row flex-col-reverse items-center 2xl:gap-12 xl:gap-10 gap-6 2xl:pl-10 xl:pl-10 pl-3 pt-6'>
                        <div className='absolute inset-0'>
                            <Image src={image} alt='' className='opacity-20 z-10 pointer-events-none object-contain' />
                        </div>
                        <div className=''>
                            <ul className='mt-6 2xl:space-y-[26px] xl:space-y-6 space-y-4'>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Student visa for Language program</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Visitor visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Job Visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Specific Skilled Worker(SSW) visa</p>
                                </li>
                                <li className='flex items-center gap-1'>
                                    <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                        <FaCheck color='white' />
                                    </div>
                                    <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Business Visa</p>
                                </li>
                            </ul>
                            <div className='2xl:mt-10 xl:mt-8'>
                                <Link href={'/signUp'}>
                                    <ButtonSecondary text={'Register Now'} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image className='2xl:w-[240px] 2xl:h-[240px] xl:w-[220px] xl:h-[220px] w-[140px] h-[140px] rounded-full z-40' src={flag} alt='' />
                        </div>
                    </div>
                    :
                    country === 'South Korea' ?
                        <div className='flex 2xl:flex-row xl:flex-row flex-col-reverse items-center 2xl:gap-12 xl:gap-10 gap-6 2xl:pl-10 xl:pl-10 pl-3 pt-6 relative'>
                            <div className='absolute inset-0'>
                                <Image src={image} alt='' className='opacity-20 z-10 pointer-events-none object-contain' />
                            </div>
                            <div className='z-40'>
                                <ul className='mt-6 2xl:space-y-[26px] xl:space-y-6 space-y-4'>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Student Visa and Admission</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Work Visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Visitor visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Business Visa</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>EPS-E9</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Associate program (D4)</p>
                                    </li>
                                </ul>
                                <div className='2xl:mt-10 xl:mt-8 mt-6'>
                                    <Link href={'/signUp'}>
                                        <ButtonSecondary text={'Register Now'} />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Image className='z-40 2xl:w-[240px] 2xl:h-[240px] xl:w-[220px] xl:h-[220px] w-[140px] h-[140px] rounded-full' src={flag} alt='' />
                            </div>
                        </div>
                        :
                        <div className='flex 2xl:flex-row xl:flex-row items-center flex-col-reverse 2xl:gap-12 xl:gap-10 gap-6 2xl:pl-10 xl:pl-10 pl-3 pt-6 relative'>
                            <div className='absolute inset-0'>
                                <Image src={image} alt='' className='opacity-20 z-10 pointer-events-none object-contain' />
                            </div>
                            <div className=''>
                                <h3 className={`2xl:text-5xl xl:text-4xl text-2xl ${serif.className}`}>Student Visa</h3>
                                <ul className='2xl:mt-6 xl:mt-6 mt-4 2xl:space-y-[26px] xl:space-y-6 space-y-4'>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>{`9${i}`}% Visa Success rate</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Accommodation Guidance</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>Scholarship Guidance</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>All kinds of Bank Support</p>
                                    </li>
                                    <li className='flex items-center gap-1'>
                                        <div className='rounded-full w-fit h-fit p-1 bg-deep-blue'>
                                            <FaCheck color='white' />
                                        </div>
                                        <p className='2xl:text-xl xl:text-xl text-lg font-normal'>90% Visa Success rate</p>
                                    </li>
                                </ul>
                                <div className='2xl:mt-10 xl:mt-8 mt-6'>
                                    <Link href={'/signUp'}>
                                        <ButtonSecondary text={'Register Now'} />
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <Image className='z-40 2xl:w-[240px] 2xl:h-[240px] xl:w-[220px] xl:h-[220px] w-[140px] h-[140px] rounded-full' src={flag} alt='' />
                            </div>
                        </div>
            }
        </div>
    )
}


const Accordion = () => {
    // Track which accordion item is open
    const [openIndex, setOpenIndex] = useState(0);
    const [buttonPosition, setButtonPosition] = useState('right1');

    // Toggle the accordion item based on index
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        setButtonPosition(buttonPosition === `right${index}` ? `left${index}` : `right${index}`);
    };

    // Define accordion items
    const accordionItems = [
        { title: 'Australia', image: aus, flag: au },
        { title: 'Canada', image: can, flag: ca },
        { title: 'USA', image: usa, flag: us },
        { title: 'UK', image: uk, flag: gb },
        { title: 'New Zealand', image: nzl, flag: nz },
        { title: 'JAPAN', image: jap, flag: jp },
        { title: 'South Korea', image: sk, flag: kr },
    ];

    return (

        <>
            <div className='items-stretch 2xl:flex xl:flex hidden'>
                {
                    accordionItems.map((item, index) => (
                        <div key={index} className={`flex ${openIndex === index ? 'w-[70%]' : 'flex-grow'}`}>
                            {openIndex === index ? (
                                <motion.div
                                    initial={{ x: '100%', opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: '100%', opacity: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    className="flex-1 w-full overflow-hidden"
                                >
                                    <div className="flex flex-col flex-1">
                                        <Country i={index} country={item.title} image={item.image} flag={item.flag} />
                                    </div>
                                </motion.div>
                            ) : (
                                <button
                                    className={`py-3 count h-full w-full border-r-[0.2px] border-r-blue font-semibold relative flex-1 text-white 2xl:min-w-[100px] xl:min-w-[80px] border-[#E8FFFE]`}
                                    onClick={() => toggleAccordion(index, item.title)}
                                >
                                    <span className="w-fit h-fit vertical z-10 top-10 left-[32%] 2xl:text-3xl xl:text-3xl font-semibold absolute uppercase">
                                        {item.title}
                                    </span>
                                    <Image
                                        className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full w-[50px] h-[50px]"
                                        src={item.flag}
                                        alt=""
                                    />
                                </button>
                            )
                            }
                        </div >
                    ))
                }
            </div >
            <div className='items-stretch 2xl:hidden xl:hidden flex flex-col'>
                {
                    accordionItems.map((item, index) => (
                        <div key={index} className={`max-h-[800px] flex flex-col ${openIndex === index ? 'h-[70%]' : 'flex-1'}`}>
                            {openIndex === index ?
                                (
                                    <motion.div
                                        initial={{ y: '30%', opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ x: '100%', opacity: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                        className="flex-1 w-full overflow-hidden"
                                    >
                                        <div className="flex flex-col flex-1">
                                            <Country i={index} country={item.title} image={item.image} flag={item.flag} />
                                        </div>
                                    </motion.div>
                                )
                                : (
                                    <button
                                        className={`py-10 font-semibold relative transition-all count duration-300 ease-in-out border-[#E8FFFE]`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="w-fit h-fit z-10 top-1/2 -translate-y-1/2 left-4 text-white text-lg 2xl:text-3xl xl:text-3xl font-semibold absolute uppercase">
                                            {item.title}
                                        </span>
                                        <Image
                                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-[50px] h-[50px]"
                                            src={item.flag}
                                            alt=""
                                        />
                                    </button>
                                )}


                        </div>
                    ))
                }

            </div ></>
    );
};

export default Accordion;
