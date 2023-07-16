import "./heroSection.scss";

// import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
// import { ReactComponent as GitHub } from "../../assets/github.svg";

import { motion } from "framer-motion";

import heroImg from "../../assets/heroImg.png";

const HeroSection = () => {
  return (
    <div className="default-margin">
      <div className="heroSection">
        <div className="left">
          <div className="greet">
            <motion.h1 className="greet-hello">Hello, my name is Stefan</motion.h1>
            <motion.p className="greet-role">Frontend Developer</motion.p>
          </div>
          <div className="links">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              PROJECTS
            </motion.button>
            {/* <motion.a href="https://github.com/Rasgrin" target="_blank" whileTap={{ scale: 0.9 }}>
              <GitHub fill="white" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/stefanrogic/" target="_blank" whileTap={{ scale: 0.9 }}>
              <LinkedIn fill="white" />
            </motion.a> */}
          </div>
        </div>

        <div className="right">
          <motion.img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
