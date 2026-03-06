import React, { useState } from 'react'
import Button from './Button'
import { motion, AnimatePresence } from "framer-motion";



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links = ["Features", "Animations", "Pricing", "Docs"];

    return (
        // Laptop / Tablet Navbar
        <>
            <div className='w-full h-20 hidden md:flex items-center justify-between md:px-10 lg:px-20' >

                <div className='flex items-center gap-2'>
                    <span className='text-lime text-2xl' >✦</span>
                    <h1 className='font-heading font-bold md:text-xl lg:text-3xl text-white' >Textortion</h1>
                </div>

                <div className='flex items-center gap-10'>
                    {links.map((link, i) => (
                        <a key={i} className='font-body text-muted hover:text-offwhite transition-colors uppercase md:text-sm lg:text-lg' href="#">{link}</a>
                    ))}
                </div>

                <Button text="Try Free" />

            </div>

            {/* Mobile Only Navbar */}
            <div className='flex md:hidden items-center px-5'>

                <div className='flex items-center gap-2 mt-5'>
                    <span className='text-lime text-2xl' >✦</span>
                    <h1 className='font-heading font-bold text-2xl lg:text-3xl text-white' >Textortion</h1>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden ml-auto z-200 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Menu"
                >
                    <motion.span
                        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        className={`block w-6 h-0.5 ${open ? `bg-background` : `bg-lime`} origin-center`}
                    />
                    <motion.span
                        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                        className="block w-6 h-0.5 bg-lime"
                    />
                    <motion.span
                        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        className={`block w-6 h-0.5 ${open ? `bg-background` : `bg-lime`} origin-center`}
                    />
                </button>

                {/* Overlay Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
                            animate={{ clipPath: "circle(150% at calc(100% - 44px) 44px)" }}
                            exit={{ clipPath: "circle(0% at calc(100% - 44px) 44px)" }}
                            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                            className="lg:hidden fixed inset-0 z-190 bg-lime flex flex-col justify-center items-center gap-2"
                        >
                            {links.map((link, i) => (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                    className="font-heading font-black text-3xl text-background hover:text-lime transition-colors duration-200 tracking-tight"
                                >
                                    {link}
                                </motion.a>
                            ))}

                            {/* CTA */}
                            {/* <motion.button
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.6, duration: 0.4 }}
                                className="mt-8 bg-lime text-black font-heading font-black text-sm px-8 py-3 rounded-full tracking-wide"
                            >
                                
                            </motion.button> */}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>


        </>
    )
}

export default Navbar