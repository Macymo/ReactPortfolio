import React from "react";
import "../styles/about.css";
import profilepic from "../assets/mm.jpg";

const About = () => (
  <div>
    <img id="profilePic" src={profilepic} alt="profilePicture"></img>
      <div className="about">
        <h2>Web developer from New Mexico, currently residing in Cary, North Carolina. 
        <br></br>
        After ten years as a Cosmetologist, I decided to move to North Carolina to take advantage of the many educational opportunites and pursue a career change.
        I have an extensive background in developing creative solutions to ensure client satisfaction, and a desire to learn new things and see new places.
        <br></br>
        I'm now channeling my creativity and problem solving through web development.
        <br></br> 
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