import React from "react";
import githubLogo from "./assets/icons8-github.svg";
import linkedinLogo from "./assets/icons8-linkedin-im-kreis.svg";
import mailLogo from "./assets/icons8-mail.svg";

function MiniNav() {
  return (
    <div className="sidebar">
      <div className="logo-linkedin">
        <a href="https://www.linkedin.com/in/ognjenkoldzic/" target="_blank">
          <img className="icon" src={linkedinLogo} alt="GitHub Logo" />
        </a>
      </div>
      <div className="logo-github">
        <a href="https://github.com/ognjenkoldzic" target="_blank">
          <img className="icon" src={githubLogo} alt="linkedin logo" />
        </a>
      </div>
      <div className="logo-email">
        <a href={"mailto:ognjen_koldzic@yahoo.de"}>
          <img className="icon" src={mailLogo} alt="email logo" />
        </a>
      </div>
    </div>
  );
}

export default MiniNav;
