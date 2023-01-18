import { faRightLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useLayoutEffect, useState } from "react";
import { Header, Sidebar } from "../components"
import Router from "../Router/Router";
import "./Layout.scss";
import { Navbar, Footer } from "../components";
const Layout = () => {
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
  // localStorage.clear()
  return loading ?
  <div className="loader_cont">
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div> : (
    <>
      <Navbar lightMode={light} />
      <Router />
      <Footer />
    </>
  )
}

export default Layout