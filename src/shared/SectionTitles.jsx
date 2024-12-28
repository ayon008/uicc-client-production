import FaTelegram from '@/icons/FaTelegram';
import React from 'react';
import TextAnimation from './TextAnimation';
import { serif } from './Serif';


const SectionTitle = ({ subHeading, heading1, heading2, width }) => {
    return (
        <div>
            <div className="flex items-center justify-center gap-2">
                <FaTelegram />
                <h2 className="">
                    <TextAnimation repeat={true} className={'text-[#27437F] 2xl:text-2xl xl:text-xl font-semibold'}>
                        {subHeading}
                    </TextAnimation>
                </h2>
            </div>
            <div>
                <div className={`flex items-center justify-center gap-2`}>
                    <h2 className="">
                        <TextAnimation repeat={true} delay={0.3} className={`2xl:text-5xl xl:text-5xl text-2xl mt-2 text-center mx-auto ${serif.className}`}>
                            {heading1}
                        </TextAnimation>
                    </h2>
                </div>
                <div className={`flex items-center justify-center gap-2`}>
                    <h2 className="">
                        <TextAnimation repeat={true} delay={0} className={`2xl:text-5xl xl:text-5xl text-2xl mt-2 text-center mx-auto ${serif.className}`}>
                            {heading2}
                        </TextAnimation>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;