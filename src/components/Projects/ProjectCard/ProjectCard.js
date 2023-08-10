import './index.css';
import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ data }) => {
  const { title, imgsrc, text, view, source } = data;
  return (
    <div className="project-card">
      <img src={imgsrc} alt="Project" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={source} className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
