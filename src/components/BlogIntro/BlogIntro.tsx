import {useGSAP} from "@gsap/react"
import {Player} from "@lottiefiles/react-lottie-player"
import {useRef} from "react"

import lottieGlowline from "../../library/lottie/lottie Glow line 1.json"

const BlogIntro = () => {
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
    <section className="relative pt-65 md:pt-67 pb-15 md:pb-24" ref={refRoot}>
      <Player
        className="
        absolute top-0 sm:-top-20 md:-top-40 lg:-top-30 xl:-top-60 left-[50%] translate-x-[-50%]
        rotate-180 w-[160vw] lg:w-[120vw] xl:w-[100vw] h-auto object-cover -z-20
        "
        src={lottieGlowline}
        loop
        ref={refLottie}
      />

      <div className="container max-w-[28rem] mx-auto">
        <h1 className="text-center text-[58px] mb-5 md:mb-6">Blog</h1>
        <p className="text-center text-lg text-[#54565B]">
          Keeping up with the most recent trends in talent acquisition and
          recruiting
        </p>
      </div>
    </section>
  )
}

export {BlogIntro}
