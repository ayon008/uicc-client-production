'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedImage({ src, alt, className, delay = 0.5 }) {
    const MotionImage = motion(Image);
    return (
        <MotionImage
            src={src} // Path to your image
            alt={alt} // Alternative text for accessibility
            initial={{
                clipPath: 'inset(0 100% 0 0)', // Start off-screen to the right
                x: -30, // Slight offset for slide-in effect
                opacity: 1, // Start fully invisible
            }}
            animate={{
                clipPath: 'inset(0 0% 0 0)', // Fully reveal the image
                x: 0, // Slide into position
                opacity: 1, // Fade in smoothly
            }}
            transition={{
                type: '', // Change to tween for explicit duration
                duration: 2, // Duration in seconds
                ease: [0.25, 0.8, 0.25, 1], // Smooth cubic-bezier curve
                delay, // Custom delay with a default value of 0.5 seconds
            }}
            className={className}
            height={600} // Fixed height
        />
    );
}
