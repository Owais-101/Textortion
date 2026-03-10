import React from 'react'
import { motion } from 'motion/react'

const Shimmer = ({
    text = "Textortion",
    duration = 0.2,
    color = "white",
    ease = "easeInOut",
}) => {
    return (
        <motion.h1
            className="font-heading font-black"
            style={{
                background: `linear-gradient(90deg, #555 0%, ${color ? color : 'white'} 35%, #fff 50%, ${color ? color : 'white'} 65%, #555 100%)`,
                backgroundSize: "200% auto",
                backgroundPosition: "200% center",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color
            }}
            animate={{
                backgroundPosition: ["200% center", "-200% center"],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: ease,
            }}
        >
            {text}
        </motion.h1>
    )
}

export default Shimmer