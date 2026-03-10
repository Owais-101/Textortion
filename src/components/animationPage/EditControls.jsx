import { useAnimations } from '@/context/AnimationsContext';
import React from 'react'

const EditControls = () => {

    const { setText,
        text,
        setColor,
        color,
        setDuration,
        duration,
        setBlur,
        blur,
        easing,
        setEasing
    } = useAnimations();


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
            type: "input",
            inputType: "text",
            placeholder: "Enter Color ...",
            onChange: (e) => setColor(e.target.value ? e.target.value : "#ff2d78"),
        },
        {
            id: "duration",
            label: "Duration",
            type: "range",
            min: 0.2,
            max: 5,
            step: 0.2,
            defaultValue: duration,
            onChange: (e) => setDuration(e.target.value ? e.target.value : 0.5),
        },
        {
            id: "blur",
            label: "Blur",
            type: "range",
            min: 0,
            max: 25,
            step: 0.5,
            defaultValue: blur,
            onChange: (e) => setBlur(e.target.value ? e.target.value : 0.5),
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
        <div className='w-full h-fit border border-muted rounded-xl py-6 px-10'>
            {controls.map((control) => (
                <div key={control.id} className='text-muted flex flex-col mb-8'>
                    <label className='text-base lg:text-lg font-heading font-extrabold'>
                        {control.label}&nbsp;
                        {control.subtitle && <span className='text-offwhite font-body text-xs font-light'>{control.subtitle}</span>}
                        {control.id && <span className='font-body text-xs font-light text-offwhite'>
                            {control.id === "duration" ? duration :
                                control.id === "blur" ? blur : ""}
                        </span>}
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
                                <p>{control.min}{control.id === "duration" ? "ms" : "px"}</p>
                                <p>{control.max}{control.id === "duration" ? "s" : "px"}</p>
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
    )
}

export default EditControls