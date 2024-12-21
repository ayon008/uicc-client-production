import Facebook from '@/icons/Facebook';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaLocation from '@/icons/FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/logo.svg'
import Link from 'next/link';
import ButtonSecondary from './ButtonSecondary';
import TextAnimation from './TextAnimation';
import Animated from './Animated';

const Footer = () => {
    return (
        <div className=''>
            <div className='footer-main 2xl:py-28 xl:py-24 py-16 relative'>
                <div className='2xl:block xl:block hidden px-4'>
                    <div className='bg-orange flex flex-col rounded-lg'>
                        <div className='w-[20%] relative'>
                            <Animated className={'absolute left-2 top-0'}>
                                <Image className='w-full' src={logo} alt='logo' />
                            </Animated>
                        </div>
                        <div className='w-[75%] ml-auto h-full flex items-center justify-between 2xl:py-7 xl:py-5  2xl:pr-10 xl:pr-8'>
                            <div className='flex items-center gap-4'>
                                <TextAnimation>
                                    <Facebook />
                                </TextAnimation>
                                <TextAnimation>
                                    <FaLinkedIn />
                                </TextAnimation>
                                <TextAnimation>
                                    <FaTwitter />
                                </TextAnimation>
                                <TextAnimation>
                                    <FaWhatsapp />
                                </TextAnimation>
                            </div>
                            <div className='w-[1px] bg-white h-[32px] rounded-lg'>

                            </div>
                            <div>
                                <TextAnimation>
                                    <div className='flex items-center gap-2'>
                                        <FaLocation />
                                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center (Level-10), Sector-7, Uttara, Dhaka-1230</p>
                                    </div>
                                </TextAnimation>
                            </div>
                            <div className='w-[1px] bg-white h-[32px] rounded-lg'>

                            </div>
                            <div>
                                <TextAnimation>
                                    <div className='flex items-center gap-[2px]'>
                                        <FaPhone />
                                        <p className='text-white text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer font-semibold'>+880-1958377801</p>
                                    </div>
                                </TextAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:hidden xl:hidden block py-6'>
                    <div className='w-3/4 bg-orange mx-auto py-4 space-y-4 rounded-lg'>
                        <Image className='h-[75px] w-auto mx-auto' src={logo} alt='logo' />
                        <div className='flex items-center justify-center px-8 gap-4'>
                            <Facebook />
                            <FaLinkedIn />
                            <FaTwitter />
                            <FaWhatsapp />
                        </div>
                        <div className='flex items-center justify-center gap-2 px-8'>
                            <FaLocation />
                            <p className='text-white text-center font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center (Level-10),<br /> Sector-7, Uttara, Dhaka-1230</p>
                        </div>
                        <div className='flex items-center justify-center px-10 gap-[2px]'>
                            <FaPhone />
                            <p className='text-white text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer font-semibold 2xl:ml-0 xl:ml-0 ml-3'></p>
                        </div>
                    </div>
                </div>
                <footer className="footer items-start text-base-content py-10 px-14 mt-14">
                    <aside className='text-white'>
                        <div className='2xl:space-y-4 xl:space-y-3 space-y-2 border-b-white pb-4'>
                            <h2 className='2xl:text-2xl xl:text-2xl text-xl font-semibold'>
                                Transforming Mind Shaping Future
                            </h2>
                            <p className='2xl:text-base xl:text-base text-base font-normal'>
                                Indignation and dislike men who are so beguiled and<br /> of pleasure of the moment so blinded
                            </p>
                        </div>
                        <div className='w-full h-[1px] bg-white 2xl:my-6 xl:my-4 my-2'></div>
                        <div className='mt-10'>
                            <Link href={'/signUp'}>
                                <Animated>
                                    <ButtonSecondary text={'Register Now'} />
                                </Animated>
                            </Link>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title relative text-lg">Useful Links</h6>
                        <ul className="flex flex-col gap-3 list-disc pl-5">
                            <li className="link link-hover">
                                <Link href={'/about'}>About Us</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/universities'}>Top Universities</Link>
                            </li>
                            <li className="link link-hover">Top Countries</li>
                            <li className="link link-hover">
                                <Link href={'/ielts'}>Education</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/contact'}>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className='hidden 2xl:block xl:block bg-white w-[1px] h-[260px]'></nav>
                    <nav>
                        <h6 className="footer-title relative text-lg">Services</h6>
                        <ul className="flex flex-col gap-3 list-disc pl-5">
                            <li className="link link-hover">
                                <Link href={'/career-counseling'}>Career Council</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/air-ticket'}>Air Ticket</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/language-training'}>Language Training</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/visa-processing'}>Visa Processing</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/'}>Digital Marketing</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/'}>Web Design</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/'}>Web Development</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className='hidden 2xl:block xl:block bg-white w-[1px] h-[260px]'></nav>
                    <nav>
                        <h6 className="footer-title relative text-lg">Quick Links</h6>
                        <ul className="flex flex-col gap-3 list-disc pl-5">
                            <li className="link link-hover">
                                <Link href={'/ielts'}>Education</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/korean-language/korean-regular-batch'}>Korean Language</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/german-language/basic-german'}>German Language</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/japanese-language/japanese-language-course-n5'}>Japanese Language</Link>
                            </li>
                            <li className="link link-hover">
                                <Link href={'/chinese-language/basic-chinese'}>Chinese Language</Link>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
            <div className='footer-end flex 2xl:flex-row xl:flex-row flex-col gap-2 justify-between px-14 py-5'>
                <p className='text-white text-lg'>
                    © Copyright {new Date().getFullYear()} <span className='text-orange-1 font-bold'>Abriana IT.</span> - All rights reserved
                </p>
                <ul className='flex items-center text-white gap-8'>
                    <li>Privacy</li>
                    <li>Terms of Use</li>
                    <li>Support</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
