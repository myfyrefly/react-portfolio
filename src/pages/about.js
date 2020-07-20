import React from "react";
import Hero from "../components/Hero";
import Background from "../assets/bg-img04.jpg";
import ProfilePic from "../components/images/portfolioProfile.jpg";
import { Typography, Grid, Box } from "@material-ui/core";

function About() {
  const style = {
    borderRadius: "10%",
    // display: "block",
    marginTop: "5%",
    // marginBottom: "auto",
    width: "70%",
  };

  return (
    <Grid>
      <Hero backgroundImage={Background}>
        <Grid item xs={6} container direction="column">
          <Typography variant="h1">Sofia Mejia</Typography>
          <Typography variant="h4">Full Stack Web Developer</Typography>
          <Grid item>
            <Box textAlign="center" fontSize="h6.fontSize">
              A former teacher and world traveler, now full stack web developer.
              I have an eye for making aesthetic designs for web applications
              and I really enjoy the satisfaction that comes with building an
              application from scratch.
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={ProfilePic} alt="profile" style={style}></img>
        </Grid>
      </Hero>
      {/* <Grid item>
        <Typography variant="h2">About Me</Typography>
      </Grid> */}
    </Grid>
  );
}

export default About;
