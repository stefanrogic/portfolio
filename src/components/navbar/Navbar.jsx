import "./navbar.scss";

import { ReactComponent as MyLogo } from "../../assets/myLogo.svg";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = ({ showMenu, onShowMenu }) => {
  return (
    <>
      {showMenu && (
        <div className="menu">
          <div className="button-container">
            <button onClick={() => onShowMenu((prev) => (prev = false))}>
              <CloseIcon />
            </button>
          </div>

          <nav>
            <Link to="/" onClick={() => onShowMenu((prev) => (prev = false))}>
              HOME
            </Link>
            <Link to="/projects" onClick={() => onShowMenu((prev) => (prev = false))}>
              PORTFOLIO
            </Link>
            <a href="mailto:stefanrogic@protonmail.com" onClick={() => onShowMenu((prev) => (prev = false))}>
              CONTACT
            </a>
            <a href="https://drive.google.com/file/d/1yFHb-VrMudSMHxJFvhAccIdZL-AgXwBB/view?usp=sharing" target="_blank" onClick={() => onShowMenu((prev) => (prev = false))}>
              CV
            </a>
          </nav>
        </div>
      )}

      <header>
        <Link to="/" className="logo">
          <MyLogo fill="black" />
        </Link>

        <nav>
          <Link to="/">HOME</Link>
          <Link to="/projects">PORTFOLIO</Link>
        </nav>
        <a href="https://drive.google.com/file/d/1yFHb-VrMudSMHxJFvhAccIdZL-AgXwBB/view?usp=sharing" target="_blank">
          <button className="contact-btn">CV</button>
        </a>

        <button className="hamburger-menu" onClick={() => onShowMenu((prev) => (prev = true))}>
          <MenuIcon />
        </button>
      </header>
    </>
  );
};

export default Navbar;
