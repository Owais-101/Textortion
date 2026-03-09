import React from 'react'
import { motion } from 'motion/react'

const Wavy = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78" 

}) => {
    const wavyVariant = {
        animate: (i) => (
            {
                y: [0, -15, 0],
                transition: {
                    duration: duration,
                    delay: i * 0.05,
                    ease: "easeInOut",
                    repeat: Infinity
                }
            }
        )
    }

    return (
        <div style={{ display: 'flex' }}>
            {text.split('').map((char, i) => (
                <motion.h1
                    key={i}
                    variants={wavyVariant}
                    custom={i}
                    animate='animate'
                    style={{ color, display: 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.h1>
            ))}
        </div>
    )
}

export default Wavy