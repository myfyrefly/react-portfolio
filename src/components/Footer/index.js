import React from "react";
import "./style.css";
import LinkedInimg from "../images/linkedIn01.png";
import TwitterIcon from "../images/twitter02.png";
import { Typography, Grid, IconButton } from "@material-ui/core";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h6">Sofia Mejia</Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/sofia-mejia-344977a5/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={LinkedInimg} alt="LinkedIn icon link" />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://twitter.com/myfyrefly"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={TwitterIcon} alt="Twitter icon link" />
            </a>
          </IconButton>
          {/* </a> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
