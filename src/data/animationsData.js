import FadeInDown from "@/components/animations/FadeInDown";
import FadeInUp from "@/components/animations/FadeInUp";
import StaggerBounce from "@/components/animations/StaggerBounce";
import StaggerFadeInUp from "@/components/animations/StaggerFadeInUp";
import Wavy from "@/components/animations/Wavy";

export const animations = [
    {
        id: "fadeInUp",
        name: "Fade In Up",
        tag: "FADE",
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
        id: "fadeInDown",
        name: "Fade In Down",
        tag: "FADE",
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
        id: "wavy",
        name: "Wavy",
        tag: "CONTINUOUS",
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

    {
        id: "staggerFadeInUp",
        name: "Stagger Fade In Up",
        tag: "STAGGER",
        icon: "⌨️",
        desc: "Characters appear one after another with a delay.",
        animation: StaggerFadeInUp,
        animationCode: `import React from 'react'
import { motion } from 'motion/react'

const StaggerFadeInUp = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78",
    ease = "easeInOut"
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
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        animate: {
            opacity: 1, y: 0, filter: 'blur(0px)',
            transition: { duration: duration, ease: ease }
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

export default StaggerFadeInUp`
    },

    {
        id: "staggerBounce",
        name: "Stagger Bounce",
        tag: "STAGGER",
        icon: "⌨️",
        desc: "Characters appear one after another with dealy and spring-like bounce.",
        animation:StaggerBounce,
        animationCode:`import React from 'react'
import { motion } from 'motion/react'

const StaggerBounce = ({
    text = "Textortion",
    duration = 0.5,
    color = "#ff2d78",
    ease = "easeInOut"
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
        hidden: { opacity: 0, y: -60 },
        animate: {
            opacity: 1, y: 0,
            transition: {
                duration: duration,
                ease: ease,
                type: "spring",
                stiffness: 200,
                damping: 10,
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

export default StaggerBounce`
    },

]