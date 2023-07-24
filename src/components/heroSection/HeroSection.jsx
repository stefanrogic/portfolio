import "./heroSection.scss";

import { motion } from "framer-motion";

import heroImg from "../../assets/heroImg.png";

const HeroSection = ({ onScroll, handleCursorSize }) => {
  return (
    <div className="default-margin">
      <div className="heroSection">
        <div className="left">
          <motion.div className="greet" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
            <motion.h1 className="greet-hello">Hello, my name is Stefan</motion.h1>
            <motion.p className="greet-role">Frontend Developer</motion.p>
          </motion.div>
          <motion.div className="links" initial={{ x: "-100vw" }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 1 }}>
            <motion.button onClick={() => onScroll(".projects-section")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              PROJECTS
            </motion.button>
          </motion.div>
        </div>

        <motion.div className="right" initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} onMouseEnter={() => handleCursorSize("true-text")} onMouseLeave={() => handleCursorSize("false-text")}>
          <motion.img src={heroImg} alt="hero-img" onMouseEnter={() => handleCursorSize("true-text")} onMouseLeave={() => handleCursorSize("false-text")} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
