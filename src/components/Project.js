import React from "react";
import "../styles/project.css";
import schdlr from "../assets/workDayScheduler.png";
import notes from "../assets/noteTaker.png";
import weather from "../assets/weatherDashboard.png";
import fitness from "../assets/fitnessTracker.png";
import team from "../assets/teamProfileGenerator.png";
import mdgenerator from "../assets/mdGenerator.png";

let projects = [
    {
        title:"Scheduler",
        subtitle:"Schedule Your Day!",
        image:schdlr,
        site:"https://macymo.github.io/WorkDayScheduler/",
        live:"Live on GitHub Pages",
        github:"https://github.com/Macymo/WorkDayScheduler",
        code:"GitHub Code",
        description: "A simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Moment.js library was used to work with date and time."
    },
    {
        title:"Notes",
        subtitle:"Make Some Notes!",
        image:notes,
        site:"https://macysnotetaker.herokuapp.com/",
        live:"Live on Heroku",
        github:"https://github.com/Macymo/NoteTaker",
        code:"GitHub Code",
        description: "An application that can be used to write, save, and delete notes. This application uses an express back-end and saves and retrieves note data from a JSON file."
    },
    {   
        title:"Weather",
        subtitle:"Check the Weather!",
        image:weather,
        site:"https://macymo.github.io/WeatherDashboard/",
        live:"Live on GitHub Pages",
        github:"https://github.com/Macymo/WeatherDashboard",
        code:"GitHub Code",
        description: "A weather dashboard that is responsive, runs in the browser, and features dynamically updated HTML and CSS. Uses OpenWeatherAPI."
    },
    {
        title:"Fitness",
        subtitle:"Track Your Fitness!",
        image:fitness,
        site:"https://trackingfitness.herokuapp.com",
        live:"Live on Heroku",
        github:"https://github.com/Macymo/FitnessTracker",
        code:"GitHub Code",
        description: "A full-stack workout tracking application using Mongo database with Mongoose schema and Express routes. Allows a user to create, view, and track daily workouts. A user can log multiple exercises in a workout on a given day; with the ability to track the name, type, weight, sets, reps, and duration of exercise, with a cardio exercise the user can track distance traveled."
    },
    {
        title:"Team Profiles",
        image:team,
        github:"https://github.com/Macymo/TeamProfileGenerator",
        code:"GitHub Code",
        description: "A Node CLI that takes in information about employees and generates an HTML webpage that displays a team roster based on the information provided by the user. Uses inquirer npm package."
    },
    {
        title:"ReadMe",
        image:mdgenerator,
        github:"https://github.com/Macymo/READMEGenerator",
        code:"GitHub Code",
        description: "A command-line application that dynamically generates a README.md from a user's input. The application is invoked with the following command: `node index.js` The user will be prompted for their GitHub username and other information pertaining to the project the README is for."
    }
]

function Project() {
    return (
        projects.map((project, i) => { 
        return (
        <div key={i} className="container">
            <div id="scroll" className="imgBox">
                    <div className="imgCont">
                    <h2 className ="imgBoxText"> { project.title }</h2>
                    <img className="img-fluid" src={ project.image } alt="projects"></img> 
                    </div>
                    <div className="colorElement"></div>
                <div className="imgBoxCont">
                    <div className="subtext">
                        <p> { project.description } </p>
                        <p><a className="site" href={ project.site } target="_blank" rel="noopener noreferrer"> { project.live } </a>
                        </p>
                        <a className="button" href={ project.github } target="_blank" rel="noopener noreferrer">{ project.code }</a>
                    </div>
                </div>
            </div>
        </div>
        )
    })
    );
}

export default Project;
