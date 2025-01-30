import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
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
                <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
       
            <Card
           heading={"Frontend"}
           detail={<ul><li>React.js</li><li>Bootstrap</li><li>Figma</li><li>HTML</li><li>CSS</li></ul>}
        
 
        />
          </motion.div>
      
{/* 2nd */}
       <motion.div
          initial={{ left: "-4rem", top: "10rem" }}
          whileInView={{ left: "9rem" }}
          transition={transition}
        >  
     
          <Card
           
            heading={"Backend"}
            detail={<ul><li>PHP</li><li>JavaScript</li><li>Python</li><li>Django</li><li>Laravel</li><li>MySQL</li></ul>
            }
          />
       </motion.div>
       {/* 3rd */}
    
        <motion.div
          initial={{ top: "15rem", left: "12rem" }}
          whileInView={{ left: "24rem" }}
          transition={transition}
        >
          <Card
              heading={"Others"}
              detail={<ul><li>Git</li><li>GitHub</li><li>UX/UI</li><li>ChatGPT</li><li>Gen AI</li></ul>}
            color="rgba(252, 166, 31, 0.45)"
          />
       
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;