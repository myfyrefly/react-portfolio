import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <NavBar />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      {/* <Route exact path="/contact" component={} /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
