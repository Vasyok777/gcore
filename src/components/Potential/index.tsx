import ItemOneImg from "../../assets/images/potention/1.png"
import ItemTwoImg from "../../assets/images/potention/2.png"
import StarImg from "../../assets/images/promo/star.svg"
import NavbarCustom from "../NavbarCustom"

import "./Potential.scss"

const Potential = () => {
  return (
    <section className="potential">
      <div className="container">
        <div className="potential__wrapper">
          <NavbarCustom />
          <div className="potential__undertitle">
            <div className="potential__undertitle-img">
              <img src={StarImg} alt="" />
            </div>
            <p>AI potential</p>
          </div>
          <h2 className="potential__title">
            Unleash your AI <br />
            application’s full potential{" "}
          </h2>
          <div className="potential-box">
            <div className="potential-box__one">
              <div className="potential-box__item">
                <img src={ItemOneImg} alt="" />
                <div className="potential-box__item-content one">
                  <h6>Low-latency global network </h6>
                  <p>
                    Minimize model response time with our{" "}
                    <span>160+ location CDN</span>, providing an average global
                    latency of 30 ms. 
                  </p>
                </div>
              </div>
              <div className="potential-box__item">
                <img src={ItemTwoImg} alt="" />
                <div className="potential-box__item-content two">
                  <h6>Single end-point for all AI tasks</h6>
                  <p>
                    Gcore offers automated insfrastructure management for AI
                    applications while offering real-time inference.
                  </p>
                </div>
              </div>
            </div>
            <div className="potential-box__two">
              <div className="potential-box__item"></div>
              <div className="potential-box__item"></div>
              <div className="potential-box__item"></div>
            </div>
            <div className="potential-box__one">
              <div className="potential-box__item"></div>
              <div className="potential-box__item"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Potential
