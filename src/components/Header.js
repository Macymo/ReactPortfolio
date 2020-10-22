import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <Link className="navbar-brand" to="/">Macy Molina</Link>
                <p className="content">HTML • CSS • JavaScript • JQuery • Mongo • Express • React.js • Node.js 
                    </p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto text-right">
                    <li className="nav-item">
                        <a className="nav-link active" 
                            href= "#scroll"
                            >Projects
                            </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active"
                            href="https://docs.google.com/document/d/1vYrzIts0Y4kfHZU6AVOTglwW30kN5NggXnpnEE_atKY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"
                            >Résumé
                            </a>   
                    </li> 
                </ul>
            </div>
        </nav>
    );
}

export default Header;
