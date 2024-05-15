import {useState} from "react"

import ToggleOneImg from "../../assets/images/faster/togle-one.svg"
import ToggleTwoImg from "../../assets/images/faster/togle-two.svg"
import NavbarCustom from "../NavbarCustom"

import "./Faster.scss"
import OneContent from "./OneContent"
import TwoContent from "./TwoContent"

const Faster = () => {
  const [state, setState] = useState(1)

  const handleClickOne = () => {
    setState(1)
  }

  const handleClickTwo = () => {
    setState(2)
  }

  return (
    <section className="faster">
      <div className="container">
        <div className="faster__wrapper">
          <div className="faster__wrapper-relative">
            <NavbarCustom />
          </div>
          <div className="faster-toggle">
            <button
              className={`faster-toggle__button ${state === 1 ? "active" : ""}`}
              onClick={handleClickOne}
            >
              <img src={ToggleOneImg} alt="" />
              <span>What is?</span>
            </button>
            <button
              className={`faster-toggle__button ${state === 2 ? "active" : ""}`}
              onClick={handleClickTwo}
            >
              <img src={ToggleTwoImg} alt="" />
              <span>How it works?</span>
            </button>
          </div>
          <h2 className="faster__title">
            Use AI faster and more efficiently right on your device!
          </h2>
          <div className="faster-content">
            {state === 1 ? <OneContent /> : <TwoContent />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faster
