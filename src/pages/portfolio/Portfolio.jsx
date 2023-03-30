import "./porfolio.scss";

import ContactMe from "../../components/contactMe/ContactMe";
import ProjectThumbnail from "../../components/projectThumbnail/ProjectThumbnail";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="title">MY PROJECTS</h1>
      {[0, 1, 2].map((project, i) => (
        <ProjectThumbnail key={i} project={i} />
      ))}
      <ContactMe />
    </div>
  );
};

export default Portfolio;
