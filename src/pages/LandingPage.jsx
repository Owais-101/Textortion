import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const LandingPage = () => {
    return (
        <div className='relative w-full min-h-screen'>

            <div className='fixed inset-0 -z-10 hero-grid ' />

            <div className='mb-10'>
                <Navbar />
            </div>

            <HeroSection />

        </div>
    )
}

export default LandingPage