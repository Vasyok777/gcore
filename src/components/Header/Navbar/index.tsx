import LeftImg from "../../../assets/images/header/drop.jpg"
import GPUImg from "../../../assets/images/header/gpu.svg"
import IPUImg from "../../../assets/images/header/ipu.svg"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207"
              stroke="#FFF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="navbar-dropdown">
            <div className="navbar-dropdown__left">
              <ul className="navbar-dropdown__links">
                <li className="navbar-dropdown__item active">
                  Edge AI{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li className="navbar-dropdown__item">
                  Edge Cloud
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li className="navbar-dropdown__item">
                  Edge Network
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li className="navbar-dropdown__item">
                  Edge Security
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li className="navbar-dropdown__item">
                  Custom Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      d="M5.9668 3.21979L10.3135 7.56645C10.8268 8.07979 10.8268 8.91978 10.3135 9.43312L5.9668 13.7798"
                      stroke="#FFF2EA"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </ul>
              <div className="navbar-dropdown__left-img">
                <img src={LeftImg} alt="" />
              </div>
            </div>
            <div className="navbar-dropdown__content">
              <div className="navbar-dropdown__content-item">
                <h6 className="navbar-dropdown__content-title">
                  AI Infrastructure
                </h6>
                <div className="navbar-dropdown__content-box">
                  <div className="navbar-dropdown__content-box-img">
                    <img src={IPUImg} alt="" />
                  </div>
                  <div className="navbar-dropdown__content-box-content">
                    <h6>IPU</h6>
                    <p>
                      Infrastructure of servers designed to accelerate machine
                      learning
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.4585 3.9001L12.8918 9.33343C13.5335 9.9751 13.5335 11.0251 12.8918 11.6668L7.4585 17.1001"
                      stroke="#FFF2EA"
                      stroke-width="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="navbar-dropdown__content-box mt-12 mb-32">
                  <div className="navbar-dropdown__content-box-img">
                    <img src={GPUImg} alt="" />
                  </div>
                  <div className="navbar-dropdown__content-box-content">
                    <h6>GPU</h6>
                    <p>
                      Bare metal server and virtual machines with NVIDIO A100
                      and H100 GPUS
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.4585 3.9001L12.8918 9.33343C13.5335 9.9751 13.5335 11.0251 12.8918 11.6668L7.4585 17.1001"
                      stroke="#FFF2EA"
                      stroke-width="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="navbar-dropdown__content-title">AI Inference</h6>
                <div className="navbar-dropdown__content-box mt-12 mb-32">
                  <div className="navbar-dropdown__content-box-img">
                    <img src={GPUImg} alt="" />
                  </div>
                  <div className="navbar-dropdown__content-box-content">
                    <h6>Inference at the Edge</h6>
                    <p>
                      Infrastructure of servers designed to accelerate machine
                      learning
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.4585 3.9001L12.8918 9.33343C13.5335 9.9751 13.5335 11.0251 12.8918 11.6668L7.4585 17.1001"
                      stroke="#FFF2EA"
                      stroke-width="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="navbar-dropdown__content-item">
                <h6 className="navbar-dropdown__content-title">
                  AI Infrastructure
                </h6>
                <div className="navbar-dropdown__content-box">
                  <div className="navbar-dropdown__content-box-img">
                    <img src={IPUImg} alt="" />
                  </div>
                  <div className="navbar-dropdown__content-box-content">
                    <h6>Image Generator</h6>
                    <p>
                      Create realistic and stunning images from text
                      descriptions in seconds with Gcore’s AI-powered tool
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.4585 3.9001L12.8918 9.33343C13.5335 9.9751 13.5335 11.0251 12.8918 11.6668L7.4585 17.1001"
                      stroke="#FFF2EA"
                      stroke-width="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="navbar-dropdown__content-box mt-12 mb-32">
                  <div className="navbar-dropdown__content-box-img">
                    <img src={GPUImg} alt="" />
                  </div>
                  <div className="navbar-dropdown__content-box-content">
                    <h6>Speech-to-Text Translator</h6>
                    <p>
                      AI cloud and ML powered speech-to-text translation tool to
                      translate English to Luxembourgish
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M7.4585 3.9001L12.8918 9.33343C13.5335 9.9751 13.5335 11.0251 12.8918 11.6668L7.4585 17.1001"
                      stroke="#FFF2EA"
                      stroke-width="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </li>
        <li className="navbar__item">Pricing</li>
        <li className="navbar__item">
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207"
              stroke="#FFF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li className="navbar__item">
          Partners
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207"
              stroke="#FFF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
        <li className="navbar__item">
          Why Gcore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6199 5.2207L7.81655 9.02404C7.36738 9.4732 6.63238 9.4732 6.18322 9.02404L2.37988 5.2207"
              stroke="#FFF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
