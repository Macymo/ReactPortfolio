import React from "react";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/footer.css";
import linkedin from "../assets/LinkedIn.png";
import github from "../assets/GitHub.png";

function Footer() {
    return (
    <footer className="footer">
        <div className="footerConnectCont">
            Connect with Me
            <a className="linkedin" href="https://www.linkedin.com/in/macymolina" target="_blank" rel="noopener noreferrer">
            <img className="linkedImg" src={linkedin} alt="Linkedin"></img>
            </a>
            <a className="github" href="https://github.com/Macymo" target="_blank" rel="noopener noreferrer">
            <img className="gitImg" src={github} alt="GitHub"></img>
            </a>
        </div>
        <div className="contact">
        <a id="email" href="macymol23@gmail.com"> macymol23@gmail.com </a>
        </div>
        <div className="footerNavCont">
            <p role="img" id="mm">Made by MM<span role="img" aria-label="jsx-a11y/accessible-emoji">❤️</span>
            </p>
            <p id="year">2020
            </p>
            <a className="topButton scroll-anchor-link" href="#top">
            Back To Top<FontAwesomeIcon icon={faArrowCircleUp} /></a>
        </div>
    </footer>
  );
}

export default Footer;