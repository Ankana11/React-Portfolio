import React,  { useContext }  from "react"; 
import "./About.css";
import { themeContext } from "../../Context";

 
const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="about" id="about">
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      <div className="about-header">
        <h2 style={{ color: darkMode ? "white" : "" }}>About <span className="highlight">Myself</span></h2>
      </div>
      <p className="about-description">
        An experienced developer, pursuing BCA at the University of Mysore, I love figuring out coding problems and finding clever ways to solve them. I'm always up for new challenges and learning new things. I am proficient in a variety of programming languages and tools used for building software. In my free time, I enjoy working on personal projects, like building apps for web and desktop. I'm a motivated team player who gets things done. Let's build something awesome together!
      </p>
    </section>
  );
};

export default About;
