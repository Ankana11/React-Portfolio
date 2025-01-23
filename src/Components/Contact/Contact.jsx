import React, {useContext} from "react";
import "./Contact.css";
import location from "../../img/final_loc.png";
import envelop from "../../img/final_envelop.png";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id="contact">
      {/* Left side */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "rgb(202 152 232)" }}
          ></div>
        </div>
      </div>

      {/* Right side */}
      <div className="c-right">
        <div className="icon-column">
          {/* Location Icon */}
          <div className="icon-item">
            <img src={location} alt="Location Icon" />
            <span style={{ color: darkMode ? "white" : "" }}>Kolkata, India</span>
          </div>
          {/* Envelop Icon */}
          <div className="icon-item">
            <img src={envelop} alt="Envelop Icon" />
            <span><a href="mailto:reach2ankana@gmail.com" className="mail" style={{ color: darkMode ? "white" : "" }}>reach2ankana@gmail.com</a></span>
          </div>
        </div>
        <div
          className="blur c-blur1"
          style={{ background: "rgb(145 222 232)" }}
        ></div>
      </div>
    </div>
  );
};

export default Contact;
