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
import { MdArrowForwardIos, MdSearch } from 'react-icons/md';
import Link from 'next/link';
import DropDown from '@/icons/DrowDown';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronDown, FaFacebookSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { serif } from './Serif';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const [clicked1, setClicked1] = useState(false);
    const [clicked2, setClicked2] = useState(false);
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);

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
        if (open || nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
        };
    }, [open, nav]);

    const IELTS = [
        { name: 'IELTS Regular Batch', href: '/ielts' },
        { name: 'IELTS Short Course', href: '/ielts/ielts-short-course' },
        { name: 'English Foundation+IELTS Course', href: '/ielts/english-foundation-ielts-course' },
        { name: 'IELTS Private Batch', href: '/ielts/ielts-private-batch' },
        { name: 'IELTS One-to-One Private Care', href: '/ielts/ielts-one-to-one-private-care' },
        { name: 'English Grammar Fitness Course', href: '/ielts/english-grammar-fitness-course' },
        { name: 'English Communication Skill Development Course', href: '/ielts/english-communication-skill-development-course' },
        { name: 'Spoken Private', href: '/ielts/spoken-private' },
        { name: 'Kids Spoken', href: '/ielts/kids-spoken' },
        { name: 'Spoken English Junior', href: '/ielts/spoken-english-junior' }
    ]

    const Korean = [
        { name: 'Korean Regular Batch', href: '/korean-language/korean-regular-batch' },
        { name: 'Special EPS-TOPIK Course', href: '/korean-language/special-eps-topik-course' },
        { name: 'Special TOPIK Course', href: '/korean-language/special-topik-course' },
        { name: 'Korean Private Batch', href: '/korean-language/korean-private-batch' }
    ];

    const Japanese = [
        { name: 'Japanese Language Course N5', href: '/japanese-language/japanese-language-course-n5' },
        { name: 'Japanese Language Course N4', href: '/japanese-language/japanese-language-course-n4' },
        { name: 'Japanese Language Course (N5+N4) Combined Course', href: '/japanese-language/japanese-language-course-n5-n4-combined' }
    ];

    const Chinese = [
        { name: 'Basic Chinese', href: '/chinese-language/basic-chinese' },
        { name: 'Intermediate Chinese', href: '/chinese-language/intermediate-chinese' },
        { name: 'Advanced Chinese', href: '/chinese-language/advanced-chinese' }
    ];

    const German = [
        { name: 'Basic German', href: '/german-language/basic-german' },
        { name: 'Intermediate German', href: '/german-language/intermediate-german' },
        { name: 'Advanced German', href: '/german-language/advanced-german' }
    ]

    const Visa = [
        { name: 'Visa', href: '/visa-processing' },
        { name: 'Student Visa', href: '/visa-processing/student-visa' },
        { name: 'Tourist Visa', href: '/visa-processing/tourist-visa' },
        { name: 'Work Visa', href: '/visa-processing/worker-visa' },
        { name: 'Family Visa', href: '/visa-processing/family-visa' }
    ];


    const Option = ({ children, arr, show }) => {
        return (
            <motion.div
                whileHover="show"
                initial="hidden"
                className="uppercase font-semibold 2xl:text-xl xl:text-base text-sm py-3 w-full"
            >
                <motion.span
                    variants={{
                        show: {
                            color: '#c6250c', // Change color on hover
                            x: 40, // Move 40px to the right
                            transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
                        },
                        hidden: {
                            color: '#000000', // Default color
                            x: 0, // Default position
                            transition: { duration: 0.3, ease: 'easeInOut' },
                        },
                    }}
                    className="relative"
                >
                    <span className='flex items-center justify-between'>
                        <span className='flex items-center parent-you'>
                            <span className="w-[0px] h-[4px] bg-orange line-option">

                            </span>
                            <span>
                                {children}
                            </span>
                        </span>
                        {
                            arr?.length > 0 &&
                            <span className='z-40'>
                                <MdArrowForwardIos />
                            </span>
                        }
                    </span>
                    {/* 2nd hover */}
                    {
                        arr?.length > 0 &&
                        <motion.div
                            variants={{
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    pointerEvents: 'auto',
                                    transition: {
                                        duration: 0.4, // Animation duration when showing
                                        delay: 0.2, // Add delay when showing
                                    },
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 40,
                                    pointerEvents: 'none',
                                    transition: {
                                        duration: 0.3, // Animation duration when hiding
                                        delay: 0.1, // Add delay when hiding
                                    },
                                }
                            }}
                            className={`${show ? 'w-[300px]' : 'w-[400px]'} bg-transparent absolute -top-[25%] left-[90%] z-30 flex`}>
                            <div className="h-full w-[67px]"></div>
                            <div className='rounded flex-1 p-6 bg-white shadow-xl'>
                                {
                                    arr?.map((a, i) => {
                                        return (
                                            <motion.div key={i}
                                                whileHover="show"
                                                initial="hidden"
                                                className='border-b-[0.60px] border-opacity-30 border-b-gray'
                                            >
                                                <Link href={a.href} className=' parent-option-1 py-4'>
                                                    <motion.span
                                                        variants={{
                                                            show: {
                                                                color: '#c6250c', // Change color on hover
                                                                x: 40, // Move 40px to the right
                                                                transition: { duration: 0.3, ease: 'easeInOut' }, // Smooth transition
                                                            },
                                                            hidden: {
                                                                color: '#000000', // Default color
                                                                x: 0, // Default position
                                                                transition: { duration: 0.3, ease: 'easeInOut' },
                                                            },
                                                        }}
                                                        className="relative"
                                                    >
                                                        <span className='flex items-center justify-between'>
                                                            <span className='flex items-center parent-you-1'>
                                                                <span className="w-[0px] h-[4px] bg-orange line-option-1">

                                                                </span>
                                                                <span className='2xl:text-[14px] xl:text-[12px] py-2'>
                                                                    {a.name}
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </motion.span>
                                                </Link>
                                            </motion.div>
                                        )
                                    })
                                }

                            </div>
                            {/*  */}
                        </motion.div>
                    }
                </motion.span>
            </motion.div>
        )
    }

    console.log(nav);

    const navItems = <>
        <li className={`2xl:text-xl xl:text-base text-sm ${serif.className} font-semibold hover:text-orange transition-all duration-100 ${pathname === '/' ? 'text-orange' : ''}`}>
            <Link href={'/'}>Home</Link>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
            <Link href="/about">About</Link>
        </li>
        <li className='relative'>
            <div
            >
                <motion.div
                    whileHover='show'
                    initial='hidden'
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange ${serif.className} transition-all duration-100 flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className='my-auto'>Education</span>
                    <div className='h-fit my-auto'>
                        <DropDown />
                    </div>
                    <motion.div
                        variants={{
                            show: {
                                opacity: 1,
                                y: 0,
                                pointerEvents: 'auto',
                                transition: {
                                    duration: 0.4, // Animation duration when showing
                                    delay: 0.2, // Add delay when showing
                                },
                            },
                            hidden: {
                                opacity: 0,
                                y: 40,
                                pointerEvents: 'none',
                                transition: {
                                    duration: 0.3, // Animation duration when hiding
                                    delay: 0.1, // Add delay when hiding
                                },
                            }
                        }}
                        className='w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0'>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option arr={IELTS}>IELTS</Option>
                        </li>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option arr={Japanese}>Japanese Language</Option>
                        </li>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option arr={Korean}>Korean Language</Option>
                        </li>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option arr={German}>German Language</Option>
                        </li>
                        <li className='parent-option'>
                            <Option arr={Chinese}>Chinese Language</Option>
                        </li>
                    </motion.div>
                </motion.div>
            </div>
        </li>
        <li className='relative'>
            <div
            >
                <motion.div
                    whileHover='show'
                    initial='hidden'
                    className={`2xl:text-xl xl:text-base 2xl:h-[60px] xl:h-[60px] text-sm font-semibold h-full hover-color hover:text-orange ${serif.className} transition-all duration-100 flex gap-[2px] ${pathname === '/services' ? 'text-orange' : ''}`}>
                    <span className='my-auto'>Service</span>
                    <div className='h-fit my-auto'>
                        <DropDown />
                    </div>
                    <motion.div
                        variants={{
                            show: {
                                opacity: 1,
                                y: 0,
                                pointerEvents: 'auto',
                                transition: {
                                    duration: 0.4, // Animation duration when showing
                                    delay: 0.2, // Add delay when showing
                                },
                            },
                            hidden: {
                                opacity: 0,
                                y: 40,
                                pointerEvents: 'none',
                                transition: {
                                    duration: 0.3, // Animation duration when hiding
                                    delay: 0.1, // Add delay when hiding
                                },
                            }
                        }}
                        className='w-[350px] pt-10 px-10 pb-6 absolute top-[60px] bg-white left-0'>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option show={true} arr={Visa}>Visa Processing</Option>
                        </li>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option>
                                <Link href='/career-counseling'>
                                    Career Counseling
                                </Link>
                            </Option>
                        </li>
                        <li className='border-b-[0.60px] parent-option border-opacity-30 border-b-gray '>
                            <Option show={true}>
                                <Link href={'/language-training'}>
                                    Language Training
                                </Link>
                            </Option>
                        </li>
                        <li className='parent-option border-opacity-30 border-b-gray '>
                            <Option show={true}>
                                <Link href={'/air-ticket'}>
                                    Air Ticket
                                </Link>
                            </Option>
                        </li>
                        <li className='parent-option border-opacity-30 border-b-gray '>
                            <Option show={true}>
                                Digital Marketing
                            </Option>
                        </li>
                        <li className='parent-option border-opacity-30 border-b-gray '>
                            <Option show={true}>
                                Web Design
                            </Option>
                        </li>
                        <li className='parent-option border-opacity-30 border-b-gray '>
                            <Option show={true}>
                                Web Development
                            </Option>
                        </li>
                    </motion.div>
                </motion.div>
            </div>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} transition-all duration-100 2xl:-mr-5 xl:-mr-5 pr-5 ${pathname === '/universities' ? 'text-orange' : ''}`}>
            <Link href="/universities">Associate Universities</Link>
        </li>
        <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} transition-all duration-100 ${pathname === '/contact' ? 'text-orange' : ''}`}>
            <Link href="/contact">Contact</Link>
        </li>
    </>


    const navMobile = [
        ...IELTS, ...Korean, ...German, ...Chinese, ...Japanese,
    ]


    return (
        <div className={`w-full relative z-50`}>
            {/* Nav Top Part */}
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
                    <div className='flex items-center justify-between  max-w-[1440px] mx-auto relative 2xl:h-[100px] xl:h-[100px] h-[80px] 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                        <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                            <div className='nav-start bg-white shadow-xl'>
                                <Image className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
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
                        <div className="2xl:ml-0 xl:ml-0 ml-auto 2xl:hidden xl:hidden block">
                            <div className="btn btn-ghost btn-circle" onClick={() => setNav(true)}>
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

                            <div
                                className={`h-screen w-full bg-white overflow-y-auto overflow-x-hidden z-[60] transition-all duration-1000 ease-in-out fixed top-0 right-0 ${nav ? 'left-0' : '-left-full'
                                    }`}
                            >
                                <span
                                    onClick={() => setNav(false)}
                                    className="absolute top-2 right-4 text-3xl cursor-pointer"
                                >
                                    X
                                </span>

                                <div className="p-10 w-full">
                                    <Image src={logo} alt="" className="w-[100px] h-auto" />
                                    <div className='relative mt-4 mb-5'>
                                        <input className="w-full border border-black rounded-[30px] bg-[#F8F8F8] input input-border" placeholder="Search..." />
                                        <div className="absolute right-4 mt-2 top-1/2 -translate-y-1/2">
                                            <MdSearch size={24} color="#c6250c" className="" />
                                        </div>
                                    </div>
                                    <div className='mt-6'>
                                        <ul className='pb-10'>
                                            <li className={`2xl:text-xl xl:text-base text-sm ${serif.className} hover:text-orange transition-all duration-100 font-bold pb-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/' ? 'text-orange' : ''}`}>
                                                <Link href={'/'}>Home</Link>
                                            </li>
                                            <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} py-3 border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-100 ${pathname === '/about' ? 'text-orange' : ''}`}>
                                                <Link href="/about">About</Link>
                                            </li>
                                            <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} transition-all duration-100`}>
                                                <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                    <div>
                                                        Education
                                                    </div>
                                                    <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                        setClicked1(!clicked1)
                                                        setClicked2(false)
                                                    }}>
                                                        <motion.div
                                                            animate={{ rotate: clicked1 ? 180 : 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="h-fit"
                                                        >
                                                            <FaChevronDown size={14} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                <>
                                                    <motion.div
                                                        animate={clicked1 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                        className='w-full overflow-hidden pl-4'>
                                                        {
                                                            navMobile?.map((a, i) => (
                                                                <p key={i} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                    <Link href={a.href}>{a.name}</Link>
                                                                </p>
                                                            ))
                                                        }
                                                    </motion.div>

                                                </>
                                            </li>
                                            <li className={`2xl:text-xl xl:text-base text-sm font-semibold hover:text-orange ${serif.className} transition-all duration-100`}>
                                                <div className='flex items-center justify-between border-b-[0.60px] border-b-black border-opacity-20 py-3'>
                                                    <div>
                                                        Services
                                                    </div>
                                                    <div className='bg-slate-300 p-1 rounded bg-opacity-45' onClick={() => {
                                                        setClicked2(!clicked2)
                                                        setClicked1(false)
                                                    }}>
                                                        <motion.div
                                                            animate={{ rotate: clicked2 ? 180 : 0 }}
                                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                            className="h-fit"
                                                        >
                                                            <FaChevronDown size={14} />
                                                        </motion.div>
                                                    </div>
                                                </div>
                                                <>
                                                    <motion.div
                                                        animate={clicked2 ? { height: 'fit-content', pointerEvents: 'auto' } : { height: '0px', pointerEvents: 'none' }}
                                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                                        className='w-full overflow-hidden pl-4'>
                                                        {
                                                            Visa?.map((a, i) => (
                                                                <p key={i} className='py-2 text-black hover:text-orange transition-all duration-300 ease-linear border-b-[0.60px] border-b-black border-opacity-20'>
                                                                    <Link href={a.href}>{a.name}</Link>
                                                                </p>
                                                            ))
                                                        }
                                                        <p className='py-2 text-black hover:text-orange border-b-[0.60px] border-b-black border-opacity-20 transition-all duration-300 ease-linear'>
                                                            <Link href={'/language-training'}>Language Training</Link>
                                                        </p>
                                                        <p className='py-2 text-black hover:text-orange transition-all duration-300 border-b-[0.60px] border-b-black border-opacity-20 ease-linear'>
                                                            <Link href={'/air-ticket'}>
                                                                Air Ticket
                                                            </Link>
                                                        </p>
                                                        <p className='py-2 text-black hover:text-orange transition-all duration-300 border-b-[0.60px] border-b-black border-opacity-20 ease-linear'>
                                                            <Link href={'/air-ticket'}>
                                                                Digital Marketing
                                                            </Link>
                                                        </p>
                                                        <p className='py-2 text-black hover:text-orange transition-all duration-300 border-b-[0.60px] border-b-black border-opacity-20 ease-linear'>
                                                            <Link href={'/air-ticket'}>
                                                                Web Design
                                                            </Link>
                                                        </p>
                                                        <p className='py-2 text-black hover:text-orange transition-all duration-300 border-b-[0.60px] border-b-black border-opacity-20 ease-linear'>
                                                            <Link href={'/air-ticket'}>
                                                                Web Development
                                                            </Link>
                                                        </p>
                                                    </motion.div>

                                                </>
                                            </li>
                                            <li className={`2xl:text-xl xl:text-base text-sm ${serif.className} hover:text-orange transition-all text-black duration-100 font-bold py-3 border-b-[0.60px] border-b-black border-opacity-20 ${pathname === '/universities' ? 'text-orange' : ''}`}>
                                                <Link href="/universities">Associate Universities</Link>
                                            </li>
                                            <li className={`2xl:text-xl xl:text-base text-sm ${serif.className} hover:text-orange transition-all text-black duration-100 font-bold py-3 ${pathname === '/contact' ? 'text-orange' : ''}`}>
                                                <Link href="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                            <IoCloseOutline size={'1.5rem'} />
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
                exit={{ top: -2000, transition: { duration: 0, ease: "linear" } }}
                transition={{ duration: 0.5, ease: "linear", delay: 0.01 }}
                className={`bg-[#FBFCFF] shadow-xl fixed right-0 left-0 z-50`}
            >
                <div className='flex 2xl:h-[100px] xl:h-[100px] h-[80px] items-center justify-between  max-w-[1440px] mx-auto relative 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11 px-4'>
                    <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                        <div className='nav-start bg-white shadow-xl'>
                            <Image className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain' src={logo} alt='logo' />
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

export default NavBar;