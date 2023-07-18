import "./projectsSection.scss";

import { projects } from "../../data/projects";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import ProjectContainer from "../projectContainer/ProjectContainer";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: "-50vw" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="default-margin">
      <div className="projects-section">
        <motion.div className="projects-heading" ref={ref} animate={isInView ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5, delay: 0.5 }}>
          <motion.h1 className="projects-header">
            PROJEC<span>T</span>S
          </motion.h1>
          <div className="line"></div>
        </motion.div>

        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectContainer key={i} data={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
