import "./projectsSection.scss";

import { motion } from "framer-motion";
import { useState } from "react";

import ProjectContainer from "../projectContainer/ProjectContainer";

const ProjectsSection = () => {
  const [projects] = useState([
    { name: "Tera Supplements", alt: "Supplement Web Store", slug: "tera-supplements", demo: "https://tera-supplements.netlify.app/", code: "https://github.com/Rasgrin/tera-supplements" },
    { name: "Quote Roulette", alt: "Random Quote Generator", slug: "quote-roulette", demo: "https://quote-roulette.netlify.app", code: "https://github.com/Rasgrin/quote-roulette" },
    { name: "Dev Jobs", alt: "Job Board", slug: "dev-jobs", demo: "https://dev-jobs-listings.netlify.app/", code: "https://github.com/Rasgrin/dev-jobs" },
    { name: "Age Detective", alt: "Age Calculator", slug: "age-detective", demo: "https://agedetective.netlify.app", code: "https://github.com/Rasgrin/age-detective" },
  ]);

  return (
    <div className="default-margin">
      <div className="projects-section">
        <motion.h1 className="projects-header">PROJECTS</motion.h1>

        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectContainer key={i} data={{ ...p, id: i }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
