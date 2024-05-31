import {Route, Routes} from "react-router-dom"

// import {Footer} from "./components/Footer/Footer"
import FooterMain from "./components/Footer/FooterMain"
import Header from "./components/Header/Header"
import Contact from "./pages/Contact/Contact"
import {Home} from "./pages/Home/Home"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterMain />
    </>
  )
}
