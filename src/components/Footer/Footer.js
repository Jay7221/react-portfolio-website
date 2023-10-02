// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen, // You can replace this with the appropriate Codechef icon
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { socialHandles } from '../../constants/SocialHandles';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="flex items-center m-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-2xl" />
              <p className="text-lg">Pune, Maharashtra, India - 412105</p>
            </div>
            <div className="flex items-center m-4">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-2xl" />
              <p className="text-lg">+91 8390832186</p>
            </div>
            <div className="flex items-center m-4">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-2xl" />
              <p className="text-lg">jns29072003@gmail.com</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {
              socialHandles.map(
                (handle) => (
            <a
              href={handle.url}
              target="_blank"
              rel="noopener noreferrer"
            >

              <handle.icon className="text-sm" />
            </a>
                )
              )
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
