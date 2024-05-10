import {useGSAP} from "@gsap/react"
import {motion as m, useAnimation} from "framer-motion"
import {useRef} from "react"

import bg from "../../assets/images/stars.svg"
import {FONT_STYLES_SILVER} from "../../library/constants"
import {Arrow} from "../Icons/Arrow"

interface ButtonProps {
  children: React.ReactNode
  arrow?: boolean
  onClick?: () => void
}

const btnMotion = {
  background: [
    "linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(0deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box",
    "linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(180deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box",
    "linear-gradient(rgb(0 0 0 / 0.8), rgb(0 0 0 / 0.8)) padding-box, linear-gradient(360deg, rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 0.2), rgb(255 255 255 / 1)) border-box",
  ],
  transition: {repeat: Infinity, duration: 4},
}

const bgMotion = {
  background: [
    "linear-gradient(0deg, rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 0))",
    "linear-gradient(180deg, rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 0))",
    "linear-gradient(360deg, rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 1), rgb(0 0 0 / 0))",
  ],
  transition: {repeat: Infinity, duration: 4},
}

const Button = ({children, arrow, onClick}: ButtonProps) => {
  const refRoot = useRef<HTMLButtonElement>(null)

  const controls_bg = useAnimation()
  const controls_btn = useAnimation()

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: refRoot.current,
      start: `top bottom`,
      end: `bottom top`,
      // markers: true,

      onEnter() {
        controls_bg.start({
          ...bgMotion,
        })
        controls_btn.start({
          ...btnMotion,
        })
      },
      onEnterBack() {
        controls_bg.start({
          ...bgMotion,
        })
        controls_btn.start({
          ...btnMotion,
        })
      },
      onLeave() {
        controls_bg.stop()
        controls_btn.stop()
      },
      onLeaveBack() {
        controls_bg.stop()
        controls_btn.stop()
      },
    })
  }, [])

  return (
    <m.button
      className="relative py-2 px-4 lg:py-3 lg:px-5.5 border rounded-full border-transparent group z-0"
      onClick={onClick}
      // {...btnMotion}
      animate={controls_btn}
      ref={refRoot}
    >
      <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden -z-10">
        <img src={bg} alt="bg" className="w-full h-full object-cover" />
        <m.div
          className="absolute inset-0 w-full h-full"
          // {...bgMotion}
          animate={controls_bg}
        />
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/10 to-black/0 transition-all duration-1000" />
      </div>
      <div
        className={`flex items-center text-sm lg:text-base text-nowrap z-20 ${FONT_STYLES_SILVER}`}
      >
        {children}
        {arrow && <Arrow />}
      </div>
    </m.button>
  )
}

export {Button}
