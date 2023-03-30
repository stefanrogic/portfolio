import "./projectThumbnail.scss";

import { Link } from "react-router-dom";

const ProjectThumbnail = ({ project }) => {
  return (
    <div className={`project-thumbnail ${project % 2 == 1 && "project-thumbnail-odd"}`}>
      <div className="left"></div>
      <div className="right">
        <h2>PROJECT {project}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quas a, laboriosam quasi facere veniam reprehenderit mollitia voluptatum obcaecati corporis labore ipsam illo porro, nihil in odio perspiciatis dicta accusamus!</p>

        <Link to={`/project/${project}`}>
          <button>MORE</button>
        </Link>
        <div className="project-line"></div>
      </div>
    </div>
  );
};

export default ProjectThumbnail;
