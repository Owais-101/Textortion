import React from 'react';
import { motion } from 'motion/react';
import Tag from './Tag';

const HowItWorks = () => {

    const steps = [
        {
            step: "01",
            stepHeading: "Type your heading text",
            stepDesc: "Enter the text you want to animate. Any heading, any length. The live preview updates in real time as you type."

        },
        {
            step: "02",
            stepHeading: "Pick an animation style",
            stepDesc: "Browse 10+ styles. Click one to preview it on your exact text. Adjust speed, size, and properties before committing."

        },
        {
            step: "03",
            stepHeading: "Copy the React component",
            stepDesc: "Hit copy. A clean, complete React + Framer Motion / Motion component is in your clipboard. Paste it and ship."

        },
    ]

    return (
        <div className='w-full my-40 px-5 group'>

            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
                <Tag tag={"how it works"} />
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-heading font-extrabold text-offwhite flex items-center' >Three Steps. That's It</h1>
                <p className=' mt-1 text-base lg:text-xl font-body text-muted mb-10'>Open, pick, paste thats it. (refer to docs for more detailed overview)</p>

            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ' >

                {steps.map((step, i) => (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: i * 0.2,
                        }}
                        viewport={{ once: true, amount: 0.3 }}

                        key={i}
                        className='p-5 border border-muted rounded-xl ' >
                        <h2 className='font-heading font-extrabold text-6xl lg:text-8xl text-lime/60 hover:text-lime transition-colors'>{step.step}</h2>
                        <h1 className='font-heading font-extrabold text-xl lg:text-xl text-offwhite select-none hover:text-lime '>{step.stepHeading}</h1>
                        <p className=' text-base lg:text-lg text-muted font-body mt-5'>{step.stepDesc}</p>
                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default HowItWorks