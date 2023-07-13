import React from 'react'
import './Footer.css'
import { FaCode, FaFacebook, FaGithub, FaHome, FaLinkedin, FaLinkedinIn, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
            <div>
              <p>Vishrambag, Sangli</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>
              8390832186
            </h4>
          </div>
          <div className="email">
              <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
              jns29072003@gmail.com
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is me Jay Shirugpe.</p>
          <div className="social">
            <Link to="https://github.com/Jay7221">
              <FaGithub size={30} style={{color: "#fff", marginRight:"2rem"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/jay-shirgupe-650ab7233/">
              <FaLinkedin size={30} style={{color: "#fff", marginRight:"2rem"}}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer