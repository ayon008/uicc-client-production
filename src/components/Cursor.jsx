'use client'
import React, { useEffect } from 'react';

const Cursor = () => {


    useEffect(() => {
        const cursorDot = document.querySelector('[data-cursor-dot]');
        const cursorOutline = document.querySelector('[data-cursor-outline]');
        window.addEventListener('mousemove', function (e) {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = posX + 'px';
            cursorDot.style.top = posY + 'px';
            cursorOutline.animate({
                left: posX + 'px',
                top: posY + 'px',
            }, { duration: 500, fill: 'forwards' })
        })
    }, [])

    return (
        <div className='2xl:block xl:block hidden'>
            <div data-cursor-dot className='w-[5px] h-[5px] fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-[300] pointer-events-none bg-black'></div>
            <div data-cursor-outline className='w-[30px] h-[30px] fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 rounded-[50%] z-[300] pointer-events-none' style={{ border: '2px solid black' }}></div>
        </div>
    );
};

export default Cursor;