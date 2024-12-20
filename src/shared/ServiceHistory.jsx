'use client'
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ServiceHistory = ({ count }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the element is visible
    });
    return (
        <div className="z-50 count">
            <div className={`h-[180px] 2xl:px-28 xl:px-20 px-10 2xl:gap-0 xl:gap-0 gap-6 grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 ${count}`}>
                <div className='my-auto'>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={40} end={95} duration={8} separator="," suffix='%' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg text-xs">Success Rate</p>
                </div>
                <div className='my-auto'>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={0} end={6} duration={8} separator="," suffix='K' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg text-xs">Trusted Clients</p>
                </div>
                <div className='my-auto'>
                    <h1 ref={ref} className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={4} end={10} duration={8} separator="," suffix='+' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg text-xs">Countries</p>
                </div>
                <div className='my-auto'>
                    <h1 className="text-white text-center 2xl:text-5xl xl:text-4xl font-semibold">
                        {
                            inView &&
                            <CountUp start={20} end={50} duration={8} separator="," suffix='+' />
                        }
                    </h1>
                    <p className="text-white text-center mt-1 2xl:text-2xl xl:text-lg text-xs">Partner universities</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceHistory;