import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "5%",
    // maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Projects() {
  const classes = useStyles();

  const cardInfo = [
    {
      image: "/images/prityApp.jpg",
      title: "PRITY",
      text:
        "A MERN app that allows users to browse and test real cosmetic products virtually on a customizable avatar",
      btnText: "enhance your beauty",
      link: "https://dry-savannah-54348.herokuapp.com/",
    },
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

  const renderProject = (card, index) => {
    return (
      <Grid item xs={12} sm={6}>
        <Card key={index} className={classes.root} variant="outlined">
          <CardMedia
            className={classes.media}
            image={card.image}
            title="project screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.text}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={card.link}
              target="_blank"
            >
              {card.btnText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} alignItems="center">
      {cardInfo.map(renderProject)}
    </Grid>
  );
}
