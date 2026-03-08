import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';


const BoringText = () => {
    const words = ["Stop", "writing", "boring", "headings"];
    const [animationIdx, setAnimationIdx] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    const animations = [
        // Style 1 — Split Letter Reveal
        {
            container: {
                hidden: { opacity: 0, },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
            },
            char: {
                hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }
            }
        },
        // Style 2 — Glitch Drop
        {
            container: {
                hidden: {},
                visible: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } }
            },
            char: {
                hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
                visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
            }
        },
        {
            container: {
                hidden: { opacity: 0, },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } }
            },
            char: {
                hidden: { opacity: 0, y: -40, filter: "blur(8px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: "easeOut" } }
            }
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimationIdx(prev => (prev + 1) % animations.length);
            setAnimationKey(prev => prev + 1);
        }, 1500)
        return () => clearInterval(timer)
    }, [])

    const currentAnimation = animations[animationIdx]

    return (
        <div>
            {words.map((word, i) => (
                word === "boring" ? (
                    <motion.h1
                        key={`boring-${animationKey}`}
                        className='text-4xl md:text-6xl lg:text-8xl font-extrabold font-heading text-lime flex'
                        variants={currentAnimation.container}
                        initial="hidden"
                        animate="visible"
                    >
                        {"boring".split("").map((char, j) => (
                            <motion.span key={j} variants={currentAnimation.char}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                ) : (
                    <motion.h1
                        key={i}
                        variants={currentAnimation.char}
                        initial="hidden"
                        animate="visible"
                        className='text-4xl md:text-6xl lg:text-8xl font-extrabold font-heading text-white'
                    >
                        {word}
                    </motion.h1>
                )
            ))}
        </div>
    )
}

export default BoringText