import React from "react";
import MapFramed from "./assets/MapFrame.png";
import GalleryFramed from "./assets/GalleryFrame.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="appBody font-face-gm">
      <h1>Portfolio</h1>
      <img src={GalleryFramed} alt="Galleriebild mit Rahmen" />
      <h2>...in heaven</h2>

      <img src={MapFramed} alt="Kartenbild mit Rahmen" />
      <h2>...on earth</h2>
    </div>
  );
}

export default App;
