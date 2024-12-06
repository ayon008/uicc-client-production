import SectionTitle from '@/shared/SectionTitles';
import React from 'react';
import NewsCard from './NewsCard';
import img3 from '../../public/assets/carlos-_nnhAjZpVC4-unsplash.jpg'
import img4 from '../../public/assets/saung-digital-OosjBGZ-aRM-unsplash.jpg'
import img5 from '../../public/assets/conner-ching-0U1rWYHF0tg-unsplash.jpg'
import img1 from '../../public/assets/image (4).png'

const NewsPortal = () => {
    return (
        <div className="2xl:mb-32 xl:mb-24 mb-16 py-20">
            <SectionTitle subHeading={'Latest News'} heading1={'Our Latest News'} />
            <div className="px-6 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-2 gap-y-2 mt-10">
                <NewsCard img={img3} text={'Learn Korean with Confidence UICC has launched a new Korean Language Course tailored for K-pop fans, professionals, and aspiring students aiming to work or study in Korea. Enroll today to explore the culture and language of Korea! Master Japanese in 90 Days We are excited to announce an intensive Japanese Language Crash Course for those planning to take the JLPT exam or pursue careers in Japan.'} heading={'New Course Launches'} />
                <NewsCard img={img4} heading={'Success Stories: IELTS Achievers'} text={'Congratulations to our students who scored Band 7+ in their recent IELTS exams! Your hard work and determination have made us proud.JLPT Exam Success! Our Japanese Language students have successfully passed their JLPT exams, opening doors to exciting opportunities in Japan.'} />
                <NewsCard img={img1} heading={'Discounts and Offers'} text={'Special Offer: Early Bird Discounts! Enroll in any language course before 2025 and enjoy a 10% discount. Grab this opportunity now! Group Enrollment Benefits! Bring your friends and family to learn together! Enjoy up to 15% off on group registrations for any language program.'} />
                <NewsCard img={img5} text={'Visa and Job Opportunities in Japan and Korea UICC now provides career counseling sessions for students looking to secure jobs in Japan and Korea after completing their language training. IELTS for Study Abroad Success Our recent batch of IELTS students successfully secured scholarships and admissions to universities in the UK, Canada, and Australia.'} />
            </div>
        </div>
    );
};

export default NewsPortal;