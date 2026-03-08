import Search from '@/components/animationPage/Search'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { animations } from '@/data/animationsData';

const Animations = () => {

    const [selected, isSelected] = useState(animations[0].id);

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='border-b border-lime'>
                <Navbar />
            </div>
            {/* left side */}
            <div className={`h-87.5 lg:h-screen lg:w-[15%] flex flex-col items-center border-b lg:border-r lg:border-r-lime py-5 px-3 overflow-auto`} >
                <div className='mb-10'>
                    <Search />
                </div>

                {animations.map((animation, i) => (
                    <div
                        onClick={() => { isSelected(animation.id) }}
                        key={i} className={`border ${selected === animation.id ? `border-lime` : `border-muted`} w-full rounded-lg mt-3 flex flex-col gap-3 justify-center px-5 py-4 cursor-pointer hover:border-lime transition-colors`} >

                        <div className='flex justify-between'>
                            <h2 className='font-heading text-offwhite lg:text-lg'>{animation.name}</h2>
                            <span className='px-2 uppercase rounded-md text-lime bg-lime/20 text-[9px] flex items-center justify-center'>{animation.tag}</span>
                        </div>

                        <p className='font-body text-muted lg:text-sm'>{animation.desc}</p>

                    </div>
                ))}

            </div>
        </div >
    )
}

export default Animations