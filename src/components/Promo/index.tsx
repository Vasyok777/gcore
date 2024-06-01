import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"
import SplitType from "split-type"

import PromoBgMobImg from "../../assets/images/promo/mob-bg.png"
import StarImg from "../../assets/images/promo/star.svg"
import VideoPromo from "../../assets/video/promo.mp4"

import "./Promo.scss"

const Promo = () => {
  const promoRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const ourText = new SplitType(".promo__title", {types: "words"})
      const linesText = new SplitType(".promo__text", {types: "lines"})
      const chars = ourText.words
      const charsLines = linesText.lines
      gsap.fromTo(
        chars,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 0.4,
          ease: "linear",
          toggleActions: "restart none restart none",
          // scrollTrigger: {
          // trigger: ".promo",
          // start: "top top",
          // },
        },
      )
      gsap.fromTo(
        charsLines,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 0.4,
          delay: 0.3,
          ease: "linear",
          toggleActions: "restart none restart none",
          // scrollTrigger: {
          //   trigger: ".promo",
          // },
        },
      )
    }, promoRef)

    return () => ctx.revert()
  }, [])
  return (
    <section className="promo" ref={promoRef}>
      <video
        className="promo__bg-video"
        src={VideoPromo}
        autoPlay
        muted
        loop
        playsInline
      />
      <img className="promo__bg-mob" src={PromoBgMobImg} alt="" />
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__undertitle">
            <img src={StarImg} alt="" />
            <p>Beta release</p>
          </div>
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 1, ease: "easeIn"}}
            className="promo__title-wrapper"
          >
            <h1 className="promo__title">Inference at the Edge</h1>
          </m.div>
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 1, ease: "easeIn"}}
            className="promo__text-wrapper"
          >
            <p className="promo__text">
              Boost your AI application’s speed and efficiency globally by
              bringing inference closer to your users. Enjoy customization and
              cost-efficiency for a best-in-class inference experience.
            </p>
          </m.div>
          <div className="promo__buttons">
            <m.a
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1, ease: "easeInOut"}}
              href="#"
              className="btn-accent"
            >
              Get started
            </m.a>
            <m.a
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1, delay: 0.2, ease: "easeInOut"}}
              href="#"
              className="promo__btn"
            >
              Book a demo
            </m.a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Promo
