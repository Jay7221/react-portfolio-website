import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import HeroImage2 from '../HeroImage2'
import Work from './Work'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project