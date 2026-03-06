import React from 'react';
import { motion } from 'motion/react';

const Loading = () => {
    const textOne = "Texto"
    const textTwo = "rtion"

    // Text animation Variants
    const textOneVariant = {
        hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
        visible: (idx) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
      transition: {
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1]
            }
        }),

    }
    const textTwoVariant = {
        hidden: { opacity: 0, y: 100,filter:"blur(10px)" },
        visible: (idx) => ({
            opacity: 1,
            y: 0,
            filter:"blur(0px)",
            transition: {
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1]
            }
        }),
    }


    // Panel Variants (goes left and right)
    const leftPanelVariant = {
        visible: { x: 0 },
        exit: {
            x: -1000,
            transition: {
                duration: 1,
                delay: 1.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    const rightPanelVariant = {
        visible: { x: 0 },
        exit: {
            x: 1000,
            transition: {
                duration: 1,
                delay: 1.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    }

    return (
        <motion.div className='flex w-full h-screen overflow-hidden'>

            {/* Left Panel */}
            <motion.div
                variants={leftPanelVariant}
                initial="visible"
                animate="exit"
                className='flex justify-end items-center bg-lime w-1/2 h-full overflow-hidden'
            >
                {textOne.split("").map((char, idx) => (
                    <motion.h1
                        key={idx}
                        variants={textOneVariant}
                        initial="hidden"
                        animate="visible"
                        custom={idx}
                        className='font-heading font-black text-4xl md:text-6xl lg:text-9xl leading-none'
                    >
                        {char}
                    </motion.h1>
                ))}
            </motion.div>

            {/* Right Panel */}
            <motion.div
                variants={rightPanelVariant}
                initial="visible"
                animate="exit"
                className='flex justify-start items-center bg-background w-1/2 h-full overflow-hidden'
            >
                {textTwo.split("").map((char, idx) => (
                    <motion.h1
                        key={idx}
                        variants={textTwoVariant}
                        initial="hidden"
                        animate="visible"
                        custom={idx}
                        className='font-heading font-black text-lime text-4xl md:text-6xl lg:text-9xl leading-none'
                    >
                        {char}
                    </motion.h1>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Loading