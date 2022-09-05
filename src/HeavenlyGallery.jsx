import React from "react";
import GalleryFramed from "./assets/GalleryFrame.png";
import ButtonPremium from "./ButtonPremium";

function HeavenlyGallery() {
  return (
    <div className="portfolio-element gallery">
      <a href="https://gallery-solo.vercel.app/" target="_blank">
        <img src={GalleryFramed} alt="Galleriebild mit Rahmen" />
      </a>
      <h2>The Heavnely Gallery</h2>

      <div className="desc">
        <p>
          The Heavenly Gallery is a 3D-project coded with React Three Fiber. You
          can zoom into the scene, look at it from different perspectives and
          interact with the elements. Even the piano plays Bach (sometimes you
          need a bit of patience for the loading process, though :-)).
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
