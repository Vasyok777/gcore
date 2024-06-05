import { useState } from "react"
import AppLogo from "../ul/AppLogo/AppLogo"

import "./Header.scss"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => setShowMenu(!showMenu)
  return (
    <header className={`header ${showMenu ? "active" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <AppLogo />
          <Navbar />
          <div className={`navbar-mobile ${showMenu ? 'show' : ''}`}>
            <NavbarMobile />
          </div>
          <div className="header-button">
            <a href="#" className="header-button__contact btn">
              Contact us
            </a>
            <a href="#" className="header-button__sign btn-accent">
              Sign up for free
            </a>
          </div>
          <div className="header-mob__button">
            <a href="#" className="header-mob__button-book">
              Book a demo
            </a>
            <div className="header-mob__button-burger" onClick={handleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g filter="url(#filter0_b_382_22045)">
                  <rect
                    width="40"
                    height="40"
                    rx="20"
                    fill="#272727"
                    fillOpacity="0.18"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="white"
                    strokeOpacity="0.04"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="url(#paint0_linear_382_22045)"
                    strokeOpacity="0.12"
                  />
                  <line
                    x1="0.75"
                    y1="-0.75"
                    x2="14.25"
                    y2="-0.75"
                    transform="matrix(-1 0 0 1 28 16)"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="27.25"
                    y1="19.75"
                    x2="13.75"
                    y2="19.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="27.25"
                    y1="24.75"
                    x2="13.75"
                    y2="24.75"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_382_22045"
                    x="-20"
                    y="-20"
                    width="80"
                    height="80"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_382_22045"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_382_22045"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_382_22045"
                    x1="20"
                    y1="0"
                    x2="20"
                    y2="29.6154"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
