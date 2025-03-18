import React,  { useContext }  from "react";
import "./Skills.css";
import Card from "../Card/Card"; 
import HeartEmoji from "../../img/heartemoji1.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

import { themeContext } from "../../Context";
const Skills = () => {

  const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;


  return (
    <div className="skills">
      <div className="skill-header">
        <h2 style={{ color: darkMode ? "white" : "" }}>Here Is My <span className="highlight">Strength</span></h2>
      </div>

      <div className="cards-container">
        <Card emoji={HeartEmoji}  heading="Frontend" detail={<ul><li>React.js</li><li>Bootstrap</li><li>Figma</li><li>JQuery</li><li>HTML</li><li>CSS</li></ul>} />

        <Card emoji={Glasses}  heading="Backend" detail={<ul><li>PHP</li><li>JavaScript</li><li>Python</li><li>Django</li><li>Laravel</li><li>NodeJS</li></ul>} />

        <Card emoji={Humble}  heading="Others/Database" detail={<ul><li>MySQL</li><li>MongoDB</li><li>Git</li><li>GitHub</li><li>UI/UX</li><li>GenAI</li></ul>} />
      </div>
    </div>
  );
};

export default Skills;
