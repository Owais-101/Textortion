import React from 'react'
import BrandAiStudioIcon from './ui/brand-aistudio-icon'
import { motion } from 'motion/react'
import MousePointer2Icon from './ui/mouse-pointer-2-icon'
import SatelliteDishIcon from './ui/satellite-dish-icon'
import BrandReactIcon from './ui/brand-react-icon'
import PenIcon from './ui/pen-icon'
import GearIcon from './ui/gear-icon'

const BentoGrid = () => {

    const features = [
        {
            icon: <BrandAiStudioIcon />,
            heading: "10+ Animation Styles",
            content: "Typing, Glitch, Shimmer, Flip. Every single production ready animation at your disposal."
        },
        {
            icon: <MousePointer2Icon />,
            heading: "One Click Copy",
            content: "Hit copy. Complete React component lands in your clipboard instantly."
        },
        {
            icon: <SatelliteDishIcon />,
            heading: "Live Preview",
            content: "See exactly how your animation looks before copying anything."
        },
        {
            icon: <BrandReactIcon />,
            heading: "React Ready",
            content: "Clean Framer Motion components. No cleanup. No config. Just paste."
        },
        {
            icon: <PenIcon />,
            heading: "Fully Customizable",
            content: "Font, color, speed, easing — all editable before you copy."
        },
        {
            icon: <GearIcon />,
            heading: "Zero Config",
            content: "One package. Paste the code. Ship it. No extra setup needed."
        },
    ]

    const cardVariant = {
        rest: { scale: 0 },
        hover: (i) => (
            {
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.1,
                    staggerChildren: 0.02,
                }
            }
        )
    }

    const wordVariant = {
        rest: { y: 8, opacity: 0.8 },
        hover: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        }
    }

    const borderVariant = {
        rest: { opacity: 0 },
        hover: { opacity: 1, transition: { duration: 0.3 } }
    }

    return (
        <div className='w-full px-3 lg:my-40'>
            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
                <h2 className='text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-white px-5 lg:px-0' >Everything you need. <br /> <span>Nothing you don't.</span> </h2>
                <p className=' mt-1 text-lg lg:text-xl font-body text-muted mb-10 px-5 lg:px-0' >Every animation crafted for one thing - making your hero section impossible to ignore.</p>
            </motion.div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={cardVariant}
                        initial="rest"
                        whileInView="hover"
                        whileHover="hover"
                        viewport={{ once: true, amount: 0.3 }}
                        className=' group relative rounded-2xl bg-card border border-muted p-5 overflow-hidden'>
                        <motion.div
                            variants={borderVariant}
                            className='absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-lime to-transparent pointer-events-none'
                        />

                        <span className='text-lime'>{feature.icon}</span>

                        <div className='mt-3 '>

                            <motion.h2
                                variants={cardVariant}
                                className='lg:text-lg text-offwhite font-heading font-extrabold flex flex-wrap gap-1 group-hover:text-hotpink transition-colors duration-100 delay-100'
                            >
                                {feature.heading.split("").map((word, j) => (
                                    <motion.span key={j} variants={wordVariant}>
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            <p className='text-xs md:text-base font-body mt-2 text-muted'>
                                {feature.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default BentoGrid