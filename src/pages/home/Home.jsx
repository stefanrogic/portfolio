import "./home.scss";

import HeroSection from "../../components/heroSection/HeroSection";
import AboutMe from "../../components/aboutMe/AboutMe";
import ContactMe from "../../components/contactMe/ContactMe";

const Home = () => {
  const handleScroll = (element) => {
    const el = document.querySelector(element);

    el && el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <HeroSection onScroll={handleScroll} />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
