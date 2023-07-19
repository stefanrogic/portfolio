import "./footer.scss";

import { motion } from "framer-motion";

import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";

const Footer = () => {
  return (
    <footer>
      <div className="default-margin" style={{ display: "flex", width: "100%", alignItems: "center", gap: "30px" }}>
        <motion.p viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          Built using{" "}
          <a href="https://react.dev/" target="_blank">
            React
          </a>
          ,{" "}
          <a href="https://sass-lang.com/" target="_blank">
            Sass
          </a>{" "}
          and{" "}
          <a href="https://www.framer.com/motion/" target="_blank">
            Framer Motion
          </a>
          .
        </motion.p>

        <motion.div className="socials" viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <LinkedIn fill="white" />
          </a>

          <a href="https://github.com/Rasgrin" target="_blank">
            <GitHub fill="white" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
