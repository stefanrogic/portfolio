import "./App.scss";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/projectsSection/ProjectsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
