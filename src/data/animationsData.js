import FadeInDown from "@/components/animations/FadeInDown";
import FadeInUp from "@/components/animations/FadeInUp";
import Wavy from "@/components/animations/Wavy";

export const animations = [
    {
        id: "fadeInUp",
        name: "Fade In Up",
        tag: "COMMON",
        icon: "⌨️",
        desc: "Characters glides upward as it fades in, creating a smooth entrance.",
        animation: FadeInUp
    },

    {
        id: "f",
        name: "fadeInDown",
        tag: "COMMON",
        icon: "⌨️",
        desc: "Characters glides downward as it fades in, creating a smooth entrance.",
        animation: FadeInDown
    },
    {
        id: "n",
        name: "Wavy",
        tag: "CLASSIC",
        icon: "⌨️",
        desc: "Characters appear in a wave like structure creating a trippy effect.",
        animation: Wavy
    },
]