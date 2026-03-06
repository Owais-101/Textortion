import React from 'react';
import PulsatingDot from './PulsatingDot';
import { motion } from 'motion/react';

const HeroSection = () => {

    const boringVariantOne = {
        hidden: {
            opacity: 1,
            y: 1
        },
        visible: {
            opacity: 1,
            y: [0, 1, 0],
            transition: {
                delay: 0.3,
                repeat:Infinity
            }
        }
    }

    return (
        <div className=' h-96 grid grid-cols-1 lg:grid-cols-[60%_40%]'>
            {/* left side */}
            <div className='h-full px-10 lg:px-20 py-5'>

                <div className='px-3 py-2 border border-muted w-fit flex items-center gap-2 text-offwhite font-body text-xs lg:text-sm uppercase max-lg:mx-auto mb-10'>
                    <PulsatingDot />
                    <p>Now Live with 20+ Animation Styles.</p>
                </div>

                <div className='max-lg:flex justify-center flex-col items-center'>
                    {"Stop writing boring headings".split(" ").map((word, i) => (
                        <motion.h1
                            key={i}
                            variants={i === 2 ? boringVariantOne : undefined}
                            initial={i === 2 ? "hidden" : false}
                            animate={i === 2 ? "visible" : false}
                            className={` text-4xl md:text-6xl lg:text-8xl font-extrabold font-heading ${i === 2 ? `text-lime` : `text-white`}`} >{word}</motion.h1>
                    ))}
                </div>

            </div>


            {/* right side */}
            <div className='bg-gray-300 h-full'>

            </div>

        </div>
    )
}

export default HeroSection