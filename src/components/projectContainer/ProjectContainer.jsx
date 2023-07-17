import "./projectContainer.scss";

import { motion } from "framer-motion";

import heroImg from "../../assets/heroImg.png";

const ProjectContainer = ({ data }) => {
  return (
    <div className="project-container" style={{ flexDirection: (data.id === 0 || data.id === 2) && "row-reverse" }}>
      <div className="left">
        <div className="project-info" style={{ alignItems: (data.id === 0 || data.id === 2) && " flex-end" }}>
          <motion.h1 className="project-name" style={{ textAlign: (data.id === 0 || data.id === 2) && "right" }}>
            {data.name}
          </motion.h1>
          <motion.p className="project-alt" style={{ textAlign: (data.id === 0 || data.id === 2) && "right" }}>
            {data.alt}
          </motion.p>
        </div>
        <div className="buttons" style={{ marginLeft: (data.id === 0 || data.id === 2) && "auto" }}>
          <a href={data.demo} target="_blank">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              LIVE DEMO
            </motion.button>
          </a>
          <a href={data.code} target="_blank">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              CODE
            </motion.button>
          </a>
        </div>
      </div>

      <div className="right">
        <motion.img src={heroImg} alt="hero-img" whileHover={{ scale: 1.1 }} />
      </div>
    </div>
  );
};

export default ProjectContainer;
