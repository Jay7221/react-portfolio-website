import React from 'react'
import HeroImage from '../HeroImage';
import Footer from '../Footer/Footer';
import Work from '../Projects/Projects';

const Home = () => {
  return (
    <div>
      <HeroImage />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home