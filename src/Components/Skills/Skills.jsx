import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }} >Here Is My</span>
        <span>Skills 🚀</span>
        
        <a href="/" download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      
            <div className="cards">
              
                {/* first card */}
            <div style={{ left: "27rem" }}>
            <Card
           emoji={HeartEmoji}
           heading={"Frontend"}
           detail={<ul><li>React.js</li><li>CSS</li></ul>}
          //  color="rgba(255, 0, 0, 0.3)"
 
        />
       </div>
         
       <div style={{ top: "10rem", left: "9rem" }}>
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={<ul><li>PHP</li><li>JavaScript</li></ul>
            }
          />
        </div>
        <div style={{ top: "17rem", left: "24rem" }}>
          <Card
              emoji={Humble}
              heading={"Others"}
              detail={<ul><li>Git</li><li>GitHub</li></ul>}
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
        {/* </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;