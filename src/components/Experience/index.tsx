import {motion as m} from "framer-motion"
import gsap from "gsap"
import {useLayoutEffect, useState} from "react"
import SplitType from "split-type"

import AiImgOne from "../../assets/images/experience/ai-1.svg"
import AiImgTwo from "../../assets/images/experience/ai-2.svg"
import AiImgThree from "../../assets/images/experience/ai-3.svg"
import AiImgFour from "../../assets/images/experience/ai-4.svg"
import AiImgFive from "../../assets/images/experience/ai-5.svg"
import AiImgSix from "../../assets/images/experience/ai-6.svg"
import AiImgSeven from "../../assets/images/experience/ai-7.svg"
import AiImgEight from "../../assets/images/experience/ai-8.svg"
import LeftArrowImg from "../../assets/images/experience/arrow-left.svg"
import RightArrowImg from "../../assets/images/experience/arrow-right.svg"
import ItemImgFour from "../../assets/images/experience/item-four.svg"
import ItemImgOne from "../../assets/images/experience/item-one.svg"
import ItemImgThree from "../../assets/images/experience/item-three.svg"
import ItemImgTwo from "../../assets/images/experience/item-two.svg"
import NavbarCustom from "../NavbarCustom"

import "./Experience.scss"

const Experience = () => {
  const animationDelay = 0.3
  useLayoutEffect(() => {
    const ourText = new SplitType(".experience__title", {types: "words"})
    const chars = ourText.words
    gsap.fromTo(
      chars,
      {
        y: 50,
        opacity: 0,
        scale: 1.2,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        // duration: 2,
        // delay: 1,
        scale: 1,
        // ease: "linear",
      },
    )
  }, [])
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (inputValue.trim() === "") {
      setError("Input cannot be empty")
    } else {
      setError("")
      // Handle the form submission logic
      console.log("Form submitted with input:", inputValue)
    }
  }
  const handleChange = (e: any) => {
    setInputValue(e.target.value)
    if (error) {
      setError("")
    }
  }
  return (
    <section className="experience">
      <div className="experience__inner">
        <div className="container">
          <div className="experience__wrapper">
            <div className="faster__wrapper-relative">
              <NavbarCustom />
            </div>
            <div className="experience__wrapper-title-mob">
              <img src={LeftArrowImg} alt="" />
              <img src={RightArrowImg} alt="" />
            </div>
            <div className="experience__wrapper-title">
              <h2 className="experience__title">Experience it now</h2>
            </div>
            <p className="experience__text">
              Try Gcore Inference at the Edge for yourself using our playground.
            </p>
            <div className="experience__box-ia">
              {[
                {
                  img: AiImgOne,
                  alt: "Image 1",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgTwo,
                  alt: "Image 2",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgThree,
                  alt: "Image 3",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgFour,
                  alt: "Image 4",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgFive,
                  alt: "Image 5",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgSix,
                  alt: "Image 6",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgSeven,
                  alt: "Image 7",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
                {
                  img: AiImgEight,
                  alt: "Image 8",
                  label: "Image classification",
                  description: "@cf/meta/llama-3-8b-instruct",
                },
              ].map((item, index) => (
                <m.div
                  key={index}
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1}}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: index * animationDelay,
                  }}
                  className="experience__box-item"
                >
                  <a href="#" className="experience__box-link">
                    <img src={item.img} alt={item.alt} />
                  </a>
                  <div className="experience__box-item-content">
                    <h6>{item.label}</h6>
                    <p>{item.description}</p>
                  </div>
                </m.div>
              ))}
            </div>
            <div className="experience-content">
              <m.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.5 * animationDelay,
                }}
                className="experience-content__wrapper"
              >
                <div className="experience-content__top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width="40" height="40" rx="8" fill="#FF4C00" />
                    <path
                      d="M17.3448 22.7838H13.4155C13.12 22.7838 12.9013 22.6544 12.7595 22.3956C12.6177 22.1369 12.6381 21.8839 12.8207 21.6368L21.2383 9.71102C21.3631 9.54675 21.519 9.43408 21.7061 9.37302C21.8932 9.31198 22.0803 9.32143 22.2674 9.40137C22.4545 9.47405 22.6026 9.59617 22.7118 9.76771C22.8209 9.93926 22.8599 10.1224 22.8288 10.3172L21.8108 18.2481H26.5732C26.8954 18.2481 27.1226 18.387 27.2548 18.6647C27.3869 18.9423 27.352 19.2047 27.1501 19.4519L17.8771 30.344C17.7524 30.4967 17.5916 30.5959 17.3949 30.6417C17.1981 30.6875 17.0158 30.6704 16.848 30.5904C16.6728 30.5178 16.5373 30.3993 16.4415 30.235C16.3457 30.0707 16.3097 29.8876 16.3335 29.6855L17.3448 22.7838Z"
                      fill="white"
                    />
                  </svg>
                  <h6>Discover the AI Realm</h6>
                </div>
                <div className="experience-content__box">
                  {[
                    {
                      img: ItemImgOne,
                      alt: "Item 1",
                      title: "Text Generate",
                      description:
                        "A white rabbit on a black Harley Davidson riding down a desert road",
                    },
                    {
                      img: ItemImgTwo,
                      alt: "Item 2",
                      title: "Generate Image",
                      description:
                        "A white rabbit on a black Harley Davidson riding down a desert road",
                    },
                    {
                      img: ItemImgThree,
                      alt: "Item 3",
                      title: "Avatar Generate",
                      description:
                        "A white rabbit on a black Harley Davidson riding down a desert road",
                    },
                    {
                      img: ItemImgFour,
                      alt: "Item 4",
                      title: "Speech recognition",
                      description:
                        "A white rabbit on a black Harley Davidson riding down a desert road",
                    },
                  ].map((item, index) => (
                    <m.div
                      key={index}
                      initial={{y: 100, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: index >= 1 ? 0.5 * animationDelay : 0,
                      }}
                      className="experience-content__item"
                    >
                      <div className="experience-content__item-img">
                        <img src={item.img} alt={item.alt} />
                      </div>
                      <div className="experience-content__item-info">
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </m.div>
                  ))}
                </div>
                <m.div
                  initial={{y: 100, opacity: 0}}
                  whileInView={{y: 0, opacity: 1}}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.5 * animationDelay,
                  }}
                >
                  <form
                    className="experience-content__form"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Write..."
                      value={inputValue}
                      onChange={handleChange}
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L12.75 5.81066L17.4697 10.5303C17.7626 10.8232 18.2374 10.8232 18.5303 10.5303C18.8232 10.2374 18.8232 9.76256 18.5303 9.46967L12.5303 3.46967C12.3897 3.32902 12.1989 3.25 12 3.25C11.8011 3.25 11.6103 3.32902 11.4697 3.46967L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303C5.76256 10.8232 6.23744 10.8232 6.53033 10.5303L11.25 5.81066L11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
                          fill="#060607"
                          stroke="black"
                          strokeWidth="0.5"
                        />
                      </svg>
                    </button>
                  </form>
                  {error && <p style={{color: "red"}}>{error}</p>}
                </m.div>
                <p className="experience-content__text">
                  Free Research Preview. May produce inaccurate information
                  about people, places, or facts.
                </p>
              </m.div>
              <p className="experience-content__text mob">
                Free Research Preview. May produce inaccurate information about
                people, places, or facts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
