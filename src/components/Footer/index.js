import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-me">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sumaia-salahuddin-519521218/"
        >
          <LinkedInIcon />
        </a>
        <a target="_blank" href="https://github.com/SumaiaSorna">
          <GitHubIcon />
        </a>
        <a href="mailto:sorna.sumaia@gmail.com">Email</a>
      </div>
    </div>
  );
};
