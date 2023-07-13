import React from 'react'
import './HeroImage.css';
import IntroImg from "../assets/intro-img.png";
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={IntroImg} alt="Intro" className="intro-img" />
        </div>
        <div className="content">
            <p>HI, I'M A COMPETITVE PROGRAMMER and sometimes a DEVELOPER</p>
            <h1>I am Jay</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage