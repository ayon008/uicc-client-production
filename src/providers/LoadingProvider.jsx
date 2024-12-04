'use client';

import Footer from '@/shared/Footer';
import Navbar from '@/shared/Navbar';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/Loader';

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
        <div className='min-h-screen w-full'>
            {/* <Navbar /> */}
            <div className="bg-[#EEEFF1]">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default LoadingProvider;