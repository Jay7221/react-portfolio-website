import React from 'react'
import HeroImage from '../HeroImage';
import Footer from '../Footer/Footer';
import Work from '../Projects/Work';

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