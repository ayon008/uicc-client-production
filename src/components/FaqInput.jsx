'use client'
import React from 'react';
import { motion } from 'framer-motion'

const FaqInput = ({ ques, ans, index }) => {
    console.log(index);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 1.2, ease: [0.25, 0.8, 0.25, 1], delay: 0.05, damping: 25, stiffness: 100, }}
            style={{
                boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)"
            }} className="collapse rounded-2xl bg-[#FFF] h-fit">
            <input type="radio" id={`${index}`} className="hidden" />
            <label htmlFor={`${index}`} className="collapse-title cursor-pointer faq 2xl:text-[22px] xl:text-lg text-sm font-semibold flex items-center p-6 justify-between">
                {ques}
                <span className="icon-container ml-5">
                    <svg className="icons icon-plus hover:bg-white" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <g clip-path="url(#clip0_2038_1641)">
                            <path d="M12.0002 18C11.6024 18 11.2208 17.842 10.9395 17.5607C10.6582 17.2794 10.5002 16.8978 10.5002 16.5V4.62L6.56018 8.56C6.27583 8.82496 5.89974 8.9692 5.51114 8.96235C5.12253 8.95549 4.75176 8.79807 4.47694 8.52324C4.20211 8.24842 4.04468 7.87765 4.03783 7.48904C4.03097 7.10044 4.17522 6.72435 4.44018 6.44L10.9402 -0.0600016C11.2214 -0.340903 11.6027 -0.498682 12.0002 -0.498682C12.3977 -0.498682 12.7789 -0.340903 13.0602 -0.0600016L19.5602 6.44C19.7076 6.57732 19.8258 6.74292 19.9077 6.92692C19.9897 7.11092 20.0338 7.30955 20.0374 7.51095C20.0409 7.71236 20.0039 7.91242 19.9284 8.09919C19.853 8.28597 19.7407 8.45564 19.5983 8.59808C19.4558 8.74051 19.2862 8.8528 19.0994 8.92824C18.9126 9.00369 18.7125 9.04074 18.5111 9.03718C18.3097 9.03363 18.1111 8.98954 17.9271 8.90756C17.7431 8.82558 17.5775 8.70737 17.4402 8.56L13.5002 4.62V16.5C13.5002 16.8978 13.3421 17.2794 13.0608 17.5607C12.7795 17.842 12.398 18 12.0002 18Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2038_1641">
                                <rect width="24" height="18" fill="white" transform="matrix(-1 0 0 -1 24 18)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg className="icons icon-minus hidden hover:bg-white" xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                        <g clip-path="url(#clip0_2038_958)">
                            <path d="M11.9998 0C12.3976 0 12.7792 0.158035 13.0605 0.43934C13.3418 0.720644 13.4998 1.10218 13.4998 1.5V13.38L17.4398 9.44C17.7242 9.17504 18.1003 9.03079 18.4889 9.03765C18.8775 9.04451 19.2482 9.20193 19.5231 9.47676C19.7979 9.75158 19.9553 10.1224 19.9622 10.511C19.969 10.8996 19.8248 11.2757 19.5598 11.56L13.0598 18.06C12.7786 18.3409 12.3973 18.4987 11.9998 18.4987C11.6023 18.4987 11.2211 18.3409 10.9398 18.06L4.43982 11.56C4.29245 11.4227 4.17424 11.2571 4.09226 11.0731C4.01027 10.8891 3.96619 10.6905 3.96264 10.489C3.95908 10.2876 3.99613 10.0876 4.07157 9.9008C4.14702 9.71403 4.2593 9.54436 4.40174 9.40192C4.54418 9.25949 4.71385 9.1472 4.90062 9.07175C5.0874 8.99631 5.28746 8.95926 5.48886 8.96282C5.69027 8.96637 5.8889 9.01045 6.0729 9.09244C6.25689 9.17442 6.42249 9.29263 6.55982 9.44L10.4998 13.38V1.5C10.4998 1.10218 10.6579 0.720644 10.9392 0.43934C11.2205 0.158035 11.602 0 11.9998 0Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2038_958">
                                <rect width="24" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
            </label>
            <div className="collapse-content p-0 border-t-[1px] border-t-[#D9D9D9]">
                <div className="p-6">
                    <p className="w-[92%] mx-auto 2xl:text-base xl:text-base text-sm">
                        {ans}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default FaqInput;
