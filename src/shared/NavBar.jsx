'use client'
import Facebook from '@/icons/Facebook';
import FaEmail from '@/icons/FaEmail';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaLocation from '@/icons/FaLocation';
import FaPhone from '@/icons/FaPhone';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/assets/logo (1).svg';
import { MdSearch } from 'react-icons/md';
import Link from 'next/link';
import DropDown from '@/icons/DrowDown';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    console.log(scrolled);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;
        const handleScroll = () => {
            const currentScrollTop = window.scrollY;
            setScrolled(currentScrollTop < lastScrollTop && currentScrollTop > 80);
            lastScrollTop = currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Disable scrolling on the body when the menu is open
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const navItems = <>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/' ? 'text-orange' : ''}`}>
            <Link href="/">Home</Link>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
            <Link href="/about">About</Link>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/services' ? 'text-orange' : ''}`}>
            <Link href="/services">Services</Link>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange transition-all duration-100 2xl:-mr-5 xl:-mr-5 ${pathname === '/universities' ? 'text-orange' : ''}`}>
            <Link href="/universities">Associate Universities</Link>
        </li>
        <li className='2xl:hidden xl:hidden block'><Link href="/ielts" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm 2xl:hidden xl:hidden block'>IELTS</Link></li>
        <li className='2xl:hidden xl:hidden block'><Link href="/korean-language/korean-regular-batch" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm 2xl:hidden xl:hidden block'>Korean Language</Link></li>
        <li><Link href="/japanese-language/japanese-language-course-n5" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm 2xl:hidden xl:hidden block'>Japanese Language</Link></li>
        <li className='2xl:hidden xl:hidden block'><Link href="/german-language/basic-german" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm 2xl:hidden xl:hidden block'>German Language</Link></li>
        <li className='2xl:hidden xl:hidden block'><Link href="/chinese-language/basic-chinese" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm 2xl:hidden xl:hidden block'>Chinese Language</Link></li>
        <li className='2xl:block xl:block hidden'>
            <div className="dropdown dropdown-hover">
                <div className='2xl:text-xl xl:text-base text-sm font-semibold dropdown-icon hover:text-orange transition-all duration-100 flex items-center cursor-pointer'>
                    <span tabIndex={0} role="button">Education</span>
                    <DropDown />
                </div>
                <ul tabIndex={0} className="dropdown-content 2xl:block xl:block hidden menu  bg-[#FBFCFF] z-[1] xl:w-64 2xl:w-72 pb-2 pt-[40px] px-2 top-5 -left-8">
                    <li><Link href="/ielts" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm'>IELTS</Link></li>
                    <li><Link href="/korean-language/korean-regular-batch" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm'>Korean Language</Link></li>
                    <li><Link href="/japanese-language/japanese-language-course-n5" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm'>Japanese Language</Link></li>
                    <li><Link href="/german-language/basic-german" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm'>German Language</Link></li>
                    <li><Link href="/chinese-language/basic-chinese" className='uppercase font-semibold 2xl:text-xl xl:text-base text-sm'>Chinese Language</Link></li>
                </ul>
            </div>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
            <Link href="/contact">Contact</Link>
        </li>
    </>


    return (
        <div className='w-full relative z-50'>
            <div className='w-full 2xl:h-[60px] shadow-xl xl:h-[60px] h-0 hidden bg-orange 2xl:flex xl:flex items-center justify-between'>
                {/* Nav Start */}
                <div className='nav-start  flex px-11 py-[12px] gap-1'>
                    <Facebook />
                    <FaLinkedIn />
                    <FaTwitter />
                    <FaWhatsapp />
                </div>
                <div className='nav-end flex items-center gap-12 pe-6'>
                    <div className='flex items-center gap-2'>
                        <FaLocation />
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>87, BNS Center (Level-10), Sector-7, Uttara, Dhaka-1230</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaEmail />
                        <p className='text-white font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>info@uttara.com</p>
                    </div>
                    <div className='bg-deep-blue flex items-center px-12 py-[18px]'>
                        <FaPhone />
                        <div class="phone-number">
                            <span class="letter text-base font-semibold text-white animate__backOutDown">+</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                            <span class="letter text-base font-semibold text-white">-</span>
                            <span class="letter text-base font-semibold text-white">1</span>
                            <span class="letter text-base font-semibold text-white">9</span>
                            <span class="letter text-base font-semibold text-white">5</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">3</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">7</span>
                            <span class="letter text-base font-semibold text-white">8</span>
                            <span class="letter text-base font-semibold text-white">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute 2xl:top-[60px] xl:top-[60px] top-0 inset-0'>
                <div className='bg-[#FBFCFF]'>
                    <div className='flex items-center justify-between  max-w-[1440px] mx-auto relative 2xl:h-[100px] xl:h-[100px] h-[50px] 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                        <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                            <div className='nav-start bg-white shadow-xl'>
                                <Image className='2xl:w-[140px] xl:w-[140px] w-[70px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='2xl:w-[275px] xl:w-[275px] 2xl:block xl:block hidden h-full'>

                        </div>
                        <div class="w-fit 2xl:block xl:block hidden">
                            <ul class="flex navItems items-center justify-between 2xl:gap-8 xl:gap-6">
                                {
                                    navItems
                                }
                            </ul>
                        </div>
                        <div className="dropdown 2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden block">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                                {navItems}
                            </ul>
                        </div>
                        <div className='hidden items-center gap-6 2xl:flex xl:flex'>
                            <div className='w-fit'>
                                <button className="rounded-[30px] flex items-center btn text-orange bg-red-100 btn-outline 2xl:text-lg xl:text-base text-sm">
                                    <MdSearch size={24} color="#c6250c" />
                                    <span>Search</span>
                                </button>
                            </div>
                            <div className='btn' onClick={() => setOpen(!open)}>
                                <GiHamburgerMenu size={'1.5rem'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                open &&
                <motion.div
                    initial={{ left: -1000 }}
                    animate={{ left: open ? 0 : -1000 }}
                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.00 }}
                    className='h-screen flex items-stretch fixed top-0 overflow-auto z-[60] w-full'
                >
                    <div className='w-[35%] h-full bg-[#FFFFFF] relative overflow-y-auto pb-10'>
                        <div className='w-fit h-fit absolute top-6 right-6 btn' onClick={() => setOpen(!open)}>
                            <AiOutlineClose size={'1.5rem'} />
                        </div>
                        <div className='mt-20 w-fit mx-auto flex items-center gap-3'>
                            <Image className='2xl:w-[140px] xl:w-[140px] w-[70px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                            <div>
                                <h3 className='text-base text-orange'>Language Institute</h3>
                                <h1 className='text-deep-blue text-xl font-semibold'>Student Agency</h1>
                            </div>
                        </div>
                        <div className="mt-10 px-6">
                            <h3 className='text-center text-xl text-deep-blue font-semibold'>About Us</h3>
                            <p className='text-base mt-6 text-center'>
                                <span className='text-deep-blue font-semibold text-base'>UICC</span> helps students achieve their study abroad dreams with expert guidance on admissions, visas, and language training to ensure success in their academic journey.
                            </p>
                            <h2 className='text-2xl font-semibold text-center mt-8'>Contact Us</h2>
                            <p className='mt-3 text-center'>info@uttara.com</p>
                            <p className='mt-3 text-center'>+880-195837780</p>
                            <div className='flex items-center justify-center gap-6 mt-6'>
                                <FaFacebookSquare size={'1.5rem'} />
                                <FaLinkedinIn size={'1.5rem'} />
                                <FaWhatsappSquare size={'1.5rem'} />
                                <FaTwitterSquare size={'1.5rem'} />
                            </div>
                        </div>
                    </div>
                    {
                        open && <div className='flex-1 h-full bg-black opacity-30' onClick={() => setOpen(!open)}></div>
                    }
                </motion.div>
            }
            <motion.div
                initial={{ top: -2000 }}
                animate={{ top: scrolled ? 0 : -200 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.01 }}
                className={`bg-[#FBFCFF] shadow-xl fixed right-0 left-0 z-50`}
            >
                <div className='flex 2xl:h-[100px] xl:h-[100px] h-[50px] items-center justify-between  max-w-[1440px] mx-auto relative 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                    <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                        <div className='nav-start bg-white shadow-xl'>
                            <Image className='2xl:w-[140px] xl:w-[140px] w-[70px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
                        </div>
                    </div>
                    <div className='2xl:w-[275px] xl:w-[275px] 2xl:block xl:block hidden h-full'>

                    </div>
                    <div class="w-fit 2xl:block xl:block hidden">
                        <ul class="flex navItems items-center justify-between 2xl:gap-8 xl:gap-6">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <div className="dropdown 2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                            {navItems}
                        </ul>
                    </div>
                    <div className='hidden items-center gap-6 2xl:flex xl:flex'>
                        <div className='w-fit'>
                            <button className="rounded-[30px] flex items-center btn text-orange bg-red-100 btn-outline 2xl:text-lg xl:text-base text-sm">
                                <MdSearch size={24} color="#c6250c" />
                                <span>Search</span>
                            </button>
                        </div>
                        <div className='btn' onClick={() => setOpen(!open)}>
                            <GiHamburgerMenu size={'1.5rem'} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;