import "./footer.scss";

import { ReactComponent as MyLogo } from "../../assets/myLogo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHubLogo } from "../../assets/github.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="" className="logo">
          <MyLogo fill="white" />
        </a>

        <nav>
          <a href="">HOME</a>
          <a href="">PORTFOLIO</a>
          <a href="">CONTACT</a>
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
