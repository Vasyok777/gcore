import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef, useState} from "react"
import SplitType from "split-type"

import "./Asked.scss"
import AskedItem from "./AskedItem"

gsap.registerPlugin(ScrollTrigger)

const Asked = () => {
  const questions = [
    {
      id: 1,
      question: "What is AI inference? ",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 2,
      question:
        "What is the difference between AI inference at the edge and in the cloud?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 3,
      question:
        "What are the key benefits of Gcore Inference at the Edge for end users?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. ",
    },
    {
      id: 4,
      question: "Is Gcore Inference at the Edge suitable for AIoT systems?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.",
    },
    {
      id: 5,
      question: "Why is the NVIDIA L40S GPU good for AI inference?",
      answer:
        "It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection. It’s particularly useful for AI apps that need immediate processing and minimal delay, like generative AI and real-time object detection.",
    },
  ]
  const [active, setActive] = useState<null | any>(null)

  const handleToggle = (index: number) => {
    if (active === index) {
      setActive(null)
    } else {
      setActive(index)
    }
  }
  const askedItemRef = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const targets = ".asked__box-item"

      gsap.from(targets, {
        yPercent: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.7,
        ease: "linear",
        paused: true,
        scrollTrigger: {
          trigger: ".asked__box-item",
          toggleActions: "restart none none none",
        },
      })
    }, askedItemRef)

    return () => ctx.revert()
  }, [])
  useLayoutEffect(() => {
    const ourText = new SplitType(".asked__title", {types: "words"})
    const chars = ourText.words
    const tl = gsap.timeline()
    gsap.fromTo(
      chars,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.6,
        duration: 0.5,
        ease: "linear",
        scrollTrigger: {
          trigger: ".asked__title-wrapper",
          markers: true,
          toggleActions: "restart none restart none",
        },
      },
    )
  }, [])
  return (
    <section className="asked" ref={askedItemRef}>
      <div className="container">
        <div className="asked__wrapper">
          <m.div
            initial={{scale: 1.1}}
            whileInView={{scale: 1}}
            transition={{duration: 1, delay: 1, ease: "easeInOut"}}
            className="asked__title-wrapper"
          >
            <h2 className="asked__title">Frequently asked questions </h2>
          </m.div>
          <div className="asked__box">
            {questions.map((question, index) => (
              <AskedItem
                key={index}
                active={active}
                className="asked__box-item"
                handleToggle={handleToggle}
                faq={question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Asked
