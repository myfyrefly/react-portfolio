import React from "react";
import "./style.css";
import LinkedInimg from "../images/linkedIn.png";
import TwitterIcon from "../images/twitter02.png";

const Footer = () => {
  return (
    <div className="footer">
      Sofia Mejia 2020{" "}
      <a
        href="https://www.linkedin.com/in/sofia-mejia-344977a5/"
        target="_blank"
      >
        <img src={LinkedInimg} alt="LinkedIn icon" />
      </a>
      <a href="https://twitter.com/myfyrefly" target="_blank">
        <img src={TwitterIcon} alt="Twitter icon" />
      </a>
    </div>
  );
};

export default Footer;
