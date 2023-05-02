import "./project.scss";

import ContactMe from "../../components/contactMe/ContactMe";

import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../../data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);
  const previousProject = project.id === 0 ? projects.find((p) => p.id === 2) : projects.find((p) => p.id === project.id - 1);
  const nextProject = project.id === 2 ? projects.find((p) => p.id === 0) : projects.find((p) => p.id === project.id + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      {/* {JSON.stringify(project)} */}
      <div className="project-img">
        <img src={project.mainImg.img} alt={project.mainImg.name} />
      </div>
      <div className="project-info">
        <div className="left">
          <h2>{project.projectName}</h2>
          <div className="tags">
            {project.tags.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
          <p>{project.shortDesc}</p>

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
          <h2>Project Background</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio consectetur fugiat cumque aperiam praesentium adipisci nisi corrupti porro id earum dicta labore culpa nam veniam natus, amet inventore accusantium ipsam hic nihil
            sed, quia veritatis doloremque? Autem dolorum natus saepe quam cumque itaque. Illo alias voluptate delectus tempore aperiam quos ducimus facere iure doloremque unde fugiat officiis sequi blanditiis itaque voluptates debitis qui,
            consequatur quaerat excepturi nemo voluptatibus aliquam sed maxime autem? A, minima.
          </p>
          <h2>Static Previews</h2>
          <div className="images">
            {project.static.map((s, i) => (
              <div className="preview-img" key={i}>
                <img src={s.img} alt={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-projects">
        <Link className="left" to={project.id === 0 ? "/project/2" : `/project/${project.id - 1}`}>
          <h1>{previousProject.projectName}</h1>
        </Link>
        <Link className="right" to={project.id === 2 ? "/project/0" : `/project/${project.id + 1}`}>
          <h1>{nextProject.projectName}</h1>
        </Link>
      </div>
      <ContactMe />
    </div>
  );
};

export default Project;
