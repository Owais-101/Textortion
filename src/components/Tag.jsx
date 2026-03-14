import React from 'react'

const Tag = ({tag}) => {
    return (
        <div className='flex items-center gap-2 uppercase text-muted font-heading font-bold' >
            <div className=' h-0.5 w-4 lg:w-6 lg:h-1 bg-lime rounded-full'></div>
            <h2 className='text-xs lg:text-base'>{tag}</h2>
        </div>
    )
}

export default Tag