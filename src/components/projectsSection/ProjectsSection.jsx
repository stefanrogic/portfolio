import "./projectsSection.scss";

import { motion } from "framer-motion";

import ProjectContainer from "../projectContainer/ProjectContainer";

const ProjectsSection = () => {
  return (
    <div className="default-margin">
      <div className="projects-section">
        <motion.h1 className="projects-header">PROJECTS</motion.h1>

        <div className="project-list">
          <ProjectContainer data={0} />
          <ProjectContainer data={1} />
          <ProjectContainer data={2} />
          <ProjectContainer data={3} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
