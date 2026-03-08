import FastMarquee from "react-fast-marquee"
import { cn } from "@/lib/utils"

export const Marquee = ({
  className,
  ...props
}) => (
  <div className={cn("relative w-full overflow-hidden", className)} {...(props)} />
)

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}) => (
  <FastMarquee autoFill={autoFill} loop={loop} pauseOnHover={pauseOnHover} {...(props)} />
)

export const MarqueeFade = ({
  className,
  side,
  ...props
}) => (
  <div
    className={cn(
      "absolute top-0 bottom-0 z-10 h-full w-24 from-background to-transparent",
      side === "left" ? "left-0 bg-linear-to-r" : "right-0 bg-linear-to-l",
      className
    )}
    {...(props)} />
)

export const MarqueeItem = ({
  className,
  ...props
}) => (
  <div
    className={cn("mx-2 shrink-0 object-contain", className)}
    {...(props)} />
)

const animationsList = [
  "Gradient Shimmer",
  "Word Flip",
  "Fade In Up",
  "Split Letter",
  "Wave Effect",
  "Typing Effect",
  "Glitch Effect",
]

export function Demo() {
  return (
    <div className=" w-full my-10 border-y border-neutral-500 py-3 flex items-center justify-center">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeContent speed={80}>
          {animationsList.map((animation, i) => (
            <MarqueeItem key={i} className="mx-3">
              <div>
                <p className=" text-base md:text-xl text-neutral-300 font-heading font-extrabold" >{animation} <span className='text-lime text-2xl' >&nbsp; ✦</span> </p>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="right" />
      </Marquee>
    </div>
  );
}
