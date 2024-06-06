import clsx from "clsx"
import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect, useState} from "react"
import SplitType from "split-type"

import OneImg from "../../assets/images/price/1.svg"
import TwoImg from "../../assets/images/price/2.svg"
import ThreeImg from "../../assets/images/price/3.svg"
import FourImg from "../../assets/images/price/4.svg"
import DecorImg from "../../assets/images/price/decor.svg"
import TooltipImg from "../../assets/images/price/tooltip.svg"
import NavbarCustom from "../NavbarCustom"

import "./Price.scss"

const Price = () => {
  const [activeToggle, setActiveToggle] = useState(true)
  const animationDelay = 0.3;
  const items = [
    {
      undertext: "1x NVIDIA L40S GPU",
      price: activeToggle ? "€2.40" : "$2.80",
      priceSuffix: "/month",
      list: [
        { img: OneImg, text: "16vCPU memory" },
        { img: TwoImg, text: "48GB GPU memory" },
        { img: ThreeImg, text: "232GB RAM" },
        { img: FourImg, text: "4B–21B parameters", tooltip: TooltipImg }
      ],
      orderText: "Order Now"
    },
    {
      undertext: "2x NVIDIA L40S GPU",
      price: activeToggle ? "€9.30" : "$10.40",
      priceSuffix: "/month",
      list: [
        { img: OneImg, text: "96GB GPU memory" },
        { img: TwoImg, text: "32vCPU" },
        { img: ThreeImg, text: "464GB RAM" },
        { img: FourImg, text: "21B–41B parameters", tooltip: TooltipImg }
      ],
      orderText: "Order Now",
      center: true,
      decor: DecorImg
    },
    {
      undertext: "2x NVIDIA L40S GPU",
      price: activeToggle ? "€4.70" : "$5.40",
      priceSuffix: "/month",
      list: [
        { img: OneImg, text: "192GB GPU memory" },
        { img: TwoImg, text: "64vCPU" },
        { img: ThreeImg, text: "928GB RAM" },
        { img: FourImg, text: "41B–70B parameters", tooltip: TooltipImg }
      ],
      orderText: "Order Now"
    }
  ];

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ourText = new SplitType(".price__title", {types: "words"})
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
          trigger: ".price__title-wrapper",
          toggleActions: "restart none restart none",
        },
      },
    )
  }, [])
  const handleToggle = () => {
    setActiveToggle((prev) => !prev)
  }
  return (
    <section className="price">
      <div className="container">
        <div className="price__wrapper">
          <div className="faster__wrapper-relative">
            <NavbarCustom />
          </div>
          <div className="price-tabs">
            <button
              className={clsx(activeToggle ? "active" : "")}
              onClick={handleToggle}
            >
              €
            </button>
            <button
              className={clsx(activeToggle ? "" : "active")}
              onClick={handleToggle}
            >
              $
            </button>
          </div>
          <m.div
            initial={{scale: 1.3}}
            whileInView={{scale: 1}}
            transition={{duration: 1, ease: "easeInOut"}}
            className="price__title-wrapper"
          >
            <h2 className="price__title">
              Use dedicated GPUs to scale custom models and production apps
            </h2>
          </m.div>
          <div className="price__inner">
            {items.map((item, index) => (
              <m.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration:0.5,
                  ease: "easeInOut",
                  delay: index * animationDelay
                }}
                className={`price-item ${item.center ? "center" : ""}`}
              >
                {item.decor && <img src={item.decor} className="price-item__decor" alt="" />}
                <div className="price-item__undertext">{item.undertext}</div>
                <div className="price-item__price">
                  {item.price} <span>{item.priceSuffix}</span>
                </div>
                <ul className="price-item__list">
                  {item.list.map((listItem, idx) => (
                    <li key={idx} className="price-item__list-item">
                      <img src={listItem.img} alt="" />
                      <span>{listItem.text}</span>
                      {listItem.tooltip && <img src={listItem.tooltip} alt="" />}
                    </li>
                  ))}
                </ul>
                <a href="#" className="price-item__order">
                  {item.orderText}
                </a>
              </m.div>
            ))}
          </div>
          <div className="price-bottom">
            <p>
              Storage (Pod volume/container disk): 0.10 EUR for 1 GB per month
            </p>
            <p className="price-bottom__text">
              During the early beta period, Inference at the Edge is free! Until
              general availability, we recommend that you don’t use it for
              mission-critical tasks or production environments. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Price
