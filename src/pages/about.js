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
    marginBottom: "5%",
    width: "70%",
  };

  return (
    <Grid>
      <Hero backgroundImage={Background}>
        <Grid item xs={0} sm={6} container direction="column">
          <Typography variant="h2">Sofia Mejia</Typography>
          <Typography variant="h4">Full Stack Web Developer</Typography>
          <Grid item>
            <Box textAlign="center" fontSize="h6.fontSize">
              I have an eye for making aesthetic frameworks for web applications
              and a passion for learning. I earned my certificate in full stack
              web development from the University of Texas at San Antonio where
              I also excelled in Javascript, React, and CSS.
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={0} sm={6}>
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
