import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-gray-600 line-clamp-3">{project.description}</p>
        <div className="mt-4">
          <button className="m-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Demo
            </a>
          </button>
          <button className="m-4">
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md"
            >
              Source Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
