import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect} from "react"
import SplitType from "split-type"
import { motion as m } from "framer-motion";

import OneImg from "../../assets/images/flexible/1.png"
import TwoImg from "../../assets/images/flexible/2.png"
import ThreeImg from "../../assets/images/flexible/3.png"
import FourImg from "../../assets/images/flexible/4.png"
import FiveImg from "../../assets/images/flexible/5.png"
import SixImg from "../../assets/images/flexible/6.png"

import "./Flexible.scss"

gsap.registerPlugin(ScrollTrigger)

const Flexible = () => {
  const animationDelay = 0.3;
  const items = [
    { img: OneImg, alt: "Image 1", title: "IT / Technology", content: [
      "Generative AI applications",
      "Chatbots and virtual assistants",
      "AI tools for software engineers",
      "AI tools for software engineers",
    ]},
    { img: TwoImg, alt: "Image 2", title: "Retail", content: [
      "Smart grocery with self-checkout and merchandising",
      "Real-time user behavior analysis and active feedback: content generation, predictions, recommendations",
    ]},
    { img: ThreeImg, alt: "Image 3", title: "Automotive", content: [
      "Fast response to changes in road conditions and incidents in self-driving vehicles",
      "Advanced driver assistants",
      "Vehicle personalization",
    ]},
    { img: FourImg, alt: "Image 4", title: "Gaming", content: [
      "AI content and map generation",
      "AI bot real-time customization and conversation",
      "Real-time player analytics",
    ]},
    { img: FiveImg, alt: "Image 5", title: "Hospitality", content: [
      "Personalized destination and accommodation recommendations",
      "Smart inventory management",
      "Efficiency improvements in areas like waste reduction and energy management",
    ]},
    { img: SixImg, alt: "Image 6", title: "Manufacturing", content: [
      "Real-time defect detection in production pipelines",
      "Rapid response feedback",
      "AI tools for software engineers",
      "Prevention of bottlenecks",
    ]},
  ];

  useLayoutEffect(() => {
    const ourText = new SplitType(".flexible__title", {types: "words"})
    const chars = ourText.words
    const tl = gsap.timeline()
    tl.fromTo(".flexible-title__wrapper", {scale: 1.1}, {scale: 1, duration: 0.5})
    gsap.fromTo(
      chars,
      {
        y: 20,
        opacity: 0,
        // scale: 1.1,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        // duration: 2,
        // delay: 1,
        scale: 1,
        ease: "linear",
      },
    )
    // ScrollTrigger.create({
    //   trigger: ".flexible__inner",
    //   start: "top top",
    //   end: "+=1000px",
    //   invalidateOnRefresh: true,
    //   pin: true,
    //   pinSpacing: false,
    //   anticipatePin: 1,
    //   toggleActions: "play none reverse none",
    // })
  }, [])
  return (
    <section className="flexible">
      <div className="container">
        <div className="flexible__wrapper">
          <div className="flexible__undertitle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.299 5.51108L13.4412 2.2335C12.7137 1.88218 11.8561 1.92972 11.1717 2.35979L4.09521 6.81599C3.41086 7.24607 2.99651 7.99997 3.00002 8.80778L3.0261 16.386C3.02968 17.2818 3.54341 18.0981 4.35005 18.4889L11.2079 21.7665C11.9353 22.1178 12.793 22.0703 13.4773 21.6402L20.5538 17.1839C21.2382 16.7538 21.6525 16 21.649 15.1922L21.6357 11.1179L21.6244 7.61399C21.6209 6.71816 21.1071 5.90194 20.3019 5.51255L20.299 5.51108Z"
                stroke="white"
                strokeWidth="1.03157"
                strokeMiterlimit="10"
              />
              <g opacity="0.8">
                <path
                  d="M10.6229 19.1017L5.73307 16.7639C5.23315 16.5216 4.90761 16.0048 4.90587 15.4478L4.88721 9.97607"
                  stroke="white"
                  strokeWidth="0.825253"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6.76611 9.61313L10.972 11.6476C11.4693 11.8938 11.7922 12.4094 11.7939 12.965L11.8107 17.7838"
                  stroke="white"
                  strokeWidth="0.825253"
                  strokeMiterlimit="10"
                />
                <path
                  d="M4.89879 12.2375L4.89014 9.519C4.88996 9.27512 5.05911 9.1417 5.13237 9.09502C5.20562 9.04963 5.40012 8.95361 5.62008 9.06003L7.01318 9.7333"
                  stroke="white"
                  strokeWidth="0.825253"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.8032 15.9274L11.8133 18.9058C11.8135 19.1483 11.6551 19.275 11.5872 19.3177C11.5192 19.3605 11.3367 19.4499 11.1181 19.3434L8.03857 17.8744"
                  stroke="white"
                  strokeWidth="0.825253"
                  strokeMiterlimit="10"
                />
              </g>
            </svg>
            Model serving, your way
          </div>
          <div className="flexible-title__wrapper">
            <h2 className="flexible__title">
              A flexible solution <br /> for diverse use cases
            </h2>
          </div>
          <div className="flexible__inner">
            {items.map((item, index) => (
              <m.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: index * animationDelay
                }}
                className="flexible__item"
              >
                <div className="flexible__item-img">
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className="flexible__item-content">
                  <h6>{item.title}</h6>
                  <ul>
                    {item.content.map((text, idx) => (
                      <li key={idx}>{text}</li>
                    ))}
                  </ul>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Flexible
