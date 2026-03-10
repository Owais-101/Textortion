import { createContext, useContext, useState } from 'react'
import { animations } from '@/data/animationsData'

const AnimationsContext = createContext(null)

export const AnimationsProvider = ({ children }) => {

    const [animationsData, setAnimationsData] = useState(animations)
    const [selected, setSelected] = useState(animations[0].id)
    const [replayKey, setReplayKey] = useState(1)
    const [text, setText] = useState("Hello")
    const [color, setColor] = useState("#ff2d78")
    const [duration, setDuration] = useState(0.5)
    const [blur, setBlur] = useState(0)
    const [easing, setEasing] = useState("linear")

    const Animation = animationsData.find(item => item.id === selected)?.animation
    const animCode = animationsData.find(item => item.id === selected)?.animationCode
    const current = animationsData.find(item => item.id === selected)

    const play = () => setReplayKey(prev => prev + 1)

    return (
        <AnimationsContext.Provider value={{
            animationsData, setAnimationsData,
            selected, setSelected,
            replayKey, play,
            text, setText,
            color, setColor,
            duration, setDuration,
            blur, setBlur,
            easing, setEasing,
            Animation, animCode, current,
        }}>
            {children}
        </AnimationsContext.Provider>
    )
}

export const useAnimations = () => useContext(AnimationsContext)

export default AnimationsContext