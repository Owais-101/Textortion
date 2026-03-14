"use client";
import Navbar from '@/components/Navbar'
import Button from '@/components/Button';
import { FaBullseye } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import CategorySelect from '@/components/animationPage/CatergorySelect';
import { useAnimations } from '@/context/AnimationsContext';
import CodeBlockSection from '@/components/animationPage/CodeBlock';
import EditControls from '@/components/animationPage/EditControls';
import Footer from '@/components/Footer';

const Animations = () => {

    const {
        animationsData,
        selected,
        setSelected,
        replayKey,
        Animation,
        play,
        text,
        color,
        duration,
        easing,
        blur
    } = useAnimations()

    return (
        <div className='w-full min-h-screen flex flex-col'>
            <div className='border-b border-lime pb-5 md:pb-0'>
                <Navbar />
            </div>

            <div className='max-md:flex-col lg:flex items-stretch'>

                {/* Left side */}
                <div className=" top-0 lg:h-screen lg:w-[20%] flex flex-col items-center border-b border-b-lime lg:border-r lg:border-r-lime py-5 px-3 overflow-auto scrollbar-hide">
                    <div className='mb-14 flex flex-col gap-1 items-center'>
                        <span
                            className=' text-sm lg:text-base font-heading text-offwhite' >Filter by Category</span>
                        <CategorySelect />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-full">
                        {animationsData.map((item, i) => (
                            <div
                                onClick={() => { setSelected(item.id); }}
                                key={i}
                                className={`border ${selected === item.id ? 'border-lime' : 'border-muted'} w-full rounded-lg flex flex-col gap-3 justify-center px-5 py-4 cursor-pointer hover:border-lime transition-colors`}>
                                <div className='flex justify-between'>
                                    <h2 className='font-heading text-offwhite lg:text-lg'>{item.name}</h2>
                                    <span className='px-2 uppercase rounded-md text-lime bg-lime/20 text-[9px] flex items-center justify-center'>{item.category}</span>
                                </div>
                                <p className='font-body text-muted text-sm'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle (ANIMATION) side */}
                <div className='w-full h-fit lg:h-screen border-b border-b-lime lg:w-[40%] flex justify-center border-t lg:border-t-0 border-lime lg:border-r lg:border-lime px-5 py-10 overflow-auto scrollbar-hide'>

                    <div className='w-full'>

                        <div className='left-5 mb-5'>
                            <Button onClick={play} text="Play" />
                        </div>

                        <p className='text-offwhite font-body text-xs lg:text-base flex items-center gap-1'>
                            <span><FaBullseye /></span>Preview
                        </p>

                        <div className='w-full truncate flex justify-center font-heading font-bold text-4xl md:text-6xl lg:text-7xl border border-muted bg-muted/5 h-fit px-10 py-4 rounded-xl'>
                            <Animation
                                key={`${selected}-${replayKey}-${color}`}
                                text={text}
                                color={color}
                                duration={duration}
                                ease={easing}
                                blur={blur}
                            />
                        </div>

                        <p className='text-offwhite text-xs lg:text-base font-body mt-12 flex items-center gap-1'>
                            <span><MdOutlineModeEdit /></span> Edit
                        </p>

                        {/* Controls Div */}
                        <EditControls />

                        {/* Spacer */}
                        <div className='h-4 w-full shrink-0' />
                    </div>
                </div>

                {/* Code Block Div */}
                <div className='w-full h-screen lg:w-[40%] flex justify-center text-offwhite py-3 border-b border-lime overflow-auto scrollbar-hide'>
                    <CodeBlockSection />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Animations