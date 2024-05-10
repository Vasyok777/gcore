import {useGSAP} from "@gsap/react"
import {Player} from "@lottiefiles/react-lottie-player"
import {motion as m} from "framer-motion"
import {useRef} from "react"

import comet2 from "../../assets/images/welcome/comet2.svg"
import comet from "../../assets/images/welcome/comet.svg"
import welcomeBg from "../../assets/images/welcome/welcome-bg.png"
import {titleItems} from "../../data/data"
import lottieGlowline from "../../library/lottie/lottie Glow line 1.json"
import {Title} from "../Title/Title"

const Welcome = () => {
  const refRoot = useRef<HTMLDivElement>(null)
  const refLottie = useRef<Player>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: refRoot.current,
      start: `top bottom`,
      end: `bottom top`,
      // markers: true,

      onEnter() {
        refLottie.current?.play()
      },
      onEnterBack() {
        refLottie.current?.play()
      },
      onLeave() {
        refLottie.current?.pause()
      },
      onLeaveBack() {
        refLottie.current?.pause()
      },
    })
  }, [])

  return (
    <section
      className="relative pt-24 lg:pt-32 pb-24 lg:pb-[13rem] Service"
      id="Service"
      ref={refRoot}
    >
      <m.img
        initial={{opacity: 0, x: 100, y: -200}}
        whileInView={{opacity: [0, 1, 0], x: -2000, y: 1500}}
        transition={{delay: 2, duration: 4}}
        src={comet}
        alt="Comet"
        className="absolute top-40 md:top-0 right-0 -z-50"
      />

      <m.img
        initial={{opacity: 0, x: -100, y: -200}}
        whileInView={{opacity: [0, 1, 0], x: 2000, y: 300}}
        transition={{delay: 5, duration: 2}}
        src={comet2}
        alt="Comet"
        className="absolute top-60 md:top-0 left-0 -z-50"
      />

      <Player
        className="absolute -bottom-[9rem] md:-bottom-[22rem] lg:-bottom-[30rem] xl:-bottom-[38rem] left-[50%] translate-x-[-50%] w-[160vw] h-auto object-cover -z-20"
        src={lottieGlowline}
        loop
        ref={refLottie}
      />

      <m.img
        initial={{opacity: 0.1}}
        whileInView={{opacity: 1}}
        transition={{delay: 1, duration: 1}}
        src={welcomeBg}
        alt="Background"
        className="absolute bottom-12 left-[50%] translate-x-[-50%] w-full h-auto object-cover -z-0"
      />

      <div className="container max-w-[790px] mx-auto">
        <Title props={titleItems[1]} />
      </div>
    </section>
  )
}

export {Welcome}
