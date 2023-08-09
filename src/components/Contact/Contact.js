import React from 'react'
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import HeroImage2 from '../HeroImage2';
import Form from '../Form';

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImage2 heading="CONTACT." text="Let's have a chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact