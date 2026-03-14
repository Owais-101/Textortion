import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const sections = [
    {
        id: "getting-started",
        label: "Getting Started",
        content: {
            title: "Getting Started",
            subtitle: "Welcome to Textify — a collection of beautiful heading animations for your React projects.",
            blocks: [
                {
                    type: "text",
                    content: "Textify gives you plug-and-play animated heading components built with Framer Motion. Pick an animation, copy the code, drop it in your project."
                },
                {
                    type: "step",
                    steps: [
                        { number: "01", title: "Browse animations", desc: "Go to the Animations page and preview each effect live." },
                        { number: "02", title: "Customize it", desc: "Tweak text, color, duration, blur and easing from the Edit panel." },
                        { number: "03", title: "Copy the code", desc: "Hit the copy button on the code block and paste it into your project." },
                    ]
                }
            ]
        }
    },
    {
        id: "installation",
        label: "Installation",
        content: {
            title: "Installation",
            subtitle: "Textify components depend on Framer Motion. Install it before using any animation.",
            blocks: [
                { type: "text", content: "Install Framer Motion via your package manager:" },
                { type: "code", filename: "terminal", code: `npm install motion` },
                { type: "text", content: "Then copy any animation component from the Animations page into your project. No extra config needed." },
                { type: "callout", variant: "info", content: "Textify is not an npm package — it's a copy-paste library. You own the code." }
            ]
        }
    },
    {
        id: "usage",
        label: "How to Use",
        content: {
            title: "How to Use",
            subtitle: "Each animation component accepts a standard set of props for full customization.",
            blocks: [
                { type: "text", content: "After copying the component into your project, import and use it like any React component:" },
                {
                    type: "code",
                    filename: "MyPage.jsx",
                    code: `import FadeInUp from './animations/FadeInUp'

export default function Hero() {
  return (
    <FadeInUp
      text="Hello World"
      color="#ff2d78"
      duration={0.6}
      blur={10}
      ease="easeInOut"
    />
  )
}`
                },
                { type: "text", content: "All Textify components accept the following props:" },
                {
                    type: "props",
                    rows: [
                        { prop: "text", type: "string", default: '"Textortion"', desc: "The heading text to animate." },
                        { prop: "color", type: "string", default: '"#ff2d78"', desc: "Text color — accepts any CSS color or hex." },
                        { prop: "duration", type: "number", default: "0.5", desc: "Animation duration in seconds." },
                        { prop: "blur", type: "number", default: "0", desc: "Starting blur in px. Animates to 0." },
                        { prop: "ease", type: "string", default: '"easeInOut"', desc: '"easeIn" | "easeOut" | "easeInOut" | "linear"' },
                    ]
                },
                { type: "callout", variant: "warn", content: "For spring-based animations like StaggerBounce, duration controls opacity and blur — not the bounce itself." }
            ]
        }
    }
]

const CodeBlock = ({ code, fileName }) => {
    const [copied, setCopied] = useState(false);
    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
            style={{ transformOrigin: "center" }}
            className='lg:w-[50%] my-5 border border-muted rounded-md mx-auto lg:mx-0'
        >
            <div className='px-5 py-3 flex justify-between items-center font-body bg-muted/20 text-muted text-sm md:text-base'>
                <span className='text-muted'>{fileName}</span>
                <button
                    onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
                    className={`px-3 py-1 rounded-md cursor-pointer hover:bg-muted/40 ${copied ? 'bg-lime' : 'bg-muted/20'}`}>
                    {copied ? "Copied ✓" : "Copy"}
                </button>
            </div>
            <pre className='text-[#878787] px-8 py-4 text-sm md:text-base overflow-x-auto'>
                {code}
            </pre>
        </motion.div>
    )
}

const Banner = ({ variant, content }) => {
    return (
        <div className={`w-fit py-3 px-5 border my-5 rounded-lg ${variant === "info" ? 'border-lime bg-lime/10 text-lime' : 'border-red-500 bg-red-500/20 text-red-400'}`}>
            <p className='font-body tracking-tight text-xs md:text-sm'>{content}</p>
        </div>
    )
}

const Steps = ({ step }) => {
    return (
        <div className='mt-10'>
            {step.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                    style={{ transformOrigin: "center" }}
                    className="w-full max-w-sm border border-muted mt-5 text-offwhite py-6 px-4 flex items-center justify-between rounded-lg"
                >
                    <div className='font-heading font-extrabold text-lime'>{item.number}</div>
                    <div className='w-[80%]'>
                        <h2 className='font-heading font-extrabold'>{item.title}</h2>
                        <p className='text-sm text-muted mt-1'>{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const PropsTable = ({ rows }) => {
    return (
        <div className="overflow-x-auto lg:w-fit md:text-sm my-4 rounded-xl border border-zinc-800 bg-zinc-950">
            <table className="w-full text-xs font-mono border-collapse min-w-[520px]">
                <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900">
                        {["Prop", "Type", "Default", "Description"].map((h) => (
                            <th key={h} className="text-left px-4 py-3 text-xs md:text-sm font-bold tracking-widest text-lime-400 uppercase">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className={`border-b border-zinc-900 transition-colors hover:bg-zinc-900/60 ${i % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900/30"}`}>
                            <td className="px-4 py-3 text-xs md:text-sm text-pink-500 whitespace-nowrap">{row.prop}</td>
                            <td className="px-4 py-3 text-xs md:text-sm text-blue-400 whitespace-nowrap">{row.type}</td>
                            <td className="px-4 py-3 text-xs md:text-sm text-zinc-500 whitespace-nowrap">{row.default}</td>
                            <td className="px-4 py-3 text-xs md:text-sm text-zinc-400 min-w-[180px]">{row.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Docs = () => {
    const [selectedSection, setSelectedSection] = useState(sections[0].id);
    const currentSection = sections.find(s => s.id === selectedSection);

    return (
        <div className='w-full min-h-screen'>

            <div className='md:border-b md:border-muted'>
                <Navbar />
            </div>

            <div className='w-full h-full lg:flex lg:min-h-screen'>

                {/* Sidebar */}
                <div className='w-full lg:w-[18%] max-md:border-b lg:border-r border-muted py-10 flex flex-col items-center lg:self-stretch'>
                    <h2 className='text-2xl md:text-3xl lg:text-2xl text-offwhite font-heading font-extrabold lg:text-center mb-5'>Contents</h2>
                    {sections.map((section, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedSection(section.id)}
                            className={`text-sm md:text-base px-5 py-2 rounded-lg mt-4 lg:mt-8 font-body hover:bg-muted/40 hover:border-lime/50 w-fit transition-colors outline-none cursor-pointer ${selectedSection === section.id ? 'bg-muted/40' : ''}`}>
                            <h1 className='text-offwhite'>{section.label}</h1>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className='w-full px-5 lg:p-10 pb-24'>

                    {/* ✅ whileInView → animate so it fires on section change */}
                    <motion.div
                        key={currentSection.id}
                        initial={{ opacity: 0, y: 40, rotate: -6, filter: "blur(12px)" }}
                        animate={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <h1 className='text-lg md:text-2xl font-heading font-extrabold mt-8 text-lime'>{currentSection.content.title}</h1>
                        <p className='text-sm md:text-base font-body text-muted mt-3'>{currentSection.content.subtitle}</p>
                    </motion.div>

                    <div className='w-full h-[0.5px] bg-muted/60 my-10'></div>

                    {currentSection.content.blocks.map((block, i) => {
                        if (block.type === "text") return <p key={i} className='text-sm md:text-base font-body text-muted'>{block.content}</p>
                        if (block.type === "code") return <CodeBlock key={i} fileName={block.filename} code={block.code} />
                        if (block.type === "step") return <Steps key={i} step={block.steps} />
                        if (block.type === "callout") return <Banner key={i} variant={block.variant} content={block.content} />
                        if (block.type === "props") return <PropsTable key={i} rows={block.rows} />
                    })}

                </div>
            </div>

            <div className='mt-10 lg:mt-0'>
                <Footer />
            </div>

        </div>
    )
}

export default Docs