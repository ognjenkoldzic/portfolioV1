import React from "react";
import MetFramed from "./assets/TheMetFramed.png";
import ButtonPremium from "./ButtonPremium";

function TheMetApp() {
  return (
    <div className="portfolio-element metapp">
      <a href="https://capestone-project.vercel.app/">
        <img src={MetFramed} alt="The Met mit Rahmen" />
      </a>
      <div>
        <h2>The MET App</h2>
        <div className="desc">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            veritatis placeat, sint sequi quasi enim, dignissimos itaque illo
            quae consequuntur nisi atque accusantium numquam at consequatur
            quisquam odit hic! Aliquid!
          </p>
          <div className="button-container">
            <ButtonPremium
              link={"https://capestone-project.vercel.app/"}
              buttonName={"DEMO"}
            />
            <ButtonPremium
              link={
                "https://github.com/ognjenkoldzic/capestone-project/tree/main/client"
              }
              buttonName={"REPO"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMetApp;
