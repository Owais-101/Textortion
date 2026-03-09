import Search from '@/components/animationPage/Search'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { animations } from '@/data/animationsData';
import Button from '@/components/Button';

const Animations = () => {

    const [selected, setSelected] = useState(animations[0].id);
    const [replayKey, setReplayKey] = useState(1)
    const Animation = animations.find(item => item.id === selected)?.animation;

    // Animation replay function
    const replay = () => {
        setReplayKey(prev => prev + 1);
    }

    return (
        <div className='w-full h-screen flex flex-col'>
            <div className='border-b border-lime'>
                <Navbar />
            </div>
            <div className=' max-md:flex-col lg:flex   h-screen'>
                {/* left side */}
                <div className={`h-87.5 lg:h-screen lg:w-[20%] flex flex-col items-center border-b lg:border-r lg:border-r-lime py-5 px-3 overflow-auto`} >
                    <div className='mb-10'>
                        <Search />
                    </div>

                    {animations.map((item, i) => (
                        <div
                            onClick={() => { setSelected(item.id); }}
                            key={i}
                            className={`border ${selected === item.id ? `border-lime` : `border-muted`} w-full rounded-lg mt-3 flex flex-col gap-3 justify-center px-5 py-4 cursor-pointer hover:border-lime transition-colors`} >

                            <div className='flex justify-between'>
                                <h2 className='font-heading text-offwhite lg:text-lg'>{item.name}</h2>
                                <span className='px-2 uppercase rounded-md text-lime bg-lime/20 text-[9px] flex items-center justify-center'>{item.tag}</span>
                            </div>

                            <p className='font-body text-muted lg:text-sm'>{item.desc}</p>

                        </div>
                    ))}

                </div>

                {/* Middle (ANIMATION) side*/}
                <div className=' relative w-full lg:w-[40%] flex justify-center border-t border-lime lg:border-r lg:border-lime px-5 py-10 '>

                    <div className='absolute top-5 left-5'>
                        <Button onClick={replay} text="Replay" />
                    </div>

                    <div className='font-heading font-bold mt-10 text-4xl md:text-6xl lg:text-7xl '>
                        <Animation key={`${selected}-${replayKey}`} text='Hello G' />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Animations