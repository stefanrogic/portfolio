import "./footer.scss";

import { ReactComponent as Logo } from "../../assets/myLogo.svg";
// import { motion } from "framer-motion";

import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";

const Footer = ({ onScroll }) => {
  return (
    <footer>
      <div className="default-margin" style={{ display: "flex", width: "100%", alignItems: "center", gap: "30px" }}>
        <p>
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
        </p>

        <div className="socials">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <LinkedIn fill="white" />
          </a>

          <a href="https://github.com/Rasgrin" target="_blank">
            <GitHub fill="white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
