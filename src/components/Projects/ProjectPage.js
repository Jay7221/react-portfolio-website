import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../constants/Projects";

const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);

  // You can fetch the project data based on the id here.
  // For this example, let's assume you have a list of projects.

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    // Handle the case where the project with the given id is not found.
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto py-40 mt-16">
      {/* Add margin-top (mt-16) to push content below the navbar */}
      <h1 className="text-3xl font-semibold">{project.title}</h1>
      <div>{project.description}</div>
      {project.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Project ${index + 1}`}
          className="my-4"
        />
      ))}
    </div>
  );
};

export default ProjectPage;
