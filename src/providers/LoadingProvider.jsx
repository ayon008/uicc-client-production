'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Loading component
const DynamicLoading = dynamic(() => import('@/components/Loader'), {
    ssr: false // Disable server-side rendering for this component
});
import { serif } from '@/shared/Serif';
import Navbar from '@/shared/NavBar';
import Footer from '@/shared/Footer';

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://uicc-server.vercel.app/visitor', {
            method: 'POST', // Use uppercase for the method
            headers: { // Specify headers explicitly
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ visitorCount: 1 }) // Stringify the body for JSON
        })
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <DynamicLoading />;
    }

    return (
        <div className={`min-h-screen w-full ${serif.className}`}>
            <Navbar />
            <div className="relative">
                <div className='absolute inset-0 -z-20 bg-[#EEEFF1]'></div>
                <div className="">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoadingProvider;