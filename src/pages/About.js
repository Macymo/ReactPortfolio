import React from "react";
import Project from "../components/Project";
import "../styles/about.css";


const About = () => (
  <div>
    <img id="profilePic" src="./assets/mm.jpg" alt="profilePicture"></img>
    <div className="about">Web developer from New Mexico, moved to North Carolina with the desire to learn new things and see new places. 
      After ten years as a Cosmetologist with a background in developing creative solutions to ensure client satisfaction, 
      I'm channeling my creativity and problem solving through development.
      Team oriented, self motivated with experience working with teams for front-end and back-end applications, including MERN. 
      Strong communication skills to work with individuals of all professional levels and personal backgrounds. 
    <p>
      Motivated to bring a high level of diligence and goal oriented drive into the creation of applications while continuously searching for new challenges to conquer.
    </p>
    </div>
    <Project />
  </div>
);

export default About;