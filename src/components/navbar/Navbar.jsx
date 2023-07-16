import "./navbar.scss";

import { ReactComponent as Logo } from "../../assets/myLogo.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav>
      <div className="default-margin" style={{ display: "flex", alignItems: "center" }}>
        <a className="nav-logo" href="#">
          <Logo fill="white" />
        </a>
        <ul>
          {["Projects", "Contact"].map((a, i) => (
            <li key={i}>
              <a href="#">{a}</a>
            </li>
          ))}
        </ul>
        <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            RESUME
          </motion.button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
