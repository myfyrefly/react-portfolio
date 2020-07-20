import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Background from "../assets/bg-img04.jpg";
import ProfilePic from "../assets/my-profile.jpg";
import { Typography, Grid } from "@material-ui/core";

function About() {
  const style = {
    borderRadius: "10%",
    display: "block",
    // marginLeft: "auto",
    // marginRight: "auto",
    marginTop: "10%",
    width: "70%",
  };

  return (
    <Grid>
      <Hero backgroundImage={Background}>
        <Grid item xs={6}>
          <Typography variant="h1">Sofia Mejia</Typography>
          <Typography variant="h4">Full Stack Web Developer</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={ProfilePic} alt="profile" style={style}></img>
        </Grid>
      </Hero>
      <Container>
        <div className="row">
          <div className="col-md-4">
            <h1>About Me</h1>
          </div>

          <div className="col-md-6" style={{ padding: 50 }}>
            <p>
              A former teacher and world traveler, now full stack web developer.
              I have an eye for making aesthetic designs for web applications
              and I really enjoy the satisfaction that comes with building an
              application from scratch. In the next phase of my professional
              career, I want to continue learning and improving my back-end
              development skills and work with a team that prioritizes effective
              communication and collaboration.
            </p>
          </div>
        </div>
      </Container>
    </Grid>
  );
}

export default About;
