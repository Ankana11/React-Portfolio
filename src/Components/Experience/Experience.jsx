import React, { useContext } from "react";
import "./Experience.css";
import me from "../../img/final_exp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Animation settings
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="experience-container">
      {/* Header Section */}
      <div className="ex-header ex">
      <img 
    src={me} 
    alt="Me" 
    className="me-image" 
    style={{ filter: darkMode ? "drop-shadow(0 0 0.75rem white)" : "drop-shadow(0 0 0.75rem rgb(57, 56, 56))" }} 
/>
        <h2 style={{ color: darkMode ? "white" : "" }}>
          My <span className="highlight">Experiences</span>
        </h2>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Timeline Wrapper */}
      <div className="timeline-wrapper">
        <div className="timeline">
          {/* (Left Card) */}
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
            className="container left-container"
          >

            <div class="circle"></div>
            <div className="text-box">
              <h4 style={{ color: darkMode ? "white" : "" }}>Lyft</h4>
              <small style={{ color: darkMode ? "white" : "" }}>2023 - 2024</small>
              <p style={{ color: darkMode ? "white" : "" }}>
               Backend Developer
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </motion.div>

          {/* (Right Card) */}
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={transition}
            className="container right-container"
          >
        
            <div class="circle"></div>
            <div className="text-box">
              <h4 style={{ color: darkMode ? "white" : "" }}>Playbees Technologies</h4>
              <small style={{ color: darkMode ? "white" : "" }}>2024 - Present</small>
              <p style={{ color: darkMode ? "white" : "" }}>
               Web Developer
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
