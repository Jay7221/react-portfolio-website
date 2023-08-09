import './WorkCard.css';
import React from 'react'
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkCardData.map(
                    (curElem) => {
                        return (
                            <WorkCard prop={curElem} key={curElem.id} />
                        );
                    }
                )
            }
        </div>
    </div>
  )
}

export default Work