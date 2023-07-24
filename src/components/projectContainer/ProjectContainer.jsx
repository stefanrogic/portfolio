import "./projectContainer.scss";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heroImg from "../../assets/heroImg.png";

import CodeIcon from "@mui/icons-material/Code";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectContainer = ({ data, onClick, setProject, handleCursorSize }) => {
  return (
    <>
      {/* TODO: ADD DETAILED DESCRIPTION AND IMAGES FOR ALL PROJECTS (POPUP WINDOW) */}
      <motion.div
        className={`project-container ${data.id === 0 || data.id === 2 ? "project-even" : ""}`}
        viewport={{ once: true }}
        initial={{ opacity: 0, x: data.id === 0 || data.id === 2 ? "-100%" : "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="left">
          <div className="project-info">
            <div className="project-technologies">
              {data.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <motion.h1
              className="project-name"
              onClick={() => {
                setProject(data);
                onClick(true);
                handleCursorSize(false);
              }}
              onMouseEnter={() => handleCursorSize(true)}
              onMouseLeave={() => handleCursorSize(false)}
            >
              {data.name}
            </motion.h1>
            <motion.p
              className="project-alt"
              onClick={() => {
                setProject(data);
                onClick(true);
                handleCursorSize(false);
              }}
              onMouseEnter={() => handleCursorSize(true)}
              onMouseLeave={() => handleCursorSize(false)}
            >
              {data.alt}
            </motion.p>

            <p className="project-desc" onMouseEnter={() => handleCursorSize("true-text")} onMouseLeave={() => handleCursorSize("false-text")}>
              {data.shortDesc}
            </p>
          </div>
          <div className="buttons">
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

        <div
          className="right"
          onClick={() => {
            setProject(data);
            onClick(true);
            handleCursorSize(false);
          }}
          onMouseEnter={() => handleCursorSize(true)}
          onMouseLeave={() => handleCursorSize(false)}
        >
          <motion.img src={data.logo ? data.logo.img : heroImg} alt={data.logo ? data.logo.name : "hero-img"} whileHover={{ scale: 1.1 }} />
        </div>
      </motion.div>
      {data.id < 3 && (
        <motion.div className="separator" viewport={{ once: true }} initial={{ opacity: 0, x: data.id === 0 || data.id === 2 ? "-100%" : "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}></motion.div>
      )}
    </>
  );
};

export default ProjectContainer;
