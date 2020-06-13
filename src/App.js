import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <NavBar />
      <header className="App-header">
        <p>My new React Portfolio!</p>
        <a
          className="App-link"
          href="https://myfyrefly.github.io/mejia-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my Materialize Porfolio
        </a>
      </header>
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      {/* <Route exact path="/contact" component={} /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
