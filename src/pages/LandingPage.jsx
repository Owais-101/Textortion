import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { Demo, Marquee } from '@/components/ui/marquee'
import BentoGrid from '@/components/BentoGrid'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

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

                <BentoGrid />

                <HowItWorks />

                <Pricing />

                <div className='mt-10'>
                    <Footer />
                </div>

            </div>


        </>
    )
}

export default LandingPage