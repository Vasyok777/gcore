import {motion as m} from "framer-motion"

import EcoImg from "../../../assets/images/footer/eco.png"
import MadeImg from "../../../assets/images/footer/made.png"
import WorldImg from "../../../assets/images/footer/world.png"

import "./FooterCenter.scss"

const FooterCenter = () => {
  return (
    <div className="footer-center">
      <div className="footer-center__line"></div>
      <div className="footer-center__partners">
        <m.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, ease: "easeInOut"}}
          className="footer-center__partner"
        >
          <img src={MadeImg} alt="" />
        </m.div>
        <m.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, delay: 0.1, ease: "easeInOut"}}
          className="footer-center__partner"
        >
          <img src={EcoImg} alt="" />
        </m.div>
        <m.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.4, delay: 0.2, ease: "easeInOut"}}
          className="footer-center__partner"
        >
          <img src={WorldImg} alt="" />
        </m.div>
      </div>
      <m.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.5, ease: "easeInOut"}}
        className="footer-center__text"
      >
        Subscribe to discover the latest updates, news, and features
      </m.p>
      <m.form
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{delay: 0.2, duration: 0.5, ease: "easeInOut"}}
        className="footer-center__form"
      >
        <input type="email" placeholder="Enter your E-mail" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
              stroke="#060607"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </m.form>
      <div className="footer-center__line-mob"></div>
    </div>
  )
}
export default FooterCenter
