import React from "react";
import "./style.css";
import LinkedInimg from "../images/linkedIn01.png";
import TwitterIcon from "../images/twitter02.png";
import { Typography, Grid } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h6">Sofia Mejia 2020</Typography>
        </Grid>
        <Grid item>
          <a
            href="https://www.linkedin.com/in/sofia-mejia-344977a5/"
            target="_blank"
          >
            <img src={LinkedInimg} alt="LinkedIn icon link" />
          </a>
          <a href="https://twitter.com/myfyrefly" target="_blank">
            <img src={TwitterIcon} alt="Twitter icon link" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
