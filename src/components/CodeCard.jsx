import React from 'react'
import Button from './Button'

const CodeCard = ({ filename, code }) => (
    <div className="bg-[#080808] border text-xs md:text-base border-[#1a1a1a] rounded-xl p-6 w-[90%] md:w-[80%] font-heading code-card-shadow">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#181818]">
            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className=" text-offwhite tracking-widest">{filename}</span>
            <span className=" text-lime">React</span>
        </div>

        <div className='font-body mb-5'>
            <p className='text-offwhite'>
                <span className='text-lime'>import</span> motion <span className='text-lime'>from</span> <span className='text-hotpink'>framer-motion</span></p>
        </div>

        {/* Code */}
        <pre className="font-mono text-xs lg:text-base leading-loose text-white whitespace-pre-wrap">
            {code}
        </pre>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#181818]">
            <span className=" text-xs md:text-base text-offwhite tracking-widest">REACT + FRAMER MOTION</span>
            <Button text={"⎘ COPY"} />
        </div>
    </div>
)

export default CodeCard