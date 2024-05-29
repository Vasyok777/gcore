import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {useLayoutEffect, useRef} from "react"

import "./Discuss.scss"

gsap.registerPlugin(ScrollTrigger)

const Discuss = () => {
  const wrapperRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".discuss__wrapper",
        {
          background:
            "radial-gradient(126.87% 160.87% at 51.11% 1.13%, rgba(7, 7, 8, 0) 0%, #070708 53.31%, #ff4c00 76.56%, #ff9e50 86.46%, #fff 100%)",
        },
        {
          background:
            "radial-gradient(98.87% 98.87% at 51.11% 1.13%, rgba(7, 7, 8, 0) 0%, #070708 53.31%, #ff4c00 76.56%, #ff9e50 86.46%, #fff 100%)",
          scrollTrigger: {
            trigger: ".discuss__wrapper",
            start: "top center",
            end: "50% 40%",
            scrub: true,
          },
        },
      )
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="discuss" ref={wrapperRef}>
      <div className="container">
        <div className="discuss__wrapper">
          <h2 className="discuss__title">Contact us to discuss your project</h2>
          <p className="discuss__text">
            Get in touch with us, and we’ll guide you through running your ML
            model on Gcore Inference at the Edge. Together, we’ll explore how
            our service can benefit your end users. 
          </p>
          <p className="discuss__text mob">
            Gcore global network consists of more than 160 locations, allowing
            you to reach your users anywhere in the world.  
          </p>
          <a href="#" className="discuss__link">
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  )
}

export default Discuss
