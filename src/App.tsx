import {gsap} from "gsap"
import {Route, Routes} from "react-router-dom"

// import {Footer} from "./components/Footer/Footer"
import FooterMain from "./components/Footer/FooterMain"
import Header from "./components/Header/Header"
import {Home} from "./pages/Home/Home"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

export default function App() {
  return (
    <>
      <div id="smooth-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterMain />
      </div>
    </>
  )
}
