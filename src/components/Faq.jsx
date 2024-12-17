import FaTelegram from '@/icons/FaTelegram';
import Image from 'next/image';
import React from 'react';
import image3 from '@/../public/assets/image (3).png'
import TextAnimation from '@/shared/TextAnimation';
import { serif } from '@/shared/Serif';
import FaqInput from './FaqInput';
const Faq = () => {
    return (
        <div className="2xl:px-10 xl:px-10 px-6 max-w-[1440px] mx-auto flex gap-2 2xl:my-36 xl:my-38 my-20">
            <Image className="max-h-[550px] object-contain 2xl:block xl:block hidden" src={image3} alt="" />
            <div className="flex-1">
                <div>
                    <div className="flex items-center gap-2">
                        <FaTelegram />
                        <h2>
                            <TextAnimation className={`${serif.className} 2xl:text-2xl xl:text-xl text-lg`}>
                                Questions and Answers
                            </TextAnimation></h2>
                    </div>
                    <h1>
                        <TextAnimation className={`${serif.className} 2xl:text-5xl xl:text-5xl text-2xl mt-2`}>
                            Frequently Asked Questions
                        </TextAnimation>
                    </h1>
                    <div className="mt-10 space-y-2 h-auto">
                        <FaqInput index={'1'} ques={'Q1. What language can I learn at UICC?'} ans={'Now we offer courses In IELTS,Japanese,Korean and coming soon German and Chinese.'} />
                        <FaqInput index={'2'} ques={'Q2. Where is UICC located?'} ans={'UICC is located in BNS Center(Level-10),Sector-07,Uttara,Dhaka.'} />
                        <FaqInput index={'3'} ques={'Q3.What makes UICC unique compared to other language institutes?'} ans={'We provide certified trainers,flexible class schedules,digital classrooms and customized learning plans for students.'} />
                        <FaqInput index={'4'} ques={'Q4.Do you offer online classes?'} ans={' Yes,we offer both in-person and online learning options.'} />
                        <FaqInput index={'5'} ques={'Q5.What levels of language courses do you offer?'} ans={'We provide beginner,intermediate and advanced levels.'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
