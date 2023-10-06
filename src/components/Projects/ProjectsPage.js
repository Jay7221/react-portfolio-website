import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import HeroImage2 from "../HeroImage2";
import ProjectContainer from "./ProjectContainer";

const ProjectPage = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS." text="Some of my most recent works" />
      <ProjectContainer />
      <Footer />
    </div>
  );
};

export default ProjectPage;
