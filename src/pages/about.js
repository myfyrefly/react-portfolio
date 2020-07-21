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
        {/* <Hero> */}
        <Grid container className={classes.root}>
          <Grid item xs={1}></Grid>
          <Grid item xs={0} sm={5} container direction="column">
            <Typography variant="h1">Sofia Mejia</Typography>
            <Typography variant="h3">Full Stack Web Developer</Typography>
            <Divider />
            <hr />
            <Grid item>
              <Box textAlign="center" fontSize="h4.fontSize">
                I'm a full stack developer with an eye for making aesthetic
                frameworks for web applications and a passion for learning.
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={5}>
            <img src={ProfilePic} alt="profile" style={style}></img>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Hero>
    </div>
  );
}

export default About;
