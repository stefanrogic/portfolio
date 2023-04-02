import "./footer.scss";

import { ReactComponent as MyLogo } from "../../assets/myLogo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/" className="logo">
          <MyLogo fill="white" />
        </Link>

        <nav>
          <Link to="/">HOME</Link>
          <Link to="/projects">PORTFOLIO</Link>
          <a href="mailto:stefanrogic@protonmail.com">CONTACT</a>
        </nav>

        <div className="social">
          <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
            <LinkedInLogo fill="white" />
          </a>
          <a href="https://github.com/Rasgrin" target="_blank">
            <GitHubLogo fill="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
