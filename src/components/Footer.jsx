import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <div className='w-full border-t border-muted py-5 px-9 lg:px-15 items-center'>

            <div className='flex items-center gap-2 mt-5 text-lg md:text-xl'>
                <span className='text-lime'>✦</span>
                <h1 className='font-heading font-bold text-white'>Textortion</h1>
            </div>

            <div className='text-muted flex flex-col gap-4 mt-6'>
                <Link className='hover:text-offwhite transition-colors' to="/">Home</Link>
                <Link className='hover:text-offwhite transition-colors' to="/animations">Animations</Link>
                <Link className='hover:text-offwhite transition-colors' to="/faqs">FAQs</Link>
                <Link className='hover:text-offwhite transition-colors' to="/docs">Docs</Link>
            </div>

        </div>
    )
}

export default Footer