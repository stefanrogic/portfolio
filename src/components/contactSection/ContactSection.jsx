import "./contactSection.scss";

import { motion } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";

import EmailIcon from "@mui/icons-material/Email";

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
            <textarea name="message" id="" rows="5" placeholder="Enter your message..."></textarea>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              SEND
            </motion.button>
          </div>

          <div className="links">
            <div className="link">
              <span>
                <EmailIcon style={{ color: "white", height: "50px", width: "50px" }} /> Email
              </span>
              <a href="mailto:stefanrogic@protonmail.com" target="_blank">
                stefanrogic@protonmail.com
              </a>
            </div>

            <div className="link">
              <span>
                <LinkedIn fill="white" /> LinkedIn
              </span>
              <a href="https://www.linkedin.com/in/stefanrogic/" target="_blank">
                linkedin.com/in/stefanrogic/
              </a>
            </div>

            <div className="link">
              <span>
                <GitHub fill="white" /> GitHub
              </span>
              <a href="https://github.com/Rasgrin" target="_blank">
                linkedin.com/in/stefanrogic/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
