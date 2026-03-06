import React, { useState } from 'react'
import Button from './Button'
import { AnimatePresence, motion } from 'motion/react';

const CodeCard = ({ filename, code }) => {

    const [message, setMessage] = useState(false);

    return (
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

            <div className='font-body mb-5 relative'>
                <p className='text-offwhite'>
                    <span className='text-lime'>import</span> motion <span className='text-lime'>from</span> <span className='text-hotpink'>framer-motion</span></p>
            </div>

            {/* Code */}
            <pre className="font-mono text-xs lg:text-base leading-loose text-white whitespace-pre-wrap">
                {code}
            </pre>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#181818]">
                <span className=" text-xs md:[14px] text-offwhite tracking-widest">REACT + FRAMER MOTION</span>

                <AnimatePresence>
                    {message
                        ? <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className='absolute right-20 top-125 text-offwhite hidden lg:flex'>
                            <h1 className='font-body text-[14px] tracking-tight'>Go to animations page to copy</h1>
                        </motion.div>
                        : ""}
                </AnimatePresence>

                <div
                    onMouseEnter={() => setMessage(prev => !prev)}
                    onMouseLeave={() => setMessage(prev => !prev)}

                >
                    <Button text={"⎘ COPY"} />
                </div>
            </div>
        </div>

    )
}

export default CodeCard