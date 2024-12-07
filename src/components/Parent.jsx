'use client'
import Link from 'next/link';
import image from '@/../public/assets/Frame 63.png'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ServiceBanner from '@/shared/ServiceBanner';
import video from '@/../public/assets/Abstract White Background 4K - Motion Graphics Background Loop - White Video Loop.mp4'
import { serif } from '@/shared/Serif';

const links = [
    {
        name: 'Career Counseling  ',
        href: '/career-counseling',
        subArray: []
    },
    {
        name: 'Language Training',
        href: '/language-training',
        subArray: []
    },
    {
        name: 'IELTS',
        href: '/ielts',
        subArray: [
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
    },
    {
        name: 'Visa Processing',
        href: '/visa-processing',
        subArray: [
            { name: 'Student Visa', href: '/visa-processing/student-visa' },
            { name: 'Tourist Visa', href: '/visa-processing/tourist-visa' },
            { name: 'Worker Visa', href: '/visa-processing/worker-visa' },
            { name: 'Family Visa', href: '/visa-processing/family-visa' }
        ]
    },
    {
        name: 'Air Ticket',
        href: '/air-ticket',
        subArray: [
            // { name: 'One-Way Ticket', href: '/air-ticket/one-way-ticket' },
            // { name: 'Round Trip', href: '/air-ticket/round-trip' },
            // { name: 'Business Class', href: '/air-ticket/business-class' }
        ]
    },
    {
        name: 'Korean Language',
        href: '/korean-language',
        subArray: [
            { name: 'Korean Regular Batch', href: '/korean-language/korean-regular-batch' },
            { name: 'Special EPS-TOPIK Course', href: '/korean-language/special-eps-topik-course' },
            { name: 'Special TOPIK Course', href: '/korean-language/special-topik-course' },
            { name: 'Korean Private Batch', href: '/korean-language/korean-private-batch' }
        ]
    },
    {
        name: 'Japanese Language',
        href: '/japanese-language',
        subArray: [
            { name: 'Japanese Language Course N5', href: '/japanese-language/japanese-language-course-n5' },
            { name: 'Japanese Language Course N4', href: '/japanese-language/japanese-language-course-n4' },
            { name: 'Japanese Language Course (N5+N4) Combined Course', href: '/japanese-language/japanese-language-course-n5-n4-combined' }
        ]
    },
    {
        name: 'Chinese Language',
        href: '/chinese-language',
        subArray: [
            { name: 'Basic Chinese', href: '/chinese-language/basic-chinese' },
            { name: 'Intermediate Chinese', href: '/chinese-language/intermediate-chinese' },
            { name: 'Advanced Chinese', href: '/chinese-language/advanced-chinese' }
        ]
    },
    {
        name: 'German Language',
        href: '/german-language',
        subArray: [
            { name: 'Basic German', href: '/german-language/basic-german' },
            { name: 'Intermediate German', href: '/german-language/intermediate-german' },
            { name: 'Advanced German', href: '/german-language/advanced-german' }
        ]
    }
];


export const Icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8.66699 5.74999C8.66699 5.59528 8.72845 5.44691 8.83785 5.33751C8.94724 5.22811 9.09562 5.16666 9.25033 5.16666H13.917C14.0717 5.16666 14.2201 5.22811 14.3295 5.33751C14.4389 5.44691 14.5003 5.59528 14.5003 5.74999C14.5003 5.9047 14.4389 6.05307 14.3295 6.16247C14.2201 6.27186 14.0717 6.33332 13.917 6.33332H9.25033C9.09562 6.33332 8.94724 6.27186 8.83785 6.16247C8.72845 6.05307 8.66699 5.9047 8.66699 5.74999ZM9.25033 7.49999C9.09562 7.49999 8.94724 7.56145 8.83785 7.67084C8.72845 7.78024 8.66699 7.92861 8.66699 8.08332C8.66699 8.23803 8.72845 8.38641 8.83785 8.4958C8.94724 8.6052 9.09562 8.66666 9.25033 8.66666H13.917C14.0717 8.66666 14.2201 8.6052 14.3295 8.4958C14.4389 8.38641 14.5003 8.23803 14.5003 8.08332C14.5003 7.92861 14.4389 7.78024 14.3295 7.67084C14.2201 7.56145 14.0717 7.49999 13.917 7.49999H9.25033ZM8.66699 13.3333C8.66699 13.1786 8.72845 13.0302 8.83785 12.9208C8.94724 12.8114 9.09562 12.75 9.25033 12.75H13.917C14.0717 12.75 14.2201 12.8114 14.3295 12.9208C14.4389 13.0302 14.5003 13.1786 14.5003 13.3333C14.5003 13.488 14.4389 13.6364 14.3295 13.7458C14.2201 13.8552 14.0717 13.9167 13.917 13.9167H9.25033C9.09562 13.9167 8.94724 13.8552 8.83785 13.7458C8.72845 13.6364 8.66699 13.488 8.66699 13.3333ZM9.25033 15.0833C9.09562 15.0833 8.94724 15.1448 8.83785 15.2542C8.72845 15.3636 8.66699 15.5119 8.66699 15.6667C8.66699 15.8214 8.72845 15.9697 8.83785 16.0791C8.94724 16.1885 9.09562 16.25 9.25033 16.25H13.917C14.0717 16.25 14.2201 16.1885 14.3295 16.0791C14.4389 15.9697 14.5003 15.8214 14.5003 15.6667C14.5003 15.5119 14.4389 15.3636 14.3295 15.2542C14.2201 15.1448 14.0717 15.0833 13.917 15.0833H9.25033Z" fill="#E16710" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83301 12.75C2.83301 12.5953 2.89447 12.4469 3.00386 12.3375C3.11326 12.2281 3.26163 12.1667 3.41634 12.1667H6.33301C6.48772 12.1667 6.63609 12.2281 6.74549 12.3375C6.85488 12.4469 6.91634 12.5953 6.91634 12.75V15.6667C6.91634 15.8214 6.85488 15.9697 6.74549 16.0791C6.63609 16.1885 6.48772 16.25 6.33301 16.25H3.41634C3.26163 16.25 3.11326 16.1885 3.00386 16.0791C2.89447 15.9697 2.83301 15.8214 2.83301 15.6667V12.75ZM3.99967 13.3333V15.0833H5.74967V13.3333H3.99967Z" fill="#E16710" />
            <path d="M7.3294 6.16241C7.43566 6.05239 7.49446 5.90504 7.49313 5.75209C7.4918 5.59914 7.43045 5.45284 7.3223 5.34468C7.21414 5.23653 7.06783 5.17518 6.91489 5.17385C6.76194 5.17252 6.61459 5.23132 6.50457 5.33758L4.58365 7.25849L3.8294 6.50424C3.71938 6.39798 3.57203 6.33919 3.41908 6.34052C3.26614 6.34185 3.11983 6.40319 3.01167 6.51135C2.90352 6.6195 2.84217 6.76581 2.84084 6.91876C2.83951 7.07171 2.89831 7.21906 3.00457 7.32908L4.58365 8.90816L7.3294 6.16241Z" fill="#E16710" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83333 0.5C2.21449 0.5 1.621 0.745833 1.18342 1.18342C0.745833 1.621 0.5 2.21449 0.5 2.83333V19.1667C0.5 19.7855 0.745833 20.379 1.18342 20.8166C1.621 21.2542 2.21449 21.5 2.83333 21.5H14.5C15.1188 21.5 15.7123 21.2542 16.1499 20.8166C16.5875 20.379 16.8333 19.7855 16.8333 19.1667V2.83333C16.8333 2.21449 16.5875 1.621 16.1499 1.18342C15.7123 0.745833 15.1188 0.5 14.5 0.5H2.83333ZM1.66667 2.83333C1.66667 2.52391 1.78958 2.22717 2.00838 2.00838C2.22717 1.78958 2.52391 1.66667 2.83333 1.66667H14.5C14.8094 1.66667 15.1062 1.78958 15.325 2.00838C15.5437 2.22717 15.6667 2.52391 15.6667 2.83333V19.1667C15.6667 19.4761 15.5437 19.7728 15.325 19.9916C15.1062 20.2104 14.8094 20.3333 14.5 20.3333H2.83333C2.52391 20.3333 2.22717 20.2104 2.00838 19.9916C1.78958 19.7728 1.66667 19.4761 1.66667 19.1667V2.83333ZM18 6.33333C18 5.8692 18.1844 5.42408 18.5126 5.0959C18.8408 4.76771 19.2859 4.58333 19.75 4.58333C20.2141 4.58333 20.6592 4.76771 20.9874 5.0959C21.3156 5.42408 21.5 5.8692 21.5 6.33333V18.1768L19.75 20.8018L18 18.1768V6.33333ZM19.75 5.75C19.5953 5.75 19.4469 5.81146 19.3375 5.92085C19.2281 6.03025 19.1667 6.17862 19.1667 6.33333V7.5H20.3333V6.33333C20.3333 6.17862 20.2719 6.03025 20.1625 5.92085C20.0531 5.81146 19.9047 5.75 19.75 5.75ZM19.75 18.6982L19.1667 17.8232V8.66667H20.3333V17.8232L19.75 18.6982Z" fill="#E16710" />
        </svg>
    )
}

export const WhiteIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8.66699 5.74999C8.66699 5.59528 8.72845 5.44691 8.83785 5.33751C8.94724 5.22811 9.09562 5.16666 9.25033 5.16666H13.917C14.0717 5.16666 14.2201 5.22811 14.3295 5.33751C14.4389 5.44691 14.5003 5.59528 14.5003 5.74999C14.5003 5.9047 14.4389 6.05307 14.3295 6.16247C14.2201 6.27186 14.0717 6.33332 13.917 6.33332H9.25033C9.09562 6.33332 8.94724 6.27186 8.83785 6.16247C8.72845 6.05307 8.66699 5.9047 8.66699 5.74999ZM9.25033 7.49999C9.09562 7.49999 8.94724 7.56145 8.83785 7.67084C8.72845 7.78024 8.66699 7.92861 8.66699 8.08332C8.66699 8.23803 8.72845 8.38641 8.83785 8.4958C8.94724 8.6052 9.09562 8.66666 9.25033 8.66666H13.917C14.0717 8.66666 14.2201 8.6052 14.3295 8.4958C14.4389 8.38641 14.5003 8.23803 14.5003 8.08332C14.5003 7.92861 14.4389 7.78024 14.3295 7.67084C14.2201 7.56145 14.0717 7.49999 13.917 7.49999H9.25033ZM8.66699 13.3333C8.66699 13.1786 8.72845 13.0302 8.83785 12.9208C8.94724 12.8114 9.09562 12.75 9.25033 12.75H13.917C14.0717 12.75 14.2201 12.8114 14.3295 12.9208C14.4389 13.0302 14.5003 13.1786 14.5003 13.3333C14.5003 13.488 14.4389 13.6364 14.3295 13.7458C14.2201 13.8552 14.0717 13.9167 13.917 13.9167H9.25033C9.09562 13.9167 8.94724 13.8552 8.83785 13.7458C8.72845 13.6364 8.66699 13.488 8.66699 13.3333ZM9.25033 15.0833C9.09562 15.0833 8.94724 15.1448 8.83785 15.2542C8.72845 15.3636 8.66699 15.5119 8.66699 15.6667C8.66699 15.8214 8.72845 15.9697 8.83785 16.0791C8.94724 16.1885 9.09562 16.25 9.25033 16.25H13.917C14.0717 16.25 14.2201 16.1885 14.3295 16.0791C14.4389 15.9697 14.5003 15.8214 14.5003 15.6667C14.5003 15.5119 14.4389 15.3636 14.3295 15.2542C14.2201 15.1448 14.0717 15.0833 13.917 15.0833H9.25033Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83301 12.75C2.83301 12.5953 2.89447 12.4469 3.00386 12.3375C3.11326 12.2281 3.26163 12.1667 3.41634 12.1667H6.33301C6.48772 12.1667 6.63609 12.2281 6.74549 12.3375C6.85488 12.4469 6.91634 12.5953 6.91634 12.75V15.6667C6.91634 15.8214 6.85488 15.9698 6.74549 16.0792C6.63609 16.1886 6.48772 16.25 6.33301 16.25H3.41634C3.26163 16.25 3.11326 16.1886 3.00386 16.0792C2.89447 15.9698 2.83301 15.8214 2.83301 15.6667V12.75ZM3.99967 13.3334V15.0834H5.74967V13.3334H3.99967Z" fill="white" />
            <path d="M7.3294 6.16241C7.43566 6.05239 7.49446 5.90504 7.49313 5.75209C7.4918 5.59914 7.43045 5.45284 7.3223 5.34468C7.21414 5.23653 7.06783 5.17518 6.91489 5.17385C6.76194 5.17252 6.61459 5.23132 6.50457 5.33758L4.58365 7.25849L3.8294 6.50424C3.71938 6.39798 3.57203 6.33919 3.41908 6.34052C3.26614 6.34185 3.11983 6.40319 3.01167 6.51135C2.90352 6.6195 2.84217 6.76581 2.84084 6.91876C2.83951 7.07171 2.89831 7.21906 3.00457 7.32908L4.58365 8.90816L7.3294 6.16241Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83333 0.5C2.21449 0.5 1.621 0.745833 1.18342 1.18342C0.745833 1.621 0.5 2.21449 0.5 2.83333V19.1667C0.5 19.7855 0.745833 20.379 1.18342 20.8166C1.621 21.2542 2.21449 21.5 2.83333 21.5H14.5C15.1188 21.5 15.7123 21.2542 16.1499 20.8166C16.5875 20.379 16.8333 19.7855 16.8333 19.1667V2.83333C16.8333 2.21449 16.5875 1.621 16.1499 1.18342C15.7123 0.745833 15.1188 0.5 14.5 0.5H2.83333ZM1.66667 2.83333C1.66667 2.52391 1.78958 2.22717 2.00838 2.00838C2.22717 1.78958 2.52391 1.66667 2.83333 1.66667H14.5C14.8094 1.66667 15.1062 1.78958 15.325 2.00838C15.5437 2.22717 15.6667 2.52391 15.6667 2.83333V19.1667C15.6667 19.4761 15.5437 19.7728 15.325 19.9916C15.1062 20.2104 14.8094 20.3333 14.5 20.3333H2.83333C2.52391 20.3333 2.22717 20.2104 2.00838 19.9916C1.78958 19.7728 1.66667 19.4761 1.66667 19.1667V2.83333ZM18 6.33333C18 5.8692 18.1844 5.42408 18.5126 5.0959C18.8408 4.76771 19.2859 4.58333 19.75 4.58333C20.2141 4.58333 20.6592 4.76771 20.9874 5.0959C21.3156 5.42408 21.5 5.8692 21.5 6.33333V18.1768L19.75 20.8018L18 18.1768V6.33333ZM19.75 5.75C19.5953 5.75 19.4469 5.81146 19.3375 5.92085C19.2281 6.03025 19.1667 6.17862 19.1667 6.33333V7.5H20.3333V6.33333C20.3333 6.17862 20.2719 6.03025 20.1625 5.92085C20.0531 5.81146 19.9047 5.75 19.75 5.75ZM19.75 18.6982L19.1667 17.8232V8.66667H20.3333V17.8232L19.75 18.6982Z" fill="white" />
        </svg>
    )
}

export const State = (path) => {
    const pathName = usePathname();
    const result = pathName.includes(path);
    if (result) {
        return true;
    }
    return false;
}


export default function Parent({ children }) {

    const [show, setShow] = useState(false);
    const router = useRouter();
    const text = State('/air-ticket') ? 'Air Ticket' : State('/ielts') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">IELTS<br />Programme</span> : State('/student-visa') ? <span>Student Visa<br />Services</span> : State('/tourist-visa') ? 'Tourist Visa' : State('/worker-visa') ? <span>Worker Visa<br />Services</span> : State('/family-visa') ? 'Family Visa' : State('/japanese-language') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">Japanese<br />Language</span> : State('/korean-language') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">Korean<br />Language</span> : State('/air-ticket') ? 'AIR TICKET' : State('/language-training') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">Language<br />Training</span> : State('/career-counseling') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">CAREER<br />COUNSELLING</span> : State('/visa-processing') ? <span className="2xl:leading-[60px] xl:leading-[60px] leading-[20px]">Visa<br />Processing</span> : '';

    return (
        <div className='relative min-h-screen'>
            <div
                className={`antialiased ${serif.className}`}
            >
                <ServiceBanner text={text} />
                <div className='max-w-[1440px] mx-auto relative 2xl:px-11 xl:px-11 2xl:py-16 xl:py-16 p-6'>
                    <div className='absolute right-0 left-0 top-0 bottom-0 -z-10'>
                        <video
                            className='w-full h-full object-cover opacity-30'
                            autoPlay
                            loop
                            muted
                            playsInline>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="tabs grid 2xl:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr] grid-cols-1 items-start gap-10">
                        <div className='2xl:order-1 xl:order-1 order-2'>
                            <ul className='space-y-4'>
                                {
                                    links.map((link, i) => {
                                        return (
                                            <li key={i} onClick={() => {
                                                if (link.subArray.length <= 0) {
                                                    router.push(`${link.href}`)
                                                }
                                                setShow(true)
                                            }} className={`dropdown 2xl:dropdown-right xl:dropdown-right dropdown-bottom w-full left-0`}>
                                                <div tabIndex={0} role="button"
                                                    className={`rounded-xl p-6 ${State(link.href) ? 'bg-orange text-white' : 'bg-white text-black'} flex items-center justify-between`} style={{
                                                        boxShadow: "0px 0px 8px 4px rgba(0, 0, 0, 0.05)"
                                                    }}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        {State(link.href) ? <WhiteIcon /> : <Icon />}
                                                        <span className='2xl:text-2xl xl:text-xl font-medium'>{link.name}</span>
                                                    </div>
                                                    {
                                                        link?.subArray?.length > 0 &&
                                                        (
                                                            State(link.href)
                                                                ?
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M7.98877 3.49981C7.85792 3.63375 7.78467 3.81356 7.78467 4.00081C7.78467 4.18805 7.85792 4.36787 7.98877 4.50181L15.2983 12.0003L7.98877 19.4973C7.85792 19.6312 7.78467 19.8111 7.78467 19.9983C7.78467 20.1856 7.85792 20.3654 7.98877 20.4993C8.05236 20.5646 8.12839 20.6165 8.21238 20.652C8.29637 20.6874 8.38661 20.7057 8.47777 20.7057C8.56893 20.7057 8.65916 20.6874 8.74315 20.652C8.82714 20.6165 8.90317 20.5646 8.96677 20.4993L16.7398 12.5238C16.8763 12.3837 16.9527 12.1959 16.9527 12.0003C16.9527 11.8047 16.8763 11.6169 16.7398 11.4768L8.96677 3.50131C8.90317 3.43599 8.82714 3.38408 8.74315 3.34863C8.65916 3.31318 8.56893 3.29492 8.47777 3.29492C8.38661 3.29492 8.29637 3.31318 8.21238 3.34863C8.12839 3.38408 8.05236 3.43599 7.98877 3.50131V3.49981Z" fill="white" />
                                                                </svg> :
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                    <path d="M7.98925 3.4995C7.85841 3.63344 7.78516 3.81326 7.78516 4.0005C7.78516 4.18775 7.85841 4.36756 7.98925 4.5015L15.2988 12L7.98925 19.497C7.85841 19.6309 7.78516 19.8108 7.78516 19.998C7.78516 20.1852 7.85841 20.3651 7.98925 20.499C8.05285 20.5643 8.12888 20.6162 8.21287 20.6517C8.29686 20.6871 8.38709 20.7054 8.47825 20.7054C8.56941 20.7054 8.65965 20.6871 8.74364 20.6517C8.82763 20.6162 8.90366 20.5643 8.96725 20.499L16.7403 12.5235C16.8768 12.3834 16.9532 12.1956 16.9532 12C16.9532 11.8044 16.8768 11.6166 16.7403 11.4765L8.96725 3.501C8.90366 3.43569 8.82763 3.38377 8.74364 3.34833C8.65965 3.31288 8.56941 3.29462 8.47825 3.29462C8.38709 3.29462 8.29686 3.31288 8.21287 3.34833C8.12888 3.38377 8.05285 3.43569 7.98925 3.501V3.4995Z" fill="#919191" />
                                                                </svg>
                                                        )
                                                    }
                                                </div>
                                                {
                                                    link?.subArray?.length > 0 &&
                                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-full z-[1] py-6 shadow-2xl ml-4">
                                                        {
                                                            link?.subArray.map((item, i) => {
                                                                return (
                                                                    <Link key={i} href={item.href}>
                                                                        <li className='text-xl font-normal cursor-pointer hover:bg-gray px-8 py-2 rounded-lg transition-all duration-200 ease-in' key={i}>
                                                                            {item.name}
                                                                        </li>
                                                                    </Link>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <Image className='mt-10 max-h-[500px]' src={image} alt='' />
                        </div>
                        <div className='2xl:order-2 xl:order-2 order-1'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
