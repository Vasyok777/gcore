import GlobalImg from "../../assets/images/global_nerwork/gloge.svg"
import PlanetImg from "../../assets/images/global_nerwork/planet.png"

import "./GlobalNetwork.scss"

const GlobalNetwork = () => {
  return (
    <section className="global-network">
      <div className="container">
        <div className="global-network__wrapper">
          <div className="global-network__top">
            <div className="global-network__top-img">
              <img src={GlobalImg} alt="" />
            </div>
            <p>Global Network</p>
          </div>
          <h2 className="global-network__title">
            A truly global network for lightning-fast inference 
          </h2>
          <p className="global-network__text">
            Gcore global network consists of more than 160 locations, allowing
            you to reach your users anywhere in the world.
          </p>
          <div>
            <img src={PlanetImg} alt="" />
          </div>
          <div className="global-network__bottom">
            <div className="global-network__bottom-box">
              Active locations
              <div className="global-network__bottom-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                >
                  <path d="M3 0L6 4H0L3 0Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="global-network__bottom-box">
              Planned locations
              <div className="global-network__bottom-svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                >
                  <path d="M3 4L6 0H0L3 4Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GlobalNetwork
