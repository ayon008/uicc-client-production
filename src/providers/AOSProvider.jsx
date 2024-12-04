'use client'
import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const AOSProvider = ({ children }) => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000, // Animation duration in milliseconds
    //         easing: 'linear', // Easing function
    //         once: false,
    //         mirror: true
    //     });
    // }, []);
    return (
        <div>
            {children}
        </div>
    );
};

export default AOSProvider;