import React from "react";
import projects from "../projects.json";
import "../styles/project.css";




function Project() {
    return (
        projects.map((project) => { 
        return (
        <div className="container">
            <div className="row">
                <div className="imgBox">
                    <div className="imgCont">
                    <div className="imgBoxText"></div>
                        <h2> { project.title }</h2>
                    <img className="img-fluid" src={ project.image } alt="projects"></img> 
                    </div>
                    <div className="colorElement"></div>
                    <div className="imgBoxCont">
                        {/* <div className="imgBoxText"></div>
                        <h2> { project.title }</h2> */}
                        <div className="subtext">
                            <p> { project.subtitle } </p>
                            <a className="button" href={ project.site } target="_blank" rel="noopener noreferrer">{ project.code }</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    })
    );
}


export default Project;
