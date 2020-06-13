import React from "react";
import { Card } from "react-bootstrap";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const projectCards = () => {
  const cardInfo = [
    {
      image: "/images/dreamstream.jpg",
      title: "dreamstream",
      text:
        "A social dream app where users can share their dreams anonymously and without judgement.",
    },
    {
      image: "/images/neverBored.jpg",
      title: "Never Bored!",
      text:
        "Never Bored was a joint project created to relieve boredom by suggesting things to do in your area.",
    },
    {
      image: "/images/fizz-quiz.jpg",
      title: "Fizz Quiz",
      text:
        "Test your soda knowledge with Fizz Quiz! a fun multiple choice game application.",
    },
    {
      image: "/images/travel-forecast.jpg",
      title: "Travel Forecaster",
      text:
        "A weather dashboard app that allows the user to search for a city and see the current and 5-day weather forecast. This app utilizes the Open Weather API",
    },
    {
      image: "/images/sampleTeam.png",
      title: "Team Generator",
      text:
        "A command line application that generatres a team of software engineers and/or interns",
    },
    {
      image: "/images/burger-biz.jpg",
      title: "Burger Biz",
      text:
        "A burger logger application made with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img variant="top" src={card.image} key={index} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };

  return <div className="App">{cardInfo.map(renderCard)}</div>;
};

export default projectCards;
