import React from "react"
import "../styles/footer.css"

function Footer() {
    return (
    <footer className="footer">
        <div className="footerConnectCont">
            Connect with Me
        <img className="linkedImg" src="/assets/LinkedIn.png" alt="Linkedin"></img>
        <img className="gitImg" src="/assets/GitHub.png" alt="GitHub"></img>
        </div>
        <div className="footerNavCont">
            <p role="img" id="mm">Made by MM<span role="img" aria-label="jsx-a11y/accessible-emoji">❤️</span>
            </p>
            <p id="year">2020
            </p>
        </div>
    </footer>
  );
}

export default Footer;