import './index.css';
import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  console.log(props);
  return (
    <div className="project-card">
      <img src={props.prop.imgsrc} alt="Project" />
      <h2 className="project-title">{props.prop.title}</h2>
      <div className="pro-details">
        <p>{props.prop.text}</p>
        <div className="pro-btns">
          <NavLink to={props.prop.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={props.prop.source} className="btn">
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
