import React from "react";
import "./HeroImage.css";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          src="/images/computer-programming.webp"
          alt="Intro"
          className="intro-img"
        />
      </div>
      <div className="content">
        <p>HI, I'M A COMPETITVE PROGRAMMER and sometimes a DEVELOPER</p>
        <h1>I am Jay</h1>
        <div className="rounded-full w-40 h-40 m-8 mx-auto overflow-hidden">
          <img
            src='images/jay.jpeg'
            alt="Jay"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
