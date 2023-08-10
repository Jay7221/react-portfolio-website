import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectData from "../../constants/ProjectData";
import { useParams } from "react-router-dom";

const Project = () => {
    const { slug } = useParams();
    const data = ProjectData.find((elem) => (elem.id == slug));
  return (
    <div>
      <ProjectCard data={data} key={slug} />
    </div>
  );
};

export default Project;
