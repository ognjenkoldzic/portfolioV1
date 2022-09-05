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
            The Met App is a pure frontend React app. I fetched the API of the
            Metropolitan Museum of Arts in New York. You can browse through the
            section of European Paintings, search for specific ones, check the
            details of every art work, bookmark the paintings you like, play
            memory with some of the paintings and answer questions of the art
            quiz.
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
