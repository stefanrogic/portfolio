import "./navbar.scss";

import { ReactComponent as Logo } from "../../assets/myLogo.svg";
import { motion } from "framer-motion";

const Navbar = ({ onScroll }) => {
  return (
    <nav>
      <motion.div className="default-margin" style={{ display: "flex", alignItems: "center" }} initial={{ opacity: 0, y: -800 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
        <a className="nav-logo" href="https://stefan-rogic.netlify.app/">
          <Logo fill="white" />
        </a>
        <ul>
          {["Projects", "Contact"].map((a, i) => (
            <li key={i} onClick={() => (a === "Projects" ? onScroll(".projects-section") : onScroll(".contact-section"))}>
              {a}
            </li>
          ))}
        </ul>
        <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            RESUME
          </motion.button>
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
