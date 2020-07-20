import React from "react";
import "./style.css";
import LinkedInimg from "../images/linkedIn.png";

const Footer = () => {
  return (
    <div className="footer">
      <span>
        Sofia Mejia 2020{" "}
        <a
          href="https://www.linkedin.com/in/sofia-mejia-344977a5/"
          target="_blank"
        >
          {" "}
          <img src={LinkedInimg} alt="LinkedIn icon" />{" "}
        </a>
      </span>
    </div>
  );
};

export default Footer;
