import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef, useState} from "react"
import SplitType from "split-type"

import ToggleOneImg from "../../assets/images/faster/togle-one.svg"
import ToggleTwoImg from "../../assets/images/faster/togle-two.svg"
import NavbarCustom from "../NavbarCustom"

import "./Faster.scss"
import OneContent from "./OneContent"
import TwoContent from "./TwoContent"

const Faster = () => {
  const [state, setState] = useState(1)
  const fasterRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const ourText = new SplitType(".faster__title", {types: "words"})
      const chars = ourText.words
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
            trigger: fasterRef.current,
            start: "top bottom",
            end: "bottom top",
            toggleActions: "restart none restart none",
          },
        },
      )
    }, fasterRef)

    return () => ctx.revert()
  }, [])

  const handleClickOne = () => {
    setState(1)
  }

  const handleClickTwo = () => {
    setState(2)
  }

  return (
    <section className="faster" ref={fasterRef}>
      <div className="container">
        <div className="faster__wrapper">
          <div className="faster__wrapper-relative">
            <NavbarCustom />
          </div>
          <div className="faster-toggle">
            <button
              className={`faster-toggle__button ${state === 1 ? "active" : ""}`}
              onClick={handleClickOne}
            >
              <img src={ToggleOneImg} alt="" />
              <span>What is?</span>
            </button>
            <button
              className={`faster-toggle__button ${state === 2 ? "active" : ""}`}
              onClick={handleClickTwo}
            >
              <img src={ToggleTwoImg} alt="" />
              <span>How it works?</span>
            </button>
          </div>
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 0.5, ease: "easeIn"}}
            className="faster__title-wrapper"
          >
            <h2 className="faster__title">
              Use AI faster and more efficiently right on your device!
            </h2>
          </m.div>
        
          <m.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="faster-content"
          >
            {state === 1 ? <OneContent /> : <TwoContent />}
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Faster
