import React from "react";
import "../styles/project.css";

function Project() {
    return (
        <div>
        <div className="imgBox">
            <div className="imgCont">
            <img className="trackerImg" src="./assets/fitnessTracker.png" alt="fitnessTracking"></img>
            </div>
            <div className="colorElement"></div>
        </div>
        <div className="imgBox">
            <div className="imgCont">
            <img className="markDownImg" src="./assets/mdGenerator.gif" alt="mdGenerator"></img>
            </div>
            <div className="colorElement"></div>
        </div>
        <div className="imgBox">
            <div className="imgCont">
            <img className="noteImg" src="./assets/noteTaker.png" alt="noteTaker"></img>
            </div>
            <div className="colorElement"></div>
        </div>
        
            <img className="teamGnrtrImg" src="./assets/teamProfileGenerator.gif" alt="teamGenerator"></img>
            <img className="teatherDashboardImg" src="./assets/weatherDashboard.png" alt="weatherDashboard"></img>
            <img className="SchdlrImg" src="./assets/workDayScheduler.png" alt="workDayScheduler"></img>
        </div>
        
    );
}


export default Project;
