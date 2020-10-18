import React from "react";
import "../styles/about.css";
import profilepic from "../assets/mm.jpg";

const About = () => (
  <div>
    <img id="profilePic" src={profilepic} alt="profilePicture"></img>
      <div className="about">
        <h2>Web developer from New Mexico, moved to North Carolina with the desire to learn new things and see new places. 
        After ten years as a Cosmetologist, with a background in developing creative solutions to ensure client satisfaction, 
        I'm channeling my creativity and problem solving through development.
        Team oriented and self motivated with experience working with teams for front-end and back-end applications, including MERN.
          </h2>
        <hr></hr>
        <h4 className="tag">Motivated to bring a high level of diligence and goal oriented drive into the creation of applications 
          <p>while continuously searching for new challenges to conquer.</p>
          </h4>
        <hr></hr>
      </div>
  </div>
);

export default About;