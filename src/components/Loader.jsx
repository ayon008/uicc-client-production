'use client'

import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import groovyWalkAnimation from '../../public/Animation - 1731864356526.json';

const Loading = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // This will run only on the client side
    }, []);

    if (!isClient) {
        return null; // Prevent rendering on the server
    }

    return (
        <div className='2xl:mt-[100px] xl:mt-[100px]'>
            <div className='w-full h-screen flex flex-col 2xl:pt-0 xl:pt-0 pt-[50px]'>
                <div className='flex items-center justify-center my-auto'>
                    <Lottie animationData={groovyWalkAnimation} className='w-[300px] h-auto' loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Loading;
