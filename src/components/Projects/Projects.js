import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectData from '../../constants/ProjectData';

const Projects = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                ProjectData.map(
                    (curElem) => {
                        return (
                            <ProjectCard data={curElem} key={curElem.id} />
                        );
                    }
                )
            }
        </div>
    </div>
  )
}

export default Projects