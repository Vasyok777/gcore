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

export const Home = () => {
  return (
    <main>
      <Promo />
      <Faster />
      <Potential />
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
