import "./footer.scss";

import { ReactComponent as Logo } from "../../assets/myLogo.svg";
import { motion } from "framer-motion";

import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";

const Footer = ({ onScroll }) => {
  return (
    <footer>
      <div className="default-margin" style={{ display: "flex", width: "100%", alignItems: "center" }}>
        <a className="nav-logo" href="#">
          <Logo fill="white" />
        </a>
        <ul>
          {["Projects", "Contact"].map((a, i) => (
            <li key={i} onClick={() => (a === "Projects" ? onScroll(".projects-section") : onScroll(".contact-section"))}>
              {a}
            </li>
          ))}
          <li>
            <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
              Resume
            </a>
          </li>
        </ul>

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
