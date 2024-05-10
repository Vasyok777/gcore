import {useGSAP} from "@gsap/react"
import {motion as m, useAnimation} from "framer-motion"
import {useRef} from "react"

import arrowDown from "../../assets/images/intro/arrow-down.svg"
import circleBtn from "../../assets/images/intro/circle-btn.png"
import lineWaves from "../../assets/video/line-waves.mp4"
import {noon} from "../../data/data"
import {scrollDownToSection} from "../../library/Functions"
import {FONT_STYLES_SILVER} from "../../library/constants"
import {INoon} from "../../library/types"
import {ButtonTransparent} from "../ButtonTransparent/ButtonTransparent"

const TitleMotion = {
  backgroundImage: [
    "linear-gradient(0deg, #2F80F4, #E8D3BE, #E8D3BE)",
    "linear-gradient(360deg, #2F80F4, #E8D3BE, #E8D3BE)",
    "linear-gradient(0deg, #2F80F4, #E8D3BE, #E8D3BE)",
  ],
  transition: {repeat: Infinity, duration: 6},
}

const TitleMotion2 = {
  filter: "blur(30px)",
  scaleY: 1.2,
  backgroundImage: [
    "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0.01%, rgba(255, 255, 255, 1) 0.01%, rgba(255, 255, 255, 0.00) 40%)",
    "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 60%, rgba(255, 255, 255, 1) 99.99%, rgba(255, 255, 255, 0.00) 100%)",
    "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 60%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.00) 100%)",
  ],
  transition: {delay: 1.4, duration: 6},
}

export const Intro = () => {
  const refRoot = useRef<HTMLDivElement>(null)
  const refHeader = useRef<HTMLDivElement>(null)
  const refVideo = useRef<HTMLVideoElement>(null)

  const controls_1 = useAnimation()
  // const controls_2 = useAnimation()

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: refRoot.current,
      start: `top bottom`,
      end: `bottom top`,
      // markers: true,

      onEnter() {
        refVideo.current?.play()
      },
      onEnterBack() {
        refVideo.current?.play()
      },
      onLeave() {
        refVideo.current?.pause()
      },
      onLeaveBack() {
        refVideo.current?.pause()
      },
    })

    ScrollTrigger.create({
      trigger: refHeader.current,
      start: `top bottom`,
      end: `bottom top`,
      // markers: true,

      onEnter() {
        controls_1.start({
          ...TitleMotion,
        })
        // controls_2.start({
        //   ...TitleMotion2,
        // })
      },
      onEnterBack() {
        controls_1.start({
          ...TitleMotion,
        })
        // controls_2.start({
        //   ...TitleMotion2,
        // })
      },
      onLeave() {
        controls_1.stop()
        // controls_2.stop()
      },
      onLeaveBack() {
        controls_1.stop()
        // controls_2.stop()
      },
    })
  }, [])

  return (
    <div className="relative w-full h-svh mb-35 lg:mb-42" ref={refRoot}>
      <video
        className="absolute top-62 left-0 w-full h-svh object-cover"
        src={lineWaves}
        muted
        loop
        playsInline
        ref={refVideo}
      />

      <div className="relative container h-svh flex flex-col items-center justify-between z-10 pt-52 mb-40 mx-auto">
        <div
          className="relative flex flex-col items-center justify-center"
          ref={refHeader}
        >
          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.6}}
          >
            <m.div
              className="absolute inset-0 flex mb-4 bg-clip-text text-transparent z-0"
              {...TitleMotion2}
              // animate={controls_2}
            >
              {noon.map((item: INoon) => (
                <m.span
                  key={item.id}
                  className="text-[6.625rem] lg:text-[11.25rem] leading-none"
                >
                  {item.title}
                </m.span>
              ))}
            </m.div>
          </m.div>

          <m.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1, duration: 0.6}}
          >
            <m.div
              className="flex mb-4 bg-clip-text text-transparent z-20"
              // {...TitleMotion}
              animate={controls_1}
            >
              {noon.map((item: INoon) => (
                <m.span
                  key={item.id}
                  className="text-[6.625rem] lg:text-[11.25rem] leading-none"
                >
                  {item.title}
                </m.span>
              ))}
            </m.div>
          </m.div>

          <m.div className="absolute inset-0 flex mb-4">
            {noon.map((item: INoon) => (
              <m.span
                initial={{
                  opacity: 0,
                  filter: "blur(12px)",
                  x: item.x,
                  scale: 1.2,
                }}
                animate={{
                  opacity: [1, 1, 0],
                  filter: ["blur(12px)", "blur(8px)", "blur(0px)"],
                  x: [item.x, 0, 0],
                  scale: [1.2, 1, 1],
                }}
                transition={{
                  duration: 1.6,
                  delay: item.id * 0.1,
                  ease: "easeInOut",
                }}
                key={item.id}
                className="text-[6.625rem] lg:text-[11.25rem] leading-none"
              >
                {item.title}
              </m.span>
            ))}
          </m.div>

          <m.p
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 1, ease: "easeInOut"}}
            className="text-white text-base lg:text-lg text-center max-w-67 lg:max-w-75 mb-6.5 lg:mb-10"
          >
            The most powerful AI ever deployed in talent acquistion
          </m.p>

          <m.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.4, delay: 1.2, ease: "easeInOut"}}
          >
            <ButtonTransparent arrow>Get Started</ButtonTransparent>
          </m.div>
        </div>

        <div className="pb-8">
          <m.a
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: 1.4, ease: "easeInOut"}}
            className="hidden md:block"
            href="/"
          >
            <p className="text-center text-white text-base lg:text-lg">
              Noon.ai
            </p>
          </m.a>

          <button
            className={`
              relative w-20 h-20 md:hidden flex flex-col items-center justify-center rounded-full backdrop-blur-sm mb-8 p-2
              ${FONT_STYLES_SILVER} hover:text-white group
            `}
            onClick={() => scrollDownToSection("About")}
          >
            <p className="text-sm leading-none">Scroll Down</p>
            <img
              src={arrowDown}
              alt="arrow down"
              className="w-5 h-5 group-hover:mt-1"
            />
            <m.img
              initial={{rotate: 0}}
              whileInView={{rotate: 360}}
              transition={{duration: 0.8, delay: 1.6, ease: "easeInOut"}}
              src={circleBtn}
              alt="Circle Btn"
              className="absolute top-0 left-0"
            />
          </button>
        </div>
      </div>
      <div className="absolute -bottom-62 left-0 w-full h-[40vh] bg-gradient-to-t from-black from-20% to-black/0" />
      <div className="absolute top-43 left-0 w-full h-[50vh] bg-gradient-to-t from-black/0 to-black to-90%" />
    </div>
  )
}
