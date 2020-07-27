import React from "react";
import Hero from "../components/Hero";
import Background from "../assets/bg-img04.jpg";
import ProfilePic from "../components/images/portfolioProfile.jpg";
import { Typography, Grid, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "5%",
  },
});

function About() {
  const classes = useStyles();
  const style = {
    borderRadius: "10%",
    // display: "block",
    marginTop: "5%",
    marginBottom: "5%",
    width: "70%",
  };

  return (
    <div>
      <Hero backgroundImage={Background}>
        <Grid container className={classes.root}>
          <Grid item xs={1}></Grid>
          <Grid item xs={false} sm={5} container direction="column">
            <Typography variant="h2">Sofia Mejia</Typography>
            <br />
            <Divider />
            <br />
            <Grid item>
              <Box textAlign="center" fontSize="h4.fontSize">
                I'm a <strong>full stack web developer</strong> with an eye for
                creating aesthetic frameworks for web applications and a{" "}
                <strong>passion for learning.</strong>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={5}>
            <img src={ProfilePic} alt="profile" style={style}></img>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hero>
    </div>
  );
}

export default About;
