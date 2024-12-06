import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2, style}) => {
  return (
    // darkMode
    <div className="floatingDiv" style={style}>
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;