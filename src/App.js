import "bootstrap/dist/css/bootstrap.min.css";
import 'aos/dist/aos.css';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from "./components";
import { About, Contact, Home, Projects } from "./Pages";
import './sass/App.scss';
import { useState } from "react";
import { useEffect, useLayoutEffect } from "react";

const App = () => {
  const [loading, setloading] = useState(true);
  const [light, setlight] = useState(false);
  const lightlocal = localStorage.getItem("Light Mode");
  useLayoutEffect(() => {
    if (lightlocal) {
      if (lightlocal === "true") {
        setlight(true);
        document.body.classList.add('light');
      }
    }
  }, [lightlocal])
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500)
  })
  return loading ?
    <div className="loader_cont">
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div> :
    (
      <Router>
        <Navbar lightMode={light} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    );
};

export default App;
