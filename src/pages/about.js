import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Background from "../assets/bg-img04.jpg";

function About() {
  return (
    <div>
      <Hero backgroundImage={Background}>
        <h1>Sofia Mejia</h1>
        <h2>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I am a full-stack web developer with a newfound love for
              programming! I have an eye for making aesthetic designs for web
              applications and I really enjoy the satisfaction that comes with
              building an application from scratch. Previously, I was a full
              time elementary teacher and student; teaching during the day and
              completing my teaching certification courses by night. The demands
              as a teacher change at a moment’s notice and these daily
              challenges gave me countless opportunities to problem solve and
              find innovative solutions. In the next phase of my professional
              career, I want to continue learning and improving my back-end
              development skills and work with a team that prioritizes effective
              communication and collaboration.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
