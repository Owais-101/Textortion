import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='w-full border-t border-muted py-6 lg:py-10 px-9 lg:px-15 '>

            <div className='flex items-center justify-center gap-2 mt-5 text-lg md:text-xl'>
                <span className='text-lime'>✦</span>
                <h1 className='font-heading font-bold text-white text-2xl lg:text-4xl'>Textortion</h1>
            </div>

            <div className='text-muted flex justify-center gap-4 mt-6'>
                <Link className='hover:text-offwhite transition-colors text-lg' to="/">Home</Link>
                <Link className='hover:text-offwhite transition-colors text-lg' to="/animations">Animations</Link>
                <Link className='hover:text-offwhite transition-colors text-lg' to="/faqs">FAQ</Link>
                <Link className='hover:text-offwhite transition-colors text-lg' to="/docs">Docs</Link>
            </div>

        </div>
    )
}

export default Footer