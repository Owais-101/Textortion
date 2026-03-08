import React from 'react';
import PulsatingDot from './PulsatingDot';
import BoringText from './BoringText';
import Button from './Button'
import CodeCard from './CodeCard';

const HeroSection = () => {

    const card = [
        {
            filename: "GlitchText.jsx",
            code: <pre className='font-body md:text-base text-white text-xs'>
                <code>
                    <span className='text-lime'>const</span>
                    {` GlitchText = ({ text })`} <span className='text-lime'>{"=>"}</span> {`(`}
                    {`\n  `}
                    <span className='text-lime'> &lt;span</span>
                    <span className='text-hotpink'>
                        <br /> &nbsp; className</span>
                    {`="glitch" `} <br />
                    &nbsp;  <span className='text-hotpink'>data-text</span>
                    {`={text} `}<span className='text-lime'>{">"}</span>{`\n   {text}\n`}  <span className='text-lime'>{"</span>"}</span>{`\n)`}
                </code>
            </pre>
        }]


    return (
        <div className='grid grid-cols-1 lg:grid-cols-[60%_40%]'>
            {/* left side */}
            <div className='h-full  py-5'>

                <div className='px-3 py-2 border border-muted w-fit flex items-center gap-2 text-offwhite font-body text-xs lg:text-sm uppercase max-lg:mx-auto mb-10'>
                    <PulsatingDot />
                    <p>Now Live with 10+ Animation Styles.</p>
                </div>


                <div className='max-lg:flex justify-center flex-col items-center'>
                    <BoringText />
                </div>

                <div className='font-body text-offwhite text-xs md:text-base mt-10 text-center lg:text-start'>
                    <p>Textortion gives you <span className='text-hotpink'>10+ animated text effects,</span> <br /> Copy the React Component paste and done </p>
                </div>

                <div className='mt-10 flex gap-5 justify-center lg:justify-start'>
                    <Button text={"Start Now"} />
                    <button className='font-body border border-neutral-300 rounded-xl outline-0 cursor-pointer px-6 py-1.5 text-white secondary-button-hover'>See Animations</button>
                </div>

            </div>


            {/* right side */}
            <div className=' h-full flex flex-col gap-5 items-center justify-center mt-5 lg:mt-0 w-full'>
                {/* Code Card */}
                {card.map((card, i) => <CodeCard key={i} filename={card.filename} code={card.code} />)}

                <div className='border border-offwhite py-2 px-4 rounded-lg font-body text-xs md:text-[13px] flex items-center'>
                    <span className='text-xl'>⚡</span>
                    <div className=''>
                        <p className=' text-lime tracking-tighter '>Zero Setup Needed</p>
                        <p className='text-offwhite'>Just install <span className='text-hotpink'>framer-motion</span> and copy paste.</p>
                    </div>
                </div>
            </div>

            <div className=' w-fit rounded-xl border py-2 px-6 text-offwhite font-heading text-xs lg:text-base mt-5 hover:border-lime text-center mx-auto lg:mx-0 ' >
                <h2 className='text-lime font-extrabold'>Zero($) to Start <br /> <span className='text-white font-body tracking-wide font-medium'>FREE FOR ALL</span> </h2>
            </div>

        </div>
    )
}

export default HeroSection