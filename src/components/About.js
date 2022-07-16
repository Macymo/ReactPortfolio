import React from "react";
import "../styles/about.css";
import profilepic from "../assets/mm.jpg";

const About = () => (
  <div>
      <div className="about">
        <img id="profilePic" src={profilepic} alt="profilePicture"></img>
        <h2 className="aboutPara">Web developer from New Mexico, currently residing in the Triangle area of North Carolina. 
          <br></br>
        I have an extensive background in developing creative solutions to ensure client satisfaction, and a desire to learn new things and see new places.
          <br></br>
        After ten years as a Cosmetologist, I'm now channeling my creativity and problem solving through web development. Currently, my focus is on SQL, JavaScript, Visual Basic, and ASP.NET. 
          <br></br> 
        Team oriented and self motivated with experience working with teams for front-end and back-end applications, including MERN.
        </h2>
      </div>
      <div>
        <hr></hr>
        <h4 className="tag">Motivated to bring a high level of diligence and goal oriented drive into the creation of applications 
          <p>while continuously searching for new challenges to conquer.</p>
        </h4>
        <hr></hr>
      </div>
  </div>
);

export default About;