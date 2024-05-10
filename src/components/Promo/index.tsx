import PromoBgImg from "../../assets/images/promo/promo_bg.png"
import StarImg from "../../assets/images/promo/star.svg"

import "./Promo.scss"

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__undertitle">
            <img src={StarImg} alt="" />
            <p>Beta release</p>
          </div>
          <h1 className="promo__title">Inference at the Edge</h1>
          <p className="promo__text">
            Boost your AI application’s speed and efficiency globally by
            bringing inference closer to your users. Enjoy customization and
            cost-efficiency for a best-in-class inference experience. 
          </p>
          <div className="promo__buttons">
            <a href="#" className="btn-accent">
              Get started
            </a>
            <a href="#" className="promo__btn">
              Book a demo
            </a>
          </div>
        </div>
      </div>
      <img className="promo__bg" src={PromoBgImg} alt="" />
    </section>
  )
}
export default Promo
