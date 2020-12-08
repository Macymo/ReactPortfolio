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
        <form action="mailto:macymol23@gmail.com" method="POST" encType="text/plain">
            <section className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputName">First Name</label>
                    <input name="firstName" type="name" className="form-control" id="inputName"></input>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputName">Last Name</label>
                    <input name="lastName"type="name" className="form-control" id="inputName"></input>
                </div>
            </section>
            <section className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputEmail4">Email</label>
                    <input name="email" type="email" className="form-control" id="inputEmail4"></input>
                </div>
            </section>
            <section className="form-row">
                <div className="form-group col-lg-12">
                    <label htmlFor="inputMessage">Message</label>
                    <textarea name="message" type="text" className="form-control" id="inputMessage"></textarea>
                </div>
                <button id="submitBtn" type="submit" className="btn btn-primary">Submit</button>
            </section>
        </form>     
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