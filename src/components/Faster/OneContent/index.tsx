import {motion} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"
import SplitType from "split-type"

import ImgFiveSvg from "../../../assets/images/faster/five-svg.svg"
import ImgFourSvg from "../../../assets/images/faster/four-svg.svg"
import ImgOneSvg from "../../../assets/images/faster/one-svg.svg"
import ImgSevenSvg from "../../../assets/images/faster/seven-svg.svg"
import ImgSixSvg from "../../../assets/images/faster/six-svg.svg"
import ImgThreeSvg from "../../../assets/images/faster/three-svg.svg"
import ImgTwoSvg from "../../../assets/images/faster/two-svg.svg"
import FasterVideo from "../../../assets/video/faster.MP4"

import "./OneContent.scss"

const OneContent = () => {
  const fasterOneRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const linesText = new SplitType(".faster-one__right-title", {
        types: "lines",
      })
      const linesTextVideo = new SplitType(".faster-one__video-text", {
        types: "lines",
      })
      const chart = new SplitType(".faster-one__right-text", {
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
          delay: 0.5,
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
          delay: 0.5,
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
          delay: 0.5,
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
  const itemVariants = {
    hidden: {x: 100, opacity: 0},
    visible: (i: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.3 + 1.3,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  }
  const itemsOne = [
    {imgSrc: ImgOneSvg, text: "Text generation"},
    {imgSrc: ImgTwoSvg, text: "Image generation"},
    {imgSrc: ImgThreeSvg, text: "Image classification"},
    {imgSrc: ImgFourSvg, text: "Speech recognition"},
    {imgSrc: ImgFiveSvg, text: "Text generation"},
  ]

  const itemsTwo = [
    {imgSrc: ImgFourSvg, text: "Speech recognition"},
    {imgSrc: ImgFiveSvg, text: "Text generation"},
    {imgSrc: ImgSixSvg, text: "Speech recognition"},
    {imgSrc: ImgOneSvg, text: "Text generation"},
    {imgSrc: ImgTwoSvg, text: "Image generation"},
    {imgSrc: ImgThreeSvg, text: "Image classification"},
  ]

  const itemsThree = [
    {imgSrc: ImgTwoSvg, text: "Image generation"},
    {imgSrc: ImgThreeSvg, text: "Image classification"},
    {imgSrc: ImgFourSvg, text: "Speech recognition"},
    {imgSrc: ImgSixSvg, text: "Speech recognition"},
    {imgSrc: ImgSevenSvg, text: "Text generation"},
    {imgSrc: ImgOneSvg, text: "Text generation"},
    {imgSrc: ImgFiveSvg, text: "Text generation"},
  ]

  return (
    <div className="faster-one" ref={fasterOneRef}>
      <div className="faster-one__left">
        {/* <img src={ImgOneContent} alt="" /> */}
        <video
          className="faster-one__video"
          src={FasterVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <p className="faster-one__video-text">
          Try Gcore Inference at the Edge: Speed up AI, reduce latency.
        </p>
      </div>
      <div className="faster-one__right">
        <div className="faster-one__right-top">
          <h6 className="faster-one__right-title">
            Gcore Inference at the Edge reduces the latency of your ML model
            output and improves the performance of AI-enabled applications.{" "}
          </h6>
          <p className="faster-one__right-text">
            It’s particularly useful for AI apps that need immediate processing
            and minimal delay, like generative AI and real-time object
            detection. 
          </p>
        </div>
        <div className="faster-one__right-bottom">
          <div className="faster-one__right-one">
            {itemsOne.map((item, index) => (
              <motion.div
                key={index}
                className="faster-one__right-item"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
              >
                <div className="faster-one__right-item-img">
                  <img src={item.imgSrc} alt="" />
                </div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="faster-one__right-two">
            {itemsTwo.map((item, index) => (
              <motion.div
                key={index}
                className="faster-one__right-item"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
              >
                <div className="faster-one__right-item-img">
                  <img src={item.imgSrc} alt="" />
                </div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="faster-one__right-three">
            {itemsThree.map((item, index) => (
              <motion.div
                key={index}
                className="faster-one__right-item"
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
              >
                <div className="faster-one__right-item-img">
                  <img src={item.imgSrc} alt="" />
                </div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default OneContent
