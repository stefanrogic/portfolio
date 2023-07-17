import "./projectsSection.scss";

import { projects } from "../../data/projects";

import { motion } from "framer-motion";
import { useState } from "react";

import ProjectContainer from "../projectContainer/ProjectContainer";

const ProjectsSection = () => {
  // const [projects] = useState([
  //   { name: "Tera Supplements", alt: "Supplement Web Store", slug: "tera-supplements", demo: "https://tera-supplements.netlify.app/", code: "https://github.com/Rasgrin/tera-supplements" },
  //   { name: "Quote Roulette", alt: "Random Quote Generator", slug: "quote-roulette", demo: "https://quote-roulette.netlify.app", code: "https://github.com/Rasgrin/quote-roulette" },
  //   { name: "Dev Jobs", alt: "Job Board", slug: "dev-jobs", demo: "https://dev-jobs-listings.netlify.app/", code: "https://github.com/Rasgrin/dev-jobs" },
  //   { name: "Age Detective", alt: "Age Calculator", slug: "age-detective", demo: "https://agedetective.netlify.app", code: "https://github.com/Rasgrin/age-detective" },
  // ]);

  return (
    <div className="default-margin">
      <div className="projects-section">
        <div className="projects-heading">
          <motion.h1 className="projects-header">
            PROJEC<span>T</span>S
          </motion.h1>
          <div className="line"></div>
        </div>

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
