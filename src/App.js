import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import About from "./pages/about";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
