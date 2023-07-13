import React from 'react'
import NavBar from '../components/NavBar';
import HeroImage from '../components/HeroImage';
import Footer from '../components/Footer';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home