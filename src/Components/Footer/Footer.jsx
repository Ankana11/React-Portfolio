import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { UilInstagram, UilGithub, UilLinkedin } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a href="https://www.instagram.com/diya.py/" target="_blank"><UilInstagram color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/ankana11/" target="_blank"><UilLinkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/Ankana11" target="_blank"><UilGithub color="white" size={"3rem"} /></a>
        </div>
        <span>@Copyright Ankana Das All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
