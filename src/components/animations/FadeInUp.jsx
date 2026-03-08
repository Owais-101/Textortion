import React from 'react'
import { motion } from 'motion/react'

const FadeInUp = ({
    text = "Textortion",
    duration = 1,
    color = "red"

}) => {

    const fadeInUpVariant = {
        hidden: { opacity: 0, x: -50 },
        animate: {
            opacity: 1, x: 0,
            transition: {
                duration: duration,
                ease: "easeInOut"
            }
        }
    }

    return (
        <>
            <motion.p
                variants={fadeInUpVariant}
                initial='hidden'
                animate='animate'
                style={{ color: color }}
            >
                {text}
            </motion.p>
        </>
    )
}

export default FadeInUp