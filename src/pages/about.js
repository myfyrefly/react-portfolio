import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Background from "../assets/bg-img04.jpg";
import ProfilePic from "../assets/my-profile.jpg";
import { Typography } from "@material-ui/core";

function About() {
  const style = {
    maxWidth: 300,
    maxHeight: 300,
  };

  // const aboutStyle = {
  //   color: "white",
  //   textShadow: "2px 2px black",
  // };

  return (
    <div>
      <Hero backgroundImage={Background}>
        <h1>Sofia Mejia</h1>
        <h2>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-md-4">
            <h1>About Me</h1>
            <img src={ProfilePic} alt="profile" style={style}></img>
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
    </div>
  );
}

export default About;
