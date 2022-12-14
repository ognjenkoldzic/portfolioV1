import React from "react";
import "./App.css";

function ButtonPremium({ link, buttonName }) {
  return (
    <div className="button-premium">
      <a href={link} target="_blank">
        <span>{buttonName}</span>
        <div className="liquid"></div>
      </a>
    </div>
  );
}

export default ButtonPremium;
