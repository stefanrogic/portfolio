import "./aboutMe.scss";

import { Link } from "react-router-dom";
import pfp from "../../assets/pfp.png";
import pfpAlt from "../../assets/pfpAlt.png";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="line"></div>
      <div className="left">
        <img src={pfp} alt="pfp" />
      </div>
      <div className="line"></div>
      <div className="right">
        <h1>ABOUT ME</h1>
        <p>
          My name is Stefan Rogic, an aspiring frontend developer with a passion for creating beautiful, user-friendly websites. <br />
          <br />
          My journey as a frontend developer began during my studies, where I discovered my love for designing and building websites. Since then, I've been honing my skills and expanding my knowledge in areas such as HTML, CSS, JavaScript, and
          responsive design. I'm always on the lookout for new challenges and opportunities to learn.
        </p>
        <Link to="/projects">
          <button>PORTFOLIO</button>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default AboutMe;
