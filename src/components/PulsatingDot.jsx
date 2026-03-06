import React from 'react';
import { motion } from 'motion/react';

const PulsatingDot = () => {
    return (
        <motion.div
            animate={{
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat:Infinity
            }}
            className='w-1.5 h-1.5 rounded-full bg-lime'>

        </motion.div>
    )
}

export default PulsatingDot