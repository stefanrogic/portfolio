import "./navbar.scss";

import { ReactComponent as MyLogo } from "../../assets/myLogo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ showMenu, onShowMenu }) => {
  return (
    <>
      {showMenu && (
        <div className="menu">
          <button onClick={() => onShowMenu((prev) => (prev = false))}>X</button>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="">CONTACT</Link>
          </nav>
        </div>
      )}

      <header>
        <Link to="/" className="logo">
          <MyLogo fill="black" />
        </Link>

        <nav>
          <Link to="/">HOME</Link>
          <Link to="/portfolio">PORTFOLIO</Link>
        </nav>
        <a href="mailto:stefanrogic@protonmail.com">
          <button>CONTACT</button>
        </a>

        <button className="hamburger-menu" onClick={() => onShowMenu((prev) => (prev = true))}>
          MENU
        </button>
      </header>
    </>
  );
};

export default Navbar;
