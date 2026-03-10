import React from 'react'
import { motion } from 'motion/react'

const StaggerFadeInUp = ({
    text = "Textortion",
    duration = 0.2,
    color = "#ff2d78",
    ease = "easeInOut",
    blur = 0
}) => {

    const containerVariant = {
        hidden: {},
        animate: {
            transition: {
                staggerChildren: 0.08
            }
        }
    }

    const charVariant = {
        hidden: { opacity: 0, y: 30, filter: `blur(${blur}px)` },
        animate: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition:
            {
                duration: Number(duration),
                ease: ease
            }
        }
    }

    return (
        <motion.h1
            variants={containerVariant}
            initial='hidden'
            animate='animate'
            style={{ display: 'flex', flexWrap: 'wrap', color }}
        >
            {text.split('').map((char, i) => (
                <motion.span key={i} variants={charVariant}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.h1>
    )
}

export default StaggerFadeInUp