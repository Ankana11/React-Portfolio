import { useEffect, useRef, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const vantaRef = useRef(null);

  // useEffect(() => {
  //   vantaRef.current = BIRDS({
  //     el: document.body,
  //     THREE: THREE,
  //     color1: darkMode ? 0xffffff : 0xff9900,
  //     color2: darkMode ? 0x999999 : 0x222222,
  //     backgroundColor: darkMode ? 0x000000 : 0xf5f5f5,
  //     quantity: 3,
  //   });
    

  //   return () => {
  //     if (vantaRef.current) vantaRef.current.destroy();
  //   };
  // }, []);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;





