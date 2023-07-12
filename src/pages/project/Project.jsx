import "./project.scss";

import ContactMe from "../../components/contactMe/ContactMe";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../../data/projects";

import ImageList from "../../components/imageList/ImageList";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id == id);

  const [imageList, setImageList] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const previousProject = project.id === 0 ? projects.find((p) => p.id === 3) : projects.find((p) => p.id === project.id - 1);

  const nextProject = project.id === 3 ? projects.find((p) => p.id === 0) : projects.find((p) => p.id === project.id + 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      {/* {JSON.stringify(project)} */}
      {imageList && <ImageList onClose={setImageList} images={project.static} currentImg={currentImg} onList={setCurrentImg} />}
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
              <button>LIVE DEMO</button>
            </a>
            <a href={project.code} target="_blank">
              <button>CODE</button>
            </a>
          </div>
        </div>
        <div className="right">
          {project.projectName === "Tera Supplements" ? "" : <h2>Project Background</h2>}
          {project.projectName === "Tera Supplements" ? "" : project.background.map((bg, i) => <p key={i}>{bg}</p>)}
          <h2 className="static" style={{ marginTop: project.projectName === "Tera Supplements" && "0" }}>
            Static Previews
          </h2>
          <div className="images">
            {project.static.map((s, i) => (
              <div
                className="preview-img"
                key={i}
                onClick={() => {
                  setCurrentImg(i);
                  setImageList(true);
                }}
              >
                <img src={s.img} alt={s.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="list-projects">
        <Link className="left" to={project.id === 0 ? "/project/3" : `/project/${project.id - 1}`} onClick={() => window.scrollTo(0, 0)}>
          <h1>{previousProject.projectName}</h1>
        </Link>
        <Link className="right" to={project.id === 3 ? "/project/0" : `/project/${project.id + 1}`} onClick={() => window.scrollTo(0, 0)}>
          <h1>{nextProject.projectName}</h1>
        </Link>
      </div>
      <ContactMe />
    </div>
  );
};

export default Project;
