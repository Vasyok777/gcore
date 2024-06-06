import {motion as m} from "framer-motion"

import BG from "../../assets/images/footer/footer-bg.png"
import MasterCard from "../../assets/images/footer/mastercard.png"
import PayPal from "../../assets/images/footer/paypal.png"
import ThreeBottom from "../../assets/images/footer/three.png"
import Verified from "../../assets/images/footer/verified.png"

import "./Footer.scss"
import FooterCenter from "./FooterCenter"
import FooterTop from "./FooterTop"

const FooterMain = () => {
  return (
    <footer className="footer">
      <img src={BG} alt="Footer Background" className="footer-bg" />
      <div className="container">
        <div className="footer__wrapper">
          <FooterTop />
          <FooterCenter />
          <div className="footer-bottom">
            <div className="footer__line"></div>
            <m.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.1, duration: 0.5, ease: "easeInOut"}}
              className="footer-bottom__left"
            >
              <p>
                This site is protected by reCAPTCHA. Google’s{" "}
                <a href="#">Privacy Policy</a> and{" "}
                <a href="#">Terms of Service</a> apply.
              </p>
              <p>
                PG-Core Labs S.A. © 2015–2024 All rights reserved. Principal
                place of business and postal address: 2-4, Rue Edmond Reuter,
                L-5326 Contern, Luxembourg
              </p>
            </m.div>
            <m.div
              initial={{opacity: 0, y: 40}}
              whileInView={{opacity: 1, y: 0}}
              transition={{delay: 0.1, duration: 0.5, ease: "easeInOut"}}
              className="footer-bottom__images"
            >
              <div className="footer-bottom__img">
                <img src={MasterCard} alt="MasterCard" />
              </div>
              <div className="footer-bottom__img">
                <img src={PayPal} alt="PayPal" />
              </div>
              <div className="footer-bottom__img">
                <img src={ThreeBottom} alt="Three Bottom" />
              </div>
              <div className="footer-bottom__img">
                <img src={Verified} alt="Verified" />
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterMain
