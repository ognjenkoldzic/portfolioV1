import React from "react";
import MapFramed from "./assets/MapFrame.png";
import ButtonPremium from "./ButtonPremium";

function BaroqueMap() {
  return (
    <div className="portfolio-element map">
      <a href="https://leaflet-test-ashy.vercel.app/" target="_blank">
        {" "}
        <img src={MapFramed} alt="Kartenbild mit Rahmen" />
      </a>
      <h2>The Baroque Map</h2>
      <div className="desc">
        <p>
          The Baroque Map is a full stack project with React Leaflet,
          Express.js, Mongo DB and Cloudinary. You can navigate on the map an
          add and remove baroque venues in your city (or somewhere else) and
          post a picture of it. This project is still “work in progress”, so it
          will maybe have changed if you visit it again in a few weeks.
        </p>
        <div className="button-container">
          <ButtonPremium
            link={"https://leaflet-test-ashy.vercel.app/"}
            buttonName={"DEMO"}
          />
          <ButtonPremium
            link={"https://github.com/ognjenkoldzic/leafletTest"}
            buttonName={"REPO"}
          />
        </div>
      </div>
    </div>
  );
}

export default BaroqueMap;
