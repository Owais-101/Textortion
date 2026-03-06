import React, { useEffect, useState } from 'react';
import PulsatingDot from './PulsatingDot';
import { motion } from 'motion/react';
import BoringText from './BoringText';

const HeroSection = () => {


    return (
        <div className=' h-96 grid grid-cols-1 lg:grid-cols-[60%_40%]'>
            {/* left side */}
            <div className='h-full px-10 lg:px-20 py-5'>

                <div className='px-3 py-2 border border-muted w-fit flex items-center gap-2 text-offwhite font-body text-xs lg:text-sm uppercase max-lg:mx-auto mb-10'>
                    <PulsatingDot />
                    <p>Now Live with 10+ Animation Styles.</p>
                </div>


                <div className='max-lg:flex justify-center flex-col items-center'>
                    <BoringText />
                </div>

                <div className='font-body text-offwhite text-xs md:text-base mt-10 text-center lg:text-start'>
                    <p>Textortion gives you <span className='text-hotpink'>10+ animated text effects.</span> <br /> Copy the React component. Paste. Done </p>
                </div>

            </div>


            {/* right side */}
            <div className='bg-gray-300 h-full'>

            </div>

        </div>
    )
}

export default HeroSection