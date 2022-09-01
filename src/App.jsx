import React from "react";

import "./App.css";

import { Link } from "react-router-dom";
import HeavenlyGallery from "./HeavenlyGallery";
import BaroqueMap from "./BaroqueMap";
import TheMetApp from "./TheMetApp";
import ButtonPremium from "./ButtonPremium";

function App() {
  return (
    <div className="appBody">
      <h1>Portfolio</h1>
      <HeavenlyGallery />
      <BaroqueMap />
      <TheMetApp />
      <ButtonPremium />
    </div>
  );
}

export default App;
