import PromoBgMobImg from "../../assets/images/promo/mob-bg.png"
import StarImg from "../../assets/images/promo/star.svg"
import VideoPromo from "../../assets/video/promo.mp4"

import "./Promo.scss"

const Promo = () => {
  return (
    <section className="promo">
      <video
        className="promo__bg-video"
        src={VideoPromo}
        autoPlay
        muted
        loop
        playsInline
      />
      <img className="promo__bg-mob" src={PromoBgMobImg} alt="" />
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
    </section>
  )
}
export default Promo
