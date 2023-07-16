import "./projectContainer.scss";

import { motion } from "framer-motion";

import heroImg from "../../assets/heroImg.png";

const ProjectContainer = ({ data }) => {
  return (
    <div className="project-container" style={{ flexDirection: (data === 1 || data === 3) && "row-reverse" }}>
      <div className="left">
        <div className="project-info" style={{ alignItems: (data === 1 || data === 3) && " flex-end" }}>
          <motion.h1 className="project-name" style={{ textAlign: (data === 1 || data === 3) && "right" }}>
            Tera Supplements
          </motion.h1>
          <motion.p className="project-alt" style={{ textAlign: (data === 1 || data === 3) && "right" }}>
            Web Store
          </motion.p>
        </div>
        <div className="buttons" style={{ marginLeft: (data === 1 || data === 3) && "auto" }}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            LIVE DEMO
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            CODE
          </motion.button>
        </div>
      </div>

      <div className="right">
        <motion.img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default ProjectContainer;
