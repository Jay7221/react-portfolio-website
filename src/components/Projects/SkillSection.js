// SkillSection.js
import React from "react";
import { skills } from "../../constants/SkillList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillSection = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-40 p-4 m-4 text-center bg-white rounded-lg shadow"
          >
            <skill.icon className="text-5xl text-blue-500 mb-2 w-20" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <div className="bg-gray-300 h-2 rounded-full">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-gray-600 mt-2">{skill.proficiency}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
