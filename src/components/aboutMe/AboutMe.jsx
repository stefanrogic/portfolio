import "./aboutMe.scss";

import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="line"></div>
      <div className="left"></div>
      <div className="line"></div>
      <div className="right">
        <h1>ABOUT ME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore culpa pariatur dicta mollitia, quos minus obcaecati aliquam hic excepturi, debitis odio. Eius amet, asperiores fugiat repudiandae dignissimos exercitationem impedit harum
          officia illum recusandae blanditiis! Molestiae quod nihil soluta perferendis quibusdam itaque blanditiis ad vitae, cumque, id aspernatur libero alias modi quia provident quis repellat cum iure dolorum esse sequi iusto?
        </p>
        <Link to="/portfolio">
          <button>PORTFOLIO</button>
        </Link>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default AboutMe;
