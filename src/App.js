import React from "react";
import "./App.css";
import NavAppBar from "./components/AppBar";
// import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Projects from "./pages/projects";
import Connect from "./pages/connect";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <NavAppBar />
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/connect" component={Connect}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
