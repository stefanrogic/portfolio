import "./heroSection.scss";

const HeroSection = ({ onScroll }) => {
  return (
    <div className="heroSection">
      <div>
        <p>Hi, I’m Stefan Rogić and I enjoy building innovative and responsive web applications.</p>

        <button onClick={() => onScroll(".about-me")}>ABOUT ME</button>
      </div>
    </div>
  );
};

export default HeroSection;
