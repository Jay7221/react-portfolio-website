import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "../../constants/ProjectData";
import { Link } from "react-router-dom";

const ProjectContainer = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ProjectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
