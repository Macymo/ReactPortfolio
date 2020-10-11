import React from "react";
import "../styles/project.css";

// import TrackerImg from "./assets/fitnessTracker.png";
// import MarkdownImg from "./assets/mdGenerator.gif";
// import NoteImg from "./assets/noteTaker.png";
// import TeamGenerator from "./assets/teamProfileGenerator.gif";
// import WeatherDash from "./assets/weatherDashboard.png";
// import WorkSchdlr from "./assets/workDayScheduler.png";

function Project(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="imgBox">
                    <div className="imgCont">
                    <img className="img-fluid" src="./assets/fitnessTracker.png" alt=""></img>
                    </div>
                    <div className="colorElement"></div>
                </div>
            </div>
        </div>
        
    );
}


export default Project;
