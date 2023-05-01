import "./project.scss";

import ContactMe from "../../components/contactMe/ContactMe";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../../data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      {/* {JSON.stringify(project)} */}
      <div className="project-img"></div>
      <div className="project-info">
        <div className="left">
          <h2>{project.projectName}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum unde, doloremque cupiditate dolor, assumenda veniam voluptates fuga molestiae accusamus nobis eum facilis cum! Ex commodi corrupti quas voluptatem aspernatur hic iste
            asperiores, quaerat unde. Obcaecati adipisci suscipit quis illo aut!
          </p>
          <div className="tags">
            <span>FRONTEND DEVELOPMENT</span>
            <span>REACT APP</span>
          </div>
          <div className="buttons">
            <a href={project.visit} target="_blank">
              <button>VISIT</button>
            </a>
            <a href={project.code} target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>
        <div className="right">
          <h2>PROJECT BACKGROUND</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio consectetur fugiat cumque aperiam praesentium adipisci nisi corrupti porro id earum dicta labore culpa nam veniam natus, amet inventore accusantium ipsam hic nihil
            sed, quia veritatis doloremque? Autem dolorum natus saepe quam cumque itaque. Illo alias voluptate delectus tempore aperiam quos ducimus facere iure doloremque unde fugiat officiis sequi blanditiis itaque voluptates debitis qui,
            consequatur quaerat excepturi nemo voluptatibus aliquam sed maxime autem? A, minima.
          </p>
          <h2>STATIC PREVIEWS</h2>
          <div className="images">
            <div className="preview-img"></div>
            <div className="preview-img"></div>
            <div className="preview-img"></div>
          </div>
        </div>
      </div>
      <div className="list-projects">
        <Link className="left" to={project.id === 0 ? "/project/3" : `/project/${project.id - 1}`}>
          <h1>PROJECT 3</h1>
        </Link>
        <Link className="right" to={project.id === 2 ? "/project/0" : `/project/${project.id + 1}`}>
          <h1>PROJECT 2</h1>
        </Link>
      </div>
      <ContactMe />
    </div>
  );
};

export default Project;
