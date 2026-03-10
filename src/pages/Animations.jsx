"use client";
import Search from '@/components/animationPage/Search'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { animations } from '@/data/animationsData';
import Button from '@/components/Button';
import {
    CodeBlock,
    CodeBlockBody,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockFilename,
    CodeBlockFiles,
    CodeBlockHeader,
    CodeBlockItem,
} from "@/components/kibo-ui/code-block";
import { FaBullseye } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

const Animations = () => {

    const [selected, setSelected] = useState(animations[0].id);
    const [replayKey, setReplayKey] = useState(1);
    const [text, setText] = useState("Hello");
    const [color, setColor] = useState("#ff2d78");
    const [duration, setDuration] = useState(0.5);
    const [easing, setEasing] = useState("linear");
    const Animation = animations.find(item => item.id === selected)?.animation;
    const animCode = animations.find(item => item.id === selected)?.animationCode;

    const code = [
        {
            language: "jsx",
            filename: "Textortion.jsx",
            code: animCode
        }
    ]

    const play = () => setReplayKey(prev => prev + 1);

    const controls = [
        {
            id: "text",
            label: "Text",
            type: "input",
            inputType: "text",
            placeholder: "Enter Text ...",
            onChange: (e) => setText(e.target.value ? e.target.value : "Hello"),
        },
        {
            id: "color",
            label: "Color",
            subtitle: "(can pass names or hex codes)",
            type: "input",
            inputType: "text",
            placeholder: "Enter Color ...",
            onChange: (e) => setColor(e.target.value ? e.target.value : "#ff2d78"),
        },
        {
            id: "duration",
            label: "Duration",
            type: "range",
            min: 0.5,
            max: 5.1,
            step: 0.2,
            defaultValue: 0.5,
            onChange: (e) => setDuration(e.target.value ? e.target.value : 0.5),
        },
        {
            id: "easing",
            label: "Easing",
            subtitle: "(animation curve)",
            type: "radio",
            options: ["easeIn", "easeOut", "easeInOut", "linear"],
        },
    ];

    return (
        <div className='w-full min-h-screen flex flex-col pb-56'>
            <div className='border-b border-lime pb-5 md:pb-0'>
                <Navbar />
            </div>

            <div className='max-md:flex-col lg:flex items-stretch'>

                {/* Left side */}
                <div className="sticky top-0 h-screen lg:w-[20%] flex flex-col items-center border-b border-b-lime lg:border-r lg:border-r-lime py-5 px-3 overflow-auto scrollbar-hide">
                    <div className='mb-10'>
                        <Search />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-full">
                        {animations.map((item, i) => (
                            <div
                                onClick={() => { setSelected(item.id); }}
                                key={i}
                                className={`border ${selected === item.id ? 'border-lime' : 'border-muted'} w-full rounded-lg flex flex-col gap-3 justify-center px-5 py-4 cursor-pointer hover:border-lime transition-colors`}>
                                <div className='flex justify-between'>
                                    <h2 className='font-heading text-offwhite lg:text-lg'>{item.name}</h2>
                                    <span className='px-2 uppercase rounded-md text-lime bg-lime/20 text-[9px] flex items-center justify-center'>{item.tag}</span>
                                </div>
                                <p className='font-body text-muted lg:text-sm'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle (ANIMATION) side */}
                <div className='relative w-full border-b border-b-lime lg:w-[40%] flex justify-center border-t border-lime lg:border-r lg:border-lime px-5 py-10'>
                    <div className='absolute top-5 left-5'>
                        <Button onClick={play} text="Play" />
                    </div>
                    <div className='w-full'>
                        <p className='text-offwhite mt-20 font-body text-xs lg:text-base flex items-center gap-1'>
                            <span><FaBullseye /></span>Preview
                        </p>
                        <div className='w-full truncate flex justify-center font-heading font-bold text-4xl md:text-6xl lg:text-7xl border border-muted h-fit px-10 py-4 rounded-xl'>
                            <Animation
                                key={`${selected}-${replayKey}`}
                                text={text}
                                color={color}
                                duration={duration}
                                ease={easing}
                            />
                        </div>

                        {/* Edit div */}
                        <p className='text-offwhite text-xs lg:text-base font-body mt-12 flex items-center gap-1'>
                            <span><MdOutlineModeEdit /></span> Edit
                        </p>
                        <div className='w-full border border-muted rounded-xl py-6 px-10'>
                            {controls.map((control) => (
                                <div key={control.id} className='text-muted flex flex-col mb-8'>
                                    <label className='text-base lg:text-lg font-heading font-extrabold'>
                                        {control.label}&nbsp;
                                        {control.subtitle && <span className='text-offwhite font-body text-xs font-light'>{control.subtitle}</span>}
                                        {control.id === "duration" && <span className='font-body text-xs font-light text-offwhite'>({duration})</span>}
                                    </label>

                                    {control.type === "input" && (
                                        <input
                                            onChange={control.onChange}
                                            className='border border-muted py-2 px-5 rounded-md outline-none focus:border-lime text-hotpink font-body placeholder:text-muted'
                                            type={control.inputType}
                                            placeholder={control.placeholder}
                                        />
                                    )}

                                    {control.type === "range" && (
                                        <>
                                            <div className='flex justify-between font-body text-offwhite text-xs my-2'>
                                                <p>0.5ms</p>
                                                <p>5.1s</p>
                                            </div>
                                            <input
                                                onChange={control.onChange}
                                                className='text-hotpink font-body placeholder:text-muted'
                                                type="range"
                                                min={control.min} max={control.max} step={control.step} defaultValue={control.defaultValue}
                                            />
                                        </>
                                    )}

                                    {control.type === "radio" && (
                                        <div className='flex flex-wrap gap-2 mt-2'>
                                            {control.options.map((opt) => (
                                                <button
                                                    key={opt}
                                                    onClick={() => setEasing(opt)}
                                                    className={`border py-2 px-5 rounded-md font-body text-sm transition-colors cursor-pointer
                                                        ${easing === opt ? 'border-lime text-lime bg-lime/10' : 'border-muted text-muted hover:border-lime'}`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Code Block Div */}
                <div className='w-full lg:w-[40%] flex justify-center text-offwhite py-5 border-b border-lime overflow-auto scrollbar-hide'>
                    <div className='w-[90%] h-fit mt-5'>
                        <CodeBlock className='border-muted' key={selected} data={code} defaultValue={code[0].language}>
                            <CodeBlockHeader className='border-muted'>
                                <CodeBlockFiles>
                                    {(item) => (
                                        <CodeBlockFilename key={item.language} value={item.language}>
                                            {item.filename}
                                        </CodeBlockFilename>
                                    )}
                                </CodeBlockFiles>
                                <CodeBlockCopyButton
                                    onCopy={() => console.log("Copied code to clipboard")}
                                    onError={() => console.error("Failed to copy code to clipboard")}
                                />
                            </CodeBlockHeader>
                            <CodeBlockBody>
                                {(item) => (
                                    <CodeBlockItem key={item.language} value={item.language}>
                                        <CodeBlockContent>
                                            {item.code}
                                        </CodeBlockContent>
                                    </CodeBlockItem>
                                )}
                            </CodeBlockBody>
                        </CodeBlock>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Animations