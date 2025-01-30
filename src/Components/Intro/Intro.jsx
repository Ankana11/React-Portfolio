import React, { useContext, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import girl1 from "../../img/girl1.png";

import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";

import code from "../../img/code.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


import CLOUDS from 'vanta/src/vanta.clouds';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

// useEffect(()=>{
//   CLOUDS({
//     el:'#left'
//   })
// }, [])

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="blur" style={{
  background: "rgba(255, 209, 220, 0.6)",
  top: "-2rem",
  left: "-9rem",

        
       }}></div>
      <div className="i-left" id="left" >
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Ankana Das</span>
          <span style={{ color: darkMode ? "white" : ""}}>A Design Centric Software Developer</span>
        </div>
        <Link to="about" smooth={true} spy={true}>
          <button className="button i-button">Know me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={girl1} alt="" />
        
        {/* <img src={glassesimoji} alt="" /> */}
         <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />


        {/* <div style={{ position: "absolute", top: "-2%", left: "62%" }}>
  <FloatinDiv
    img={code}
    text1="Developer"
    style={{ transform: "scale(0.9)" }} 
  />
</div> */}


<motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "62%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={code} text1="Developer"  style={{ transform: "scale(0.9)" }}  />
        </motion.div>



{/* <div style={{ position: "absolute", top: "17rem", left: "0rem" }}>
  <FloatinDiv
    img={thumbup}
    text1="Designer"
    style={{ transform: "scale(0.9)" }} // Custom scaling for this instance
  />
</div> */}


<motion.div
  initial={{ left: "-9rem", top: "17rem" }}
  whileInView={{ left: "0rem" }}
  transition={transition}
  className="floating-div"
>
  {/* floatinDiv mein change hy dark mode ka */}
  <FloatinDiv img={thumbup} text1="Designer"   style={{ transform: "scale(0.9)" }}   />
</motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;