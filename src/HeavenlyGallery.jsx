import React from "react";
import GalleryFramed from "./assets/GalleryFrame.png";
import ButtonPremium from "./ButtonPremium";

function HeavenlyGallery() {
  return (
    <div className="portfolio-element gallery">
      <a href="https://gallery-solo.vercel.app/">
        <img src={GalleryFramed} alt="Galleriebild mit Rahmen" />
      </a>
      <h2>The Heavnely Gallery</h2>

      <div className="desc">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          veritatis placeat, sint sequi quasi enim, dignissimos itaque illo quae
          consequuntur nisi atque accusantium numquam at consequatur quisquam
          odit hic! Aliquid!
        </p>
        <div className="button-container">
          <ButtonPremium
            link={"https://gallery-solo.vercel.app/"}
            buttonName={"DEMO"}
          />
          <ButtonPremium
            link={"https://github.com/ognjenkoldzic/gallerySolo"}
            buttonName={"REPO"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeavenlyGallery;
