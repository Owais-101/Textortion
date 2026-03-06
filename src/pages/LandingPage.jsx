import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { Demo, Marquee } from '@/components/ui/marquee'

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
                <Demo />
        </>
    )
}

export default LandingPage