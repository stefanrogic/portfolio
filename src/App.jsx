import "./App.scss";

import { motion } from "framer-motion";
import { useState } from "react";

import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import Modal from "./components/modal/Modal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (element) => {
    const el = document.querySelector(element);
    el && el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollLock = (val) => {
    document.body.style.overflow = val;
  };

  return (
    <div className="App">
      <MobileMenu toggle={showMobileMenu} onScroll={handleScroll} onClick={setShowMobileMenu} />
      <Navbar onScroll={handleScroll} onClick={setShowMobileMenu} />
      <Modal showModal={showModal} toggle={setShowModal} project={selectedProject} scrollLock={handleScrollLock} />
      <HeroSection onScroll={handleScroll} />
      <motion.div initial={{ opacity: 0, display: "none" }} animate={{ opacity: 1, display: "block" }} transition={{ duration: 0.5, delay: 2.5 }}>
        <ProjectsSection onClick={setShowModal} setProject={setSelectedProject} scrollLock={handleScrollLock} />
        <ContactSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
