'use client'
import React from 'react';
import Marquee from "react-fast-marquee";

const Notice = () => {
    return (
        <div className='notice-main flex items-center'>
            <div className=''>
                <h2 className='notice p-6 w-fit relative 2xl:text-3xl xl:text-2xl text-xl font-semibold text-white z-10'>NOTICE</h2>
            </div>
            <Marquee autoFill>
                <p className='text-white mx-10'>This is Notice</p>
            </Marquee>
        </div>
    );
};

export default Notice;