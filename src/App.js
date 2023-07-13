import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import About from './routes/About';
import Contact from './routes/Contact';
import Games from './routes/Games';
import Home from './routes/Home';
import Project from './routes/Project';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  )
}

export default App