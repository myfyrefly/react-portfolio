import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkStyle: {
    margin: 20,
    color: "white",
    textDecoration: "none",
  },
}));

export default function NavAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.linkStyle}>
            <Typography variant="h5">About</Typography>
          </Link>
          <Link to="/projects" className={classes.linkStyle}>
            <Typography variant="h5">Projects</Typography>
          </Link>
          <Link to="/connect" className={classes.linkStyle}>
            <Typography variant="h5">Connect</Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
