import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Games from './components/Games/Games';
import Home from './components/Home/Home';
import ProjectsPage from './components/Projects/ProjectsPage';
import Project from './components/Projects/Project';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<Project/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  )
}

export default App