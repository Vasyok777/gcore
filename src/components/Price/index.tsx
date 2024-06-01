import {motion as m} from "framer-motion"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect} from "react"
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
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    const ourText = new SplitType(".price__title", {types: "words"})
    const chars = ourText.words
    const tl = gsap.timeline()
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
  return (
    <section className="price">
      <div className="container">
        <div className="price__wrapper">
          <div className="faster__wrapper-relative">
            <NavbarCustom />
          </div>
          <div className="price-tabs">
            <button className="active">€</button>
            <button>$</button>
          </div>
          <m.div
            initial={{scale: 1.3}}
            whileInView={{scale: 1}}
            transition={{duration: 2, ease: "easeInOut"}}
            className="price__title-wrapper"
          >
            <h2 className="price__title">
              Use dedicated GPUs to scale custom models and production apps
            </h2>
          </m.div>
          <div className="price__inner">
            <div className="price-item">
              <div className="price-item__undertext">1x NVIDIA L40S GPU</div>
              <div className="price-item__price">
                €2.40 <span>/month</span>
              </div>
              <ul className="price-item__list">
                <li className="price-item__list-item">
                  <img src={OneImg} alt="" />
                  <span>16vCPU memory</span>
                </li>
                <li className="price-item__list-item">
                  <img src={TwoImg} alt="" />
                  <span>48GB GPU memory</span>
                </li>
                <li className="price-item__list-item">
                  <img src={ThreeImg} alt="" />
                  <span>232GB RAM</span>
                </li>
                <li className="price-item__list-item">
                  <img src={FourImg} alt="" />
                  <span> 4B–21B parameters</span>
                  <img src={TooltipImg} alt="" />
                </li>
              </ul>
              <a href="#" className="price-item__order">
                Order Now
              </a>
            </div>
            <div className="price-item center">
              <img src={DecorImg} className="price-item__decor" alt="" />
              <div className="price-item__undertext">2x NVIDIA L40S GPU </div>
              <div className="price-item__price">
                €9.30 <span>/month</span>
              </div>
              <ul className="price-item__list">
                <li className="price-item__list-item">
                  <img src={OneImg} alt="" />
                  <span>96GB GPU memory</span>
                </li>
                <li className="price-item__list-item">
                  <img src={TwoImg} alt="" />
                  <span>32vCPU</span>
                </li>
                <li className="price-item__list-item">
                  <img src={ThreeImg} alt="" />
                  <span>464GB RAM</span>
                </li>
                <li className="price-item__list-item">
                  <img src={FourImg} alt="" />
                  <span> 21B–41B parameters</span>
                  <img src={TooltipImg} alt="" />
                </li>
              </ul>
              <a href="#" className="price-item__order">
                Order Now
              </a>
            </div>
            <div className="price-item">
              <div className="price-item__undertext">2x NVIDIA L40S GPU  </div>
              <div className="price-item__price">
                €4.70 <span>/month</span>
              </div>
              <ul className="price-item__list">
                <li className="price-item__list-item">
                  <img src={OneImg} alt="" />
                  <span>192GB GPU memory</span>
                </li>
                <li className="price-item__list-item">
                  <img src={TwoImg} alt="" />
                  <span>64vCPU</span>
                </li>
                <li className="price-item__list-item">
                  <img src={ThreeImg} alt="" />
                  <span>928GB RAM</span>
                </li>
                <li className="price-item__list-item">
                  <img src={FourImg} alt="" />
                  <span> 41B–70B parameters</span>
                  <img src={TooltipImg} alt="" />
                </li>
              </ul>
              <a href="#" className="price-item__order">
                Order Now
              </a>
            </div>
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
