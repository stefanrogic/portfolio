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

import cursorHover from "./assets/cursor-hover.png";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleScroll = (element) => {
    const el = document.querySelector(element);
    el && el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCursorFollow = (e) => {
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    setTimeout(() => {
      cursorFollower.style.left = `${e.pageX - 31.7}px`;
      cursorFollower.style.top = `${e.pageY - 31.7}px`;
    }, 70);
  };

  const handleCursorSize = (c) => {
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    if (typeof c === "boolean") {
      if (c) {
        cursor.classList.add("active");
        cursorFollower.classList.add(".active");
      } else {
        cursor.classList.remove("active");
        cursorFollower.classList.remove("active");
      }
    } else {
      if (c === "true-text") {
        cursor.classList.add("active-text");
        cursorFollower.classList.add("active-text");
      } else {
        cursor.classList.remove("active-text");
        cursorFollower.classList.remove("active-text");
      }
    }
  };

  return (
    <div className="App" onMouseMove={(e) => handleCursorFollow(e)}>
      <motion.div className="cursor"></motion.div>
      <motion.div className="cursor-follower"></motion.div>

      <MobileMenu toggle={showMobileMenu} onScroll={handleScroll} onClick={setShowMobileMenu} />
      <Navbar onScroll={handleScroll} onClick={setShowMobileMenu} />
      <Modal showModal={showModal} toggle={setShowModal} project={selectedProject} />
      <HeroSection onScroll={handleScroll} handleCursorSize={handleCursorSize} />
      <motion.div initial={{ opacity: 0, display: "none" }} animate={{ opacity: 1, display: "block" }} transition={{ duration: 0.5, delay: 2.5 }}>
        <ProjectsSection onClick={setShowModal} setProject={setSelectedProject} handleCursorSize={handleCursorSize} />
        <ContactSection />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
