import React from "react";
import "../styles/project.css";
import schdlr from "../assets/workDayScheduler.png";
import notes from "../assets/noteTaker.png";
import weather from "../assets/weatherDashboard.png";
import fitness from "../assets/fitnessTracker.png";
import team from "../assets/teamProfileGenerator.gif";
import mdgenerator from "../assets/mdGenerator.gif";

let projects = [
    {
        title:"Scheduler",
        subtitle:"Schedule Your Day!",
        image:schdlr,
        site:"https://macymo.github.io/WorkDayScheduler/",
        code:"Live on GitHub Pages"
    },
    {
        title:"Notes",
        subtitle:"Make Some Notes!",
        image:notes,
        site:"https://macysnotetaker.herokuapp.com/",
        code:"Live on Heroku"
    },
    {   
        title:"Weather",
        subtitle:"Check the Weather!",
        image:weather,
        site:"https://macymo.github.io/WeatherDashboard/",
        code:"Live on GitHub Pages"
    },
    {
        title:"Fitness",
        subtitle:"Track Your Fitness!",
        image:fitness,
        site:"https://trackingfitness.herokuapp.com",
        code:"Live on Heroku"
    },
    {
        title:"Team Profiles",
        subtitle:"Generator Your Team Profiles!",
        image:team,
        site:"https://github.com/Macymo/TeamProfileGenerator",
        code:"GitHub Code"
    },
    {
        title:"ReadMe",
        subtitle:"MardDown Generator",
        image:mdgenerator,
        site:"https://github.com/Macymo/READMEGenerator",
        code:"GitHub Code"
    }
]

function Project() {
    return (
        projects.map((project, i) => { 
        return (
        <div key={i} className="container">
                <div id="scroll" className="imgBox">
                    <div className="imgCont">
                    <div className="imgBoxText">
                        <h2> { project.title }</h2>
                        </div>
                    <img className="img-fluid" src={ project.image } alt="projects"></img> 
                    </div>
                    <div className="colorElement"></div>
                    <div className="imgBoxCont">
                        <div className="subtext">
                            <p> { project.subtitle } </p>
                            <a className="button" href={ project.site } target="_blank" rel="noopener noreferrer">{ project.code }</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    );
}


export default Project;
