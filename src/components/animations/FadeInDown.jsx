import React from 'react'
import { motion } from 'motion/react'

const FadeInDown = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78",
    ease = "linear",
        blur = 0

}) => {

    const fadeInDown = {
        hidden: { opacity: 0, y: -30, filter: `blur(${blur}px)` },
        animate: {
            opacity: 1, y: 0,filter: `blur(0px)`,
            transition: {
                duration: Number(duration),
                ease: ease
            }
        }
    }

    return (
        <>
            <motion.h1
                variants={fadeInDown}
                initial='hidden'
                animate='animate'
                style={{ color: color }}
            >
                {text}
            </motion.h1>
        </>
    )
}

export default FadeInDown