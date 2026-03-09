import React from 'react'
import { motion } from 'motion/react'

const FadeInDown = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78"
}) => {

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: -30, filter: 'blur(10px)' },
        animate: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: {
                duration: duration,
                ease: "easeInOut"
            }
        }
    }

    return (
        <>
            <motion.h1
                variants={fadeInUpVariant}
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