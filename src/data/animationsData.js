import FadeInDown from "@/components/animations/FadeInDown";
import FadeInUp from "@/components/animations/FadeInUp";
import Wavy from "@/components/animations/Wavy";

export const animations = [
    {
        id: "fadeInUp",
        name: "Fade In Up",
        tag: "COMMON",
        icon: "⌨️",
        desc: "Characters glides upward as it fades in, creating a smooth entrance.",
        animation: FadeInUp,
        animationCode:
            `import React from 'react'
import { motion } from 'motion/react'

const FadeInUp = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78"
}) => {

    const fadeInUpVariant = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
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

export default FadeInUp
        `
    },

    {
        id: "f",
        name: "fadeInDown",
        tag: "COMMON",
        icon: "⌨️",
        desc: "Characters glides downward as it fades in, creating a smooth entrance.",
        animation: FadeInDown,
        animationCode: 
        `import React from 'react'
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
        `
    },
    {
        id: "n",
        name: "Wavy",
        tag: "CLASSIC",
        icon: "⌨️",
        desc: "Characters appear in a wave like structure creating a trippy effect.",
        animation: Wavy,
        animationCode: `import React from 'react'
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
        `
    },
]