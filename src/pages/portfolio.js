import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "../components/Container";
import Row from "../components/Row";

const cardStyle = {
  margin: 5,
};

const projectCards = () => {
  const cardInfo = [
    {
      image: "/images/dreamstream.jpg",
      title: "dreamstream",
      text:
        "A social dream app where users can share their dreams anonymously and without judgement.",
      btnText: "drift into the stream...",
      link: "https://shrouded-fjord-87134.herokuapp.com/dreamstream-home",
    },
    {
      image: "/images/neverBored.jpg",
      title: "Never Bored!",
      text:
        "Never Bored was a joint project created to relieve boredom by suggesting things to do in your area.",
      btnText: "Cure your Boredom!",
      link: "https://myfyrefly.github.io/never-bored/",
    },
    {
      image: "/images/fizz-quiz.jpg",
      title: "Fizz Quiz",
      text:
        "Test your soda knowledge with Fizz Quiz! a fun multiple choice game application.",
      btnText: "Can you whiz this quiz?",
      link: "https://myfyrefly.github.io/fizz-quiz/",
    },
    {
      image: "/images/travel-forecast.jpg",
      title: "Travel Forecaster",
      text:
        "A weather app that allows you to search for a city and see the current & 5-day weather forecast.",
      btnText: "Plan for the Weather",
      link: "https://myfyrefly.github.io/travel-forecast/",
    },
    {
      image: "/images/sampleTeam.png",
      title: "Team Generator",
      text:
        "A command line application that generatres a team of software engineers and/or interns",
      btnText: "see more on Github",
      link: "https://github.com/myfyrefly/team-generator",
    },
    {
      image: "/images/burger-biz.jpg",
      title: "Burger Biz",
      text:
        "A burger logger application made with MySQL, Node, Express, Handlebars and a homemade ORM (yum!)",
      btnText: "what's your craving?",
      link: "https://polar-beach-58147.herokuapp.com/",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="col-md-3 mx-auto">
        <Card style={cardStyle} key={index}>
          <Card.Img variant="top" src={card.image} key={index} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button href={card.link} target="_blank" variant="primary">
              {card.btnText}
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  //
  return (
    <div className="App">
      <Container>
        <Row>{cardInfo.map(renderCard)}</Row>
      </Container>
    </div>
  );
};

export default projectCards;
