import React from "react";
import Project from "../components/Project";
import { Element } from "react-scroll";
import "../styles/about.css";


const About = () => (
  <div>
    <img id="profilePic" src="./assets/mm.jpg" alt="profilePicture"></img>
      <div className="about">
        <h2>Web developer from New Mexico, moved to North Carolina with the desire to learn new things and see new places. 
        After ten years as a Cosmetologist with a background in developing creative solutions to ensure client satisfaction, 
        I'm channeling my creativity and problem solving through development.
        Team oriented and self motivated with experience working with teams for front-end and back-end applications, including MERN.
          </h2>
        <hr></hr>
        <p className="tag">Motivated to bring a high level of diligence and goal oriented drive into the creation of applications 
          <p>while continuously searching for new challenges to conquer.</p>
          </p>
        <hr></hr>
      </div>
    <Project>
      <Element id="projects" name="projects" />
    </Project>
      <div className="skills">
      HTML • CSS • JavaScript • JQuery • Mongo • React.js • Node.js • Express
      </div>
  </div>
);

export default About;