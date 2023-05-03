import "./porfolio.scss";

import ContactMe from "../../components/contactMe/ContactMe";
import ProjectThumbnail from "../../components/projectThumbnail/ProjectThumbnail";

import { projects } from "../../data/projects";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio">
      <h1 className="title">My Projects</h1>
      {projects.map((project, i) => (
        <ProjectThumbnail key={i} project={project} />
      ))}
      <ContactMe />
    </div>
  );
};

export default Portfolio;
