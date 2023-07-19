import "./mobileMenu.scss";

import { motion } from "framer-motion";

import CloseIcon from "@mui/icons-material/Close";
import { duration } from "@mui/material";

const MobileMenu = ({ toggle, onScroll, onClick }) => {
  const variants = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 0, x: "100%" },
  };

  return (
    <motion.div className="mobile-menu" variants={variants} initial={{ opacity: 0, x: "100%" }} animate={toggle ? "hidden" : "visible"} transition={{ duration: 0.5 }}>
      <button className="close-btn" onClick={() => onClick(false)}>
        <CloseIcon style={{ height: "40px", width: "40px" }} />
      </button>
      <ul className="menu-ul">
        {["PROJECTS", "CONTACT"].map((a, i) => (
          <li
            key={i}
            onClick={() => {
              a === "PROJECTS" ? onScroll(".projects-section") : onScroll(".contact-section");
              onClick(false);
            }}
          >
            {a}
          </li>
        ))}
        <li>
          <a href="https://drive.google.com/file/d/1DkL5xPQDqxMa88yyFKdXZk2BGqMzDrR_/view?usp=drive_link" target="_blank">
            RESUME
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
