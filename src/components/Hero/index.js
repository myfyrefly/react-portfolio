import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

function Hero(props) {
  return (
    <Grid
      container
      className="hero text-center"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      {props.children}
    </Grid>
  );
}

export default Hero;
