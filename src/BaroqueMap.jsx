import React from "react";
import MapFramed from "./assets/MapFrame.png";
import ButtonPremium from "./ButtonPremium";

function BaroqueMap() {
  return (
    <div className="portfolio-element map">
      <a href="https://leaflet-test-ashy.vercel.app/">
        {" "}
        <img src={MapFramed} alt="Kartenbild mit Rahmen" />
      </a>
      <h2>The Baroque Map</h2>
      <div className="desc">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          veritatis placeat, sint sequi quasi enim, dignissimos itaque illo quae
          consequuntur nisi atque accusantium numquam at consequatur quisquam
          odit hic! Aliquid!
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
