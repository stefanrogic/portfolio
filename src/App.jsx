import "./App.scss";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/projectsSection/ProjectsSection";

function App() {
  const handleScroll = (element) => {
    const el = document.querySelector(element);

    el && el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection onScroll={handleScroll} />
      <ProjectsSection />
    </div>
  );
}

export default App;
