import React from 'react'

const HowItWorks = () => {

    const steps = [
        {
            step: "01",
            stepHeading: "Type your heading text",
            stepDesc: "Enter the text you want to animate. Any heading, any length. The live preview updates in real time as you type."

        },
        {
            step: "02",
            stepHeading: "Pick an animation style",
            stepDesc: "Browse 10+ styles. Click one to preview it on your exact text. Adjust speed, size, and properties before committing."

        },
        {
            step: "03",
            stepHeading: "Copy the React component",
            stepDesc: "Hit copy. A clean, complete React + Framer Motion / Motion component is in your clipboard. Paste it and ship."

        },
    ]

    return (
        <div className='w-full mt-20 px-5 group'>
            <div className='flex items-center gap-2 uppercase text-muted font-heading font-bold' >
                <div className=' h-0.5 w-4 lg:w-6 lg:h-1 bg-lime rounded-full'></div>
                <h2 className='text-xs lg:text-base'>How it Works</h2>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-offwhite flex items-center' >Three Steps. That's It</h1>
            <p className=' mt-1 text-lg lg:text-xl font-body text-muted mb-10'>Open, pick, paste thats it. (refer to docs for more detailed overview)</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ' >

                {steps.map((step, i) => (
                    <div key={i} className='p-5 border border-muted rounded-xl' >
                        <h2 className='font-heading font-extrabold text-6xl lg:text-8xl text-lime/60 hover:text-lime transition-colors'>{step.step}</h2>
                        <h1 className='font-heading font-extrabold text-xl lg:text-xl text-offwhite/80'>{step.stepHeading}</h1>
                        <p className=' text-base lg:text-lg text-muted font-body mt-5'>{step.stepDesc}</p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default HowItWorks