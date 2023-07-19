import "./projectContainer.scss";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heroImg from "../../assets/heroImg.png";

import CodeIcon from "@mui/icons-material/Code";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectContainer = ({ data }) => {
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
            <motion.h1 className="project-name">{data.name}</motion.h1>
            <motion.p className="project-alt">{data.alt}</motion.p>
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

        <div className="right">
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
