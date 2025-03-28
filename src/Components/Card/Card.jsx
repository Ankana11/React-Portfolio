import React, {useContext} from "react";
import "./Card.css";

import { themeContext } from "../../Context";
const Card = ({emoji, heading, detail, color}) => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="card" style={{ borderColor: color || "var(--orangeCard)" }}> 
      <img src={emoji} alt="" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{detail}</span>
     
    </div>
  );
};

export default Card;