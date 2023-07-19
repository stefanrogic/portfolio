import "./App.scss";

import { motion } from "framer-motion";
import { useState } from "react";

import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleScroll = (element) => {
    const el = document.querySelector(element);

    el && el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" style={{ overflowY: showMobileMenu && "hidden" }}>
      <MobileMenu toggle={showMobileMenu} onScroll={handleScroll} onClick={setShowMobileMenu} />
      <Navbar onScroll={handleScroll} onClick={setShowMobileMenu} />
      <HeroSection onScroll={handleScroll} />
      <motion.div initial={{ opacity: 0, display: "none" }} animate={{ opacity: 1, display: "block" }} transition={{ duration: 0.5, delay: 2.5 }}>
        <ProjectsSection />
        <ContactSection />
        <Footer onScroll={handleScroll} />
      </motion.div>
    </div>
  );
}

export default App;
