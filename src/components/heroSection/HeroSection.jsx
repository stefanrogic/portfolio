import "./heroSection.scss";

// import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
// import { ReactComponent as GitHub } from "../../assets/github.svg";

import { motion } from "framer-motion";

import heroImg from "../../assets/heroImg.png";

const HeroSection = ({ onScroll }) => {
  return (
    <div className="default-margin">
      <div className="heroSection">
        <motion.div className="left" initial={{ x: -800 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
          <div className="greet">
            <motion.h1 className="greet-hello">Hello, my name is Stefan</motion.h1>
            <motion.p className="greet-role">Frontend Developer</motion.p>
          </div>
          <div className="links">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ x: -800 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 1 }} onClick={() => onScroll(".projects-section")}>
              PROJECTS
            </motion.button>
            {/* <motion.a href="https://github.com/Rasgrin" target="_blank" whileTap={{ scale: 0.9 }}>
              <GitHub fill="white" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/stefanrogic/" target="_blank" whileTap={{ scale: 0.9 }}>
              <LinkedIn fill="white" />
            </motion.a> */}
          </div>
        </motion.div>

        <motion.div className="right" initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <motion.img src={heroImg} alt="hero-img" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
