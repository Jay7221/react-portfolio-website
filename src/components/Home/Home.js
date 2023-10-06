import React from "react";
import HeroImage from "../HeroImage";
import Footer from "../Footer/Footer";
import ProjectContainer from "../Projects/ProjectContainer";
import SkillSection from "../Projects/SkillSection";

const Home = () => {
  return (
    <div>
      <HeroImage />
      <ProjectContainer />
      <SkillSection />
      <Footer />
    </div>
  );
};

export default Home;
