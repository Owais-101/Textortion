import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import PulsatingDot from '@/components/PulsatingDot'
import Navbar from '@/components/Navbar'

const faqs = [
    {
        q: "What is Textify?",
        a: "Textify is a copy-paste animation library for React heading components. Browse, preview, customize, and drop animations directly into your project — no package install needed."
    },
    {
        q: "Do I need to install anything?",
        a: "Just one dependency: Framer Motion. Run npm install motion and you're good to go. Textify itself is not a package — you own the code you copy."
    },
    {
        q: "Can I customize the animations?",
        a: "Yes. Every component accepts props like text, color, duration, blur, and ease. Tweak them directly in the Edit panel before copying, or modify the code after pasting."
    },
    {
        q: "What frameworks does Textify support?",
        a: "Any React-based project works — Next.js, Vite, Create React App, Remix, etc. As long as you can use Framer Motion, Textify components will run."
    },
    {
        q: "Is Textify free to use?",
        a: "Yes, completely free. Copy whatever you need, use it in personal or commercial projects."
    },
    {
        q: "Can I request new animations?",
        a: "Absolutely. Open an issue on GitHub or reach out — if it's a good idea, it'll make it into the library."
    }
]

const FAQItem = ({ q, a, index }) => {
    const [open, setOpen] = useState(false)
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className={`border-b border-muted relative overflow-hidden`}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            <motion.div
                className='absolute inset-0 bg-lime/5 pointer-events-none'
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            />

            <button
                onClick={() => setOpen(!open)}
                className='w-full flex items-center justify-between py-5 px-1 text-left cursor-pointer relative z-10'
            >
                <div className='flex items-center gap-4'>
                    <motion.span
                        className='text-xs font-mono text-muted'
                        animate={{ color: open ? '#ccff00' : '#666' }}
                        transition={{ duration: 0.3 }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </motion.span>

                    {/* Letter-by-letter color flash on open */}
                    <span className='font-heading font-bold text-sm md:text-base'>
                        {q.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                animate={{
                                    color: open ? '#ccff00' : hovered ? '#ffffff' : '#e5e5e5',
                                    y: open ? [0, -4, 0] : 0
                                }}
                                transition={{
                                    delay: open ? i * 0.015 : 0,
                                    duration: 0.3,
                                    ease: "backOut"
                                }}
                                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </div>

                <motion.span
                    animate={{
                        rotate: open ? 135 : 0,
                        scale: open ? 1.4 : 1,
                        color: open ? '#ccff00' : '#888'
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className='text-xl ml-4 shrink-0 inline-block'
                >
                    ✦
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0, filter: "blur(8px)", y: -10 }}
                        animate={{ height: "auto", opacity: 1, filter: "blur(0px)", y: 0 }}
                        exit={{ height: 0, opacity: 0, filter: "blur(8px)", y: -10 }}
                        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                        className='overflow-hidden relative z-10'
                    >
                        {/* Answer text with word-by-word stagger */}
                        <p className='font-body text-sm md:text-base pb-5 px-1 pl-10 leading-relaxed'>
                            {a.split(' ').map((word, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    transition={{ delay: i * 0.025, duration: 0.3, ease: "easeOut" }}
                                    style={{ display: 'inline-block', marginRight: '4px', color: '#888' }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

const FAQ = () => {
    return (
        <>
            <div className='md:border-b border-muted'>
                <Navbar />
            </div>
            <section className='w-full px-5 md:px-10 lg:px-20 py-20 lg:flex gap-5 '>
                <div className='mb-12'>
                    {"Frequently asked".split(' ').map((word, i) => (
                        <motion.span
                            key={i}
                            className='font-heading font-extrabold text-2xl md:text-4xl text-offwhite mr-3 inline-block'
                            initial={{ opacity: 0, y: 40, rotate: -6, filter: "blur(12px)" }}
                            animate={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                        >
                            {word}
                        </motion.span>
                    ))}
                    <br />
                    {"questions.".split('').map((char, i) => (
                        <motion.span
                            key={i}
                            className='font-heading font-extrabold text-2xl md:text-4xl text-lime inline-block'
                            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: 0.35 + i * 0.04, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    className='w-full max-w-3xl border-t border-muted'
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                >
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
                    ))}
                </motion.div>

            </section>
        </>
    )
}

export default FAQ