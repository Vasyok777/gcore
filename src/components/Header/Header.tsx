import AppLogo from "../ul/AppLogo/AppLogo"

import "./Header.scss"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <AppLogo />
          <Navbar />
          <div className="header-button">
            <a href="#" className="header-button__contact btn">
              Contact us
            </a>
            <a href="#" className="header-button__sign btn-accent">
              Sign up for free
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
