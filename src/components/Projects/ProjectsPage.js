import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import HeroImage2 from '../HeroImage2'
import Projects from './Projects'

const ProjectPage = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default ProjectPage;