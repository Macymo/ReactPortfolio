import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <About />
        <Project id="projects" name="projects" />
        <div className="skills">
        <hr></hr>
        HTML • CSS • JavaScript • JQuery • Mongo • React.js • Node.js • Express
        <hr></hr>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


