import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useLayoutEffect} from "react"

import Asked from "../../components/Asked"
import Discuss from "../../components/Discuss"
import Experience from "../../components/Experience"
import Faster from "../../components/Faster"
import Flexible from "../../components/Flexible"
import GlobalNetwork from "../../components/GlobalNetwork"
import OtherProducts from "../../components/OtherProducts/OtherProducts"
import Potential from "../../components/Potential"
import Price from "../../components/Price"
import Promo from "../../components/Promo"

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {
  useLayoutEffect(() => {
    // gsap.defaults({ease: "none", duration: 2})
    // const tl = gsap.timeline()
    // tl.from(".flexible-section", {
    //   scrollTrigger: {
    //     trigger: ".flexible-section",
    //     start: "top top",
    //     end: "+=1000",
    //     pin: true,
    //     // pinSpacing: false,
    //     anticipatePin: 1,
    //   },
    // })
  }, [])
  return (
    <main>
      <Promo />
      <Faster />
      <Potential />
      <GlobalNetwork />
      <Experience />
      <Flexible />
      <Price />
      <Asked />
      <Discuss />
      <OtherProducts />
    </main>
  )
}
