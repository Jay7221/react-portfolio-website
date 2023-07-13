import './AboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img2 from '../assets/codechef_rating.png';
import img1 from '../assets/competitive_programming.png';

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                Hello there! I am a passionate coder with a deep interest in Mathematics and Computer Science, and I find great joy in engaging with competitive programming. 
                <br/>
                Over the past two years, I have actively participated in coding contests on platforms like Codeforces and CodeChef, achieving notable milestones (including a maximum rating of 6 stars on CodeChef and reaching the Blue Expert level on Codeforces). Alongside my competitive programming journey, 
                <br/>
                I have also delved into the Django framework, utilizing it effectively during various hackathons. I've had the opportunity to contribute to backend application development, resulting in my team securing top-three positions on several occasions. 
                <br/>
                Furthermore, I possess a strong fascination with the field of Artificial Intelligence and its potential applications. This passion drives me to continually explore and learn more about AI.
            </p>
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