import ItemSixImg from "../../assets/images/potention/6.png"
import StarImg from "../../assets/images/promo/star.svg"
import OneVideo from "../../assets/video/potential_1.MP4"
import TwoVideo from "../../assets/video/potential_2.MP4"
import ThreeVideo from "../../assets/video/potential_3.MP4"
import FourVideo from "../../assets/video/potential_4.MP4"
import FiveVideo from "../../assets/video/potential_5.MP4"
// import ThreeVideo from "../../assets/video/potential_6.MP4"
import SevenVideo from "../../assets/video/potential_7.MP4"
import NavbarCustom from "../NavbarCustom"

import "./Potential.scss"

const Potential = () => {
  return (
    <section className="potential">
      <div className="container">
        <div className="potential__wrapper">
          <div className="faster__wrapper-relative">
            <NavbarCustom />
          </div>
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
                <video
                  className=""
                  src={OneVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
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
                <video
                  className=""
                  src={TwoVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
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
              <div className="potential-box__item">
                <video
                  className=""
                  src={ThreeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="potential-box__item-content">
                  <h6>Data privacy and security </h6>
                  <p>
                    Use pre-trained foundational models from the Gcore ML Model
                    Hub or your own trained models. 
                  </p>
                </div>
              </div>
              <div className="potential-box__item">
                <video
                  className=""
                  src={FourVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="potential-box__item-content">
                  <h6>Unlimited object storage  </h6>
                  <p>
                    Use scalable <span>S3-compatible</span> cloud storage that
                    grows with your needs.   
                  </p>
                </div>
              </div>
              <div className="potential-box__item">
                {/* <img src={ItemFiveImg} alt="" /> */}
                <video
                  className=""
                  src={FiveVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="potential-box__item-content">
                  <h6>Pre-trained and custom ML models </h6>
                  <p>
                    Use pre-trained foundational models from the{" "}
                    <span>Gcore ML Model Hub</span> or your own trained models. 
                  </p>
                </div>
              </div>
            </div>
            <div className="potential-box__one">
              <div className="potential-box__item">
                <img src={ItemSixImg} alt="" />
                {/* <video
                  className=""
                  src={ThreeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                /> */}
                <div className="potential-box__item-content">
                  <h6>Model autoscaling </h6>
                  <p>
                    Set up autoscaling to handle load spikes. Use and pay for
                    only the resources your model requires. 
                  </p>
                </div>
              </div>
              <div className="potential-box__item">
                <video
                  className=""
                  src={SevenVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="potential-box__item-content">
                  <h6>NVIDIA L40S GPUs</h6>
                  <p>
                    Boost model performance with the latest <span>NVIDIA</span>{" "}
                    accelerator, perfect for <span>GenAI and LLM</span>{" "}
                    inference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Potential
