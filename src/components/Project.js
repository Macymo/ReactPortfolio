import React from "react";
import projects from "../projects.json";
import "../styles/project.css";




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
