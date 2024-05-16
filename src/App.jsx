import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/home/Home"
import About from "./components/about/About"


const App = () => {
  return (
    <div>
      <Navbar />
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </>
    </div>
  )
}

export default App