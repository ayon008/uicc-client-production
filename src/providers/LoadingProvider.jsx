'use client';

import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loader';
import { serif } from '@/shared/Serif';

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
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