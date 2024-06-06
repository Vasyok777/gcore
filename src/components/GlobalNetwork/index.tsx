import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"
import SplitType from "split-type"

import GlobalImg from "../../assets/images/global_nerwork/gloge.svg"

import "./GlobalNetwork.scss"

const GlobalNetwork = () => {
  const globalNetworkRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const ourText = new SplitType(".global-network__title", {types: "words"})
      const linesText = new SplitType(".global-network__text", {types: "lines"})
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
          scrollTrigger: {
            trigger: globalNetworkRef.current,
            toggleActions: "restart none restart none",
          },
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
          stagger: 0.3,
          duration: 0.4,
          delay: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: globalNetworkRef.current,
            toggleActions: "restart none restart none",
          },
        },
      )
    }, globalNetworkRef)

    return () => ctx.revert()
  }, [])
  return (
    <section className="global-network" ref={globalNetworkRef}>
      <div className="container">
        <div className="global-network__wrapper">
          <div className="global-network__top">
            <div className="global-network__top-img">
              <img src={GlobalImg} alt="" />
            </div>
            <p>Global Network</p>
          </div>
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 0.5, ease: "easeIn"}}
            className="global-network__title-wrapper"
          >
            <h2 className="global-network__title">
              A truly global network for lightning-fast inference 
            </h2>
          </m.div>
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 0.5, ease: "easeIn"}}
          >
            <p className="global-network__text">
              Gcore global network consists of more than 160 locations, allowing
              you to reach your users anywhere in the world.
            </p>
          </m.div>
          <div>
            <video
              src="/src/assets/video/planet.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <m.div
            initial={{y: 40, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, ease: "easeIn"}}
          >
            <div className="global-network__bottom">
              <div className="global-network__bottom-box">
                Active locations
                <div className="global-network__bottom-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="4"
                    viewBox="0 0 6 4"
                    fill="none"
                  >
                    <path d="M3 0L6 4H0L3 0Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="global-network__bottom-box">
                Planned locations
                <div className="global-network__bottom-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="4"
                    viewBox="0 0 6 4"
                    fill="none"
                  >
                    <path d="M3 4L6 0H0L3 4Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}
export default GlobalNetwork
