import React from "react";

import "./App.css";

import { Link } from "react-router-dom";
import HeavenlyGallery from "./HeavenlyGallery";
import BaroqueMap from "./BaroqueMap";
import TheMetApp from "./TheMetApp";
import ButtonPremium from "./ButtonPremium";
import MiniNav from "./MiniNav";
import Title from "./Title";

function App() {
  return (
    <div className="appBody">
      <h1>Ognjens Portfolio</h1>
      {/* <Title /> */}
      <HeavenlyGallery />
      <BaroqueMap />
      <TheMetApp />
      <MiniNav />
    </div>
  );
}

export default App;
