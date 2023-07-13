import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/hero-img.png';
import img2 from '../assets/intro-img.png';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo dolore blanditiis nostrum alias facilis odio! Perferendis molestiae eius nulla laboriosam accusamus labore numquam ea distinctio quibusdam maxime facere necessitatibus neque similique at, facilis quis. Aut ducimus culpa recusandae neque.
            </p>
            <Link to='/contact'>
                <div className="btn">Contact</div>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={ img1 } alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src={ img2 } alt="true" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent