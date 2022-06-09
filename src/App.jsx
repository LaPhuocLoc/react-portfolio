import { useEffect } from 'react'
import './assets/boxicons-2.1.2/css/boxicons.min.css'
import './scss/_variables.scss'
import "./App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
// import Blog from './pages/Blog/Blog';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <ToggleTheme />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
