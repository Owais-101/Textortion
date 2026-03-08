import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { Demo, Marquee } from '@/components/ui/marquee'
import BentoGrid from '@/components/BentoGrid'
import Test from '@/components/Test'

const LandingPage = () => {
    return (
        <>
            <div className='relative w-full min-h-screen container mx-auto'>

                <div className='fixed inset-0 -z-10 hero-grid ' />

                <div className='mb-10'>
                    <Navbar />
                </div>

                <HeroSection />
            </div>
            {/* Marquee */}
            <Demo />

            <div className='w-full min-h-screen container mx-auto'>
                <h2 className='text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-white' >Everything you need. <br /> <span>Nothing you don't.</span> </h2>
                <p className=' mt-1 text-lg lg:text-xl font-body text-muted mb-10' >Every animation crafted for one thing - making your hero section impossible to ignore.</p>
                <BentoGrid />
                <Test />
            </div>
        </>
    )
}

export default LandingPage