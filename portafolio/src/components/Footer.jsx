import React from "react";
import "../css/Footer.css";
import face from "../assets/face.png";
import git from "../assets/git.png";
import gmail from "../assets/gmail.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="abajo">
        <h3>¡CONTACTAME!</h3>
        <a
          href="https://www.facebook.com/valentina.r.juarez"
          className="boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={face} alt="facebook" className="icon" />
        </a>
        {"  "}
        <a
          href="https://github.com/valentinajuarez01"
          className="boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} alt="github" className="icon" />
        </a>{" "}
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          className="boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="gmail" className="icon" />
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
