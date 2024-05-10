// import block1 from "../../assets/images/block/block-1.png"
// import block2 from "../../assets/images/block/block-2.png"
// import block3 from "../../assets/images/block/block-3.png"
// import {Block} from "../../components/Block/Block"
// import {Customers} from "../../components/Customers/Customers"
// import {Dots} from "../../components/Dots/Dots"
// import {HeadCards} from "../../components/HeadCards/HeadCards"
// import {Intro} from "../../components/Intro/Intro"
// import {Meet} from "../../components/Meet/Meet"
import Asked from "../../components/Asked"
import Discuss from "../../components/Discuss"
import Experience from "../../components/Experience"
import Flexible from "../../components/Flexible"
import GlobalNetwork from "../../components/GlobalNetwork"
import OtherProducts from "../../components/OtherProducts/OtherProducts"
import Potential from "../../components/Potential"
import Price from "../../components/Price"
import Promo from "../../components/Promo"

// import {Partners} from "../../components/Partners/Partners"
// import {TickerLogos} from "../../components/TickerLogos/TickerLogos"
// import {Welcome} from "../../components/Welcome/Welcome"
// import {Workforce} from "../../components/Workforce/Workforce"

export const Home = () => {
  return (
    <main>
      <Promo />
      <Potential />
      {/* <Intro />
      <TickerLogos />
      <HeadCards />
      <Dots />
      <Meet />
      <Welcome /> */}
      {/* <div>
        <Block titleIndex={2} img={block1} blockItems={1} changeOrder />
        <Block titleIndex={3} img={block2} blockItems={2} />
        <Block titleIndex={4} img={block3} blockItems={3} changeOrder />
      </div> */}
      {/* <Partners /> */}
      {/* <Workforce /> */}
      {/* <Customers /> */}
      {/* <TickerLogos /> */}
      <GlobalNetwork />
      <div className="white-section">
        <Experience />
        <Flexible />
      </div>
      <Price />
      <Asked />
      <Discuss />
      <OtherProducts />
    </main>
  )
}
