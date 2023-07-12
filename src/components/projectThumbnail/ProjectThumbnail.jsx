import "./projectThumbnail.scss";

import { Link } from "react-router-dom";

/*project.id % 2 == 1 && "project-thumbnail-odd"*/

const ProjectThumbnail = ({ project, currentImg }) => {
  return (
    <div className={`project-thumbnail ${project.id % 2 == 1 && "project-thumbnail-odd"}`}>
      <div className="left">
        <img src={project.img} alt="project_img" />
      </div>
      <div className="right">
        <h2>{project.projectName}</h2>
        <p>{project.shortDesc}</p>

        <div className="buttons">
          <Link to={`/project/${project.id}`}>
            <button>MORE</button>
          </Link>
          <Link to={project.visit} target="_blank">
            <button>LIVE DEMO</button>
          </Link>
        </div>
        <div className="project-line"></div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
