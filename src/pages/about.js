import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Background from "../assets/bg-img04.jpg";
import ProfilePic from "../assets/my-profile.jpg";

function About() {
  const style = {
    position: "absolute",
    maxWidth: 300,
    maxHeight: 300,
  };

  return (
    <div>
      <Hero backgroundImage={Background}>
        <h1>Sofia Mejia</h1>
        <h2>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <div className="row">
          <div className="col-4">
            <h1>About Me</h1>
            <img src={ProfilePic} alt="profile" style={style}></img>
          </div>
          <div className="col-8">
            <p>
              A former world traveler and teacher, now full stack web developer.
              I have an eye for making aesthetic designs for web applications
              and I really enjoy the satisfaction that comes with building an
              application from scratch. Previously, I was a full time elementary
              teacher and student; teaching during the day and completing my
              teaching certification courses by night. The demands as a teacher
              change at a moment’s notice and these daily challenges gave me
              countless opportunities to problem solve and find innovative
              solutions. In the next phase of my professional career, I want to
              continue learning and improving my back-end development skills and
              work with a team that prioritizes effective communication and
              collaboration.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
