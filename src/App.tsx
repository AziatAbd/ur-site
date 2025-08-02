import { Navigate, Route, Routes } from "react-router-dom"
import LegalLanding from "./pages/Landing"
import Header from "./layouts/Header"
import { Footer } from "./layouts/Footer"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import Contacts from "./pages/Contacts"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LegalLanding />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
