import React from 'react';
import { FaCheck } from "react-icons/fa";
import { motion } from 'motion/react';


const Pricing = () => {

    const perks = [
        {
            icon: FaCheck,
            desc: "10+ animation styles"
        },
        {
            icon: FaCheck,
            desc: "Unlimited copy-paste"
        },
        {
            icon: FaCheck,
            desc: "React + Framer Motion output"
        },
        {
            icon: FaCheck,
            desc: "Live preview"
        },
        {
            icon: FaCheck,
            desc: "One-click copy"
        },
        {
            icon: FaCheck,
            desc: "Custom colors, ease and duration"
        },
    ]

    return (
        <div className='w-full my-40 px-5'>

            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-white'>Simple Pricing</h1>
                <p className='font-body text-lime/70 '>matter of fact</p>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-white'>No Pricing.</h1>
            </motion.div>

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className=' w-full md:w-[55%] lg:w-[30%] border border-muted rounded-xl mx-auto mt-10 px-8z py-10 lg:px-10 lg:py-14 bg-linear-to-br from-lime-500 from-0% via-pink-500 via-100%' >
                <p className='text-muted uppercase font-heading'>Free</p>
                <h1 className='text-offwhite font-heading font-extrabold text-5xl lg:text-7xl my-3'><span className='align-super font-heading font-extrabold text-muted text-base' >₹</span>0<span className='align-sub font-heading font-extrabold text-muted text-base'>/mo</span> </h1>
                <p className='text-muted font-heading mb-5'>Free forever, no catches.</p>

                {perks.map((perk, i) => {
                    const Icon = perk.icon
                    return (
                        <div key={i} className='flex items-center gap-3 mt-2 ' >
                            <span className='text-lime text-xs'>{<Icon />}</span>
                            <p className=' text-lg lg:text-xl font-heading text-offwhite'>{perk.desc}</p>
                        </div>
                    )
                })}

            </motion.div>

        </div>
    )
}

export default Pricing