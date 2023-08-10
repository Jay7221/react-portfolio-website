import React from 'react'
import Footer from '../Footer/Footer';
import HeroImage2 from '../HeroImage2';
import AboutContent from './AboutContent/AboutContent';

const About = () => {
  return (
    <div>
      <HeroImage2 heading="ABOUT." text="I am a Competitive Programmer" />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About