import "./contactSection.scss";

import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="default-margin">
      <div className="contact-section">
        <div className="contact-heading">
          <motion.h1 className="contact-header">CONTACT</motion.h1>
          <div className="line"></div>
        </div>

        <div className="main">
          <div className="inputs">
            <span>Name</span>
            <input type="text" placeholder="Enter you name..." />
            <span>Email</span>
            <input type="text" placeholder="Enter your email..." />
            <span>Message</span>
            <textarea name="message" id="" cols="10" rows="8" placeholder="Enter your message..."></textarea>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              SEND
            </motion.button>
          </div>

          <div className="links">
            <div className="link">
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/stefanrogic/">linkedin.com/in/stefanrogic/</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
