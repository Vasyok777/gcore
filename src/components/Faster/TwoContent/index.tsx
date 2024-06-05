import {useLayoutEffect, useRef, useState} from "react"
import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import FasterOne from "../../../assets/images/faster/box-1.svg"
import FasterTwo from "../../../assets/images/faster/box-2.svg"
import FasterThree from "../../../assets/images/faster/box-3.svg"
import FasterFour from "../../../assets/images/faster/box-4.svg"
import FasterFive from "../../../assets/images/faster/box-5.svg"
import FasterSix from "../../../assets/images/faster/box-6.svg"
import LampImg from "../../../assets/images/faster/lamp.svg"
import ImgTwo from "../../../assets/images/faster/tabs-two.png"

import FasterMiniLine from "./FasterMiniLine"
import FasterMiniLineMob from "./FasterMiniLineMob"
import "./TwoContent.scss"
import SplitType from "split-type"

const TwoContent = () => {
  const [isClassAdded, setIsClassAdded] = useState(false)
  const handleClick = () => {
    setIsClassAdded((prev) => !prev)
  }
  const fasterOneRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const linesText = new SplitType(".faster-two__left h6", {
        types: "lines",
      })
      const linesTextVideo = new SplitType(".faster-two__left-text", {
        types: "lines",
      })
      const chart = new SplitType(".faster-two__left-text-bottom p", {
        types: "lines",
      })
      const charsLines = linesText.lines
      const charsLinesVideo = linesTextVideo.lines
      const chars = chart.lines
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
          delay: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: fasterOneRef.current,
            toggleActions: "restart none restart none",
          },
        },
      )
      gsap.fromTo(
        charsLinesVideo,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.2,
          duration: 0.4,
          delay: 1.5,
          ease: "linear",
          scrollTrigger: {
            trigger: fasterOneRef.current,
            toggleActions: "restart none restart none",
          },
        },
      )
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
          delay: 1.5,
          ease: "linear",
          scrollTrigger: {
            trigger: fasterOneRef.current,
            toggleActions: "restart none restart none",
          },
        },
      )
    }, fasterOneRef)

    return () => ctx.revert()
  }, [])
  return (
    <div className="faster-two">
      <m.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="faster-two__left"
      >
        <h6>
          Here’s an example of how Inference at the Edge works in European
          locations. The approach is broadly relevant worldwide.
        </h6>
        <p className="faster-two__left-text">
          When a user sends a query, an edge node defines the route to the
          closest available inference region with the lowest latency. In the
          example, an end user in Middelburg connects to the ML model in the
          nearby Amsterdam inference region, whereas an end user in Schweinfurt
          is routed to Frankfurt (see “Basic query-result route.”)  
        </p>
        <m.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="faster-two__left-text-bottom"
        >
          <p>
            If the Amsterdam region is unavailable for some reason, its edge
            node will redirect the user’s query to the next closest region in
            Frankfurt (see “Alternative query-result route.”)
          </p>
        </m.div>
      </m.div>
      <m.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="faster-two__right"
      >
        <img src={ImgTwo} alt="" className="faster-two__right-img" />
        <div className="faster-two__right-box">
          <div
            className={`faster-two__right-content ${isClassAdded ? "active" : ""}`}
          >
            <div className="faster-two__right-item">
              <h6>Frankfurt edge node</h6>
              <div className="faster-node__box">
                <div className="faster-node__box-one">
                  <div className="faster-basic">
                    <img src={FasterOne} alt="" />
                    <p>NVIDIAL40S GPU</p>
                  </div>
                  <FasterMiniLine />
                  <FasterMiniLineMob />
                  <div className="faster-basic__flex">
                    <div className="faster-basic">
                      <img src={FasterTwo} alt="" />
                      <p>Local storage</p>
                    </div>
                    <div className="faster-basic">
                      <img src={FasterThree} alt="" />
                      <p>K8s</p>
                    </div>
                  </div>
                  <FasterMiniLine />
                  <FasterMiniLineMob />
                  <div className="faster-basic">
                    <img src={FasterFour} alt="" />
                    <p>Pod with ML model</p>
                  </div>
                </div>
                <div className="faster-mob__block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="faster-left"
                  >
                    <path
                      d="M4.30176 2.00023L8.10509 5.80357C8.55426 6.25273 8.55426 6.98773 8.10509 7.4369L4.30176 11.2402"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg
                    className="faster-bottom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="33"
                    viewBox="0 0 20 33"
                    fill="none"
                  >
                    <path
                      d="M20 30L15 27.1133V32.8868L20 30ZM0.5 0V23H1.5V0H0.5ZM8 30.5H15.5V29.5H8V30.5ZM0.5 23C0.5 27.1421 3.85786 30.5 8 30.5V29.5C4.41015 29.5 1.5 26.5899 1.5 23H0.5Z"
                      fill="white"
                    />
                  </svg>
                  <div className="faster-node__model">
                    <img src={FasterFive} alt="" />
                    <p>
                      Model image
                      <br /> registry
                    </p>
                  </div>
                  <div className="faster-node__s-line mob-bottom">
                    <FasterMiniLine />
                  </div>
                  <div className="faster-node__s">
                    <img src={FasterSix} alt="" />
                    <p>S3</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faster-node__line"></div>
          </div>
          <div className="faster-two__right-top" onClick={() => handleClick()}>
            <div>
              <img src={LampImg} alt="" />
            </div>
            <p>Amsterdam edge node</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.6801 13.9802L15.4701 10.7702L13.5101 8.80023C12.6801 7.97023 11.3301 7.97023 10.5001 8.80023L5.32007 13.9802C4.64007 14.6602 5.13007 15.8202 6.08007 15.8202H11.6901H17.9201C18.8801 15.8202 19.3601 14.6602 18.6801 13.9802Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </m.div>
    </div>
  )
}
export default TwoContent
