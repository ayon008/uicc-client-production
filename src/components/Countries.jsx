'use client'
import React, { useState } from 'react';
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
import { motion } from 'framer-motion'

const Country = ({ country, flag, i, image }) => {
    console.log(country);
    return (
        <div className='h-full w-full pb-10 min-h-[560px] bg-red-50'>
            <div className='bg-orange py-6'>
                <p className='text-white my-auto text-center uppercase 2xl:text-5xl xl:text-4xl text-2xl font-semibold'>{country}</p>
            </div>
            {
                country === 'JAPAN' ?
                    <div className='flex relative 2xl:flex-row xl:flex-row flex-col-reverse items-center 2xl:gap-12 xl:gap-10 gap-6 pl-10 pt-6'>
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
                        <div className='flex 2xl:flex-row xl:flex-row flex-col-reverse items-center 2xl:gap-12 xl:gap-10 gap-6 pl-10 pt-6 relative'>
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
                                <div className='2xl:mt-10 xl:mt-8 mt-4'>
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
                        <div className='flex 2xl:flex-row xl:flex-row items-center flex-col-reverse 2xl:gap-12 xl:gap-10 gap-6 pl-10 pt-6 relative'>
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
                                <div className='2xl:mt-10 xl:mt-8 mt-4'>
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

    // Toggle the accordion item based on index
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Define accordion items
    const accordionItems = [
        { title: 'AUstralia', image: aus, flag: au },
        { title: 'Canada', image: can, flag: ca },
        { title: 'USA', image: usa, flag: us },
        { title: 'UK', image: uk, flag: gb },
        { title: 'New Zealand', image: nzl, flag: nz },
        { title: 'JAPAN', image: jap, flag: jp },
        { title: 'South Korea', image: sk, flag: kr },
    ];

    return (
        // <div className="2xl:w-fit xl:w-fit w-full flex 2xl:flex-row xl:flex-row flex-col 2xl:items-center xl:items-center items-start 2xl:justify-end xl:justify-end justify-normal mx-auto 2xl:mb-32 xl:mb-24 mb-16">
        //     {accordionItems.map((item, index) => (
        //         <>
        //             <div data-aos="fade-up"
        //                 data-aos-anchor-placement="top-bottom" key={index} className="2xl:flex xl:flex hidden flex-row-reverse border border-[#E8FFFE] h-[500px]">
        //                 {openIndex !== index && (
        //                     <button
        //                         className={`py-3 h-full font-semibold relative hover:scale-110 transition-all duration-300 ease-in-out flex-1 count text-white 2xl:min-w-[100px] xl:min-w-[80px] border-[#E8FFFE]`}
        //                         onClick={() => toggleAccordion(index)}
        //                     >
        //                         {/* <Image className='h-full z-40 opacity-60' src={item.image} alt={`${item.title}`} /> */}
        //                         <span className='w-fit h-fit vertical z-10 top-10 left-[32%] 2xl:text-3xl xl:text-3xl font-semibold absolute uppercase'>{item.title}</span>
        //                         <Image className='absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full w-[50px] h-[50px]' src={item?.flag} alt='' />
        //                     </button>
        //                 )}
        //                 <div
        //                     className={`transition-all flex-1 duration-300 overflow-hidden ${openIndex === index ? 'max-w-full min-w-[650px] 2xl:pr-6' : 'max-w-0 min-w-0'
        //                         }`}
        //                 >
        //                     <Country i={index} country={item.title} flag={item.flag} />
        //                 </div>
        //             </div>
        //             <div data-aos="fade-up"
        //                 data-aos-anchor-placement="top-bottom" key={index} className="2xl:hidden xl:hidden w-full flex flex-col border border-[#E8FFFE] h-auto">
        //                 {openIndex !== index && (
        //                     <button
        //                         className={`py-4 font-semibold relative hover:scale-110 transition-all duration-300 ease-in-out border-[#E8FFFE]`}
        //                         onClick={() => toggleAccordion(index)}
        //                     >
        //                         <div className='flex items-center justify-between w-full px-6 relative'>
        //                             <h1 className='w-fit h-fit 2xl:text-3xl xl:text-3xl font-semibold uppercase z-30'>{item.title}</h1>
        //                             <Image className='rounded-full w-[50px] h-[50px] z-30' src={item?.flag} alt='' />
        //                             <Image className='h-full opacity-60 absolute inset-0 z-10' src={item.image} alt={`${item.title}`} />
        //                         </div>
        //                     </button>
        //                 )}
        //                 

        //             </div>
        //         </>
        //     ))}
        // </div>
        <div className='flex items-stretch my-10'>
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
                                onClick={() => toggleAccordion(index)}
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
                        )}
                    </div>
                ))
            }

        </div>
    );
};

export default Accordion;