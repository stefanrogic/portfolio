import "./contactSection.scss";

import { motion, useInView } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { useRef } from "react";

import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => {
  const refH1 = useRef(null);
  const isInViewH1 = useInView(refH1, { once: true });

  const refMain = useRef(null);
  const isInViewMain = useInView(refMain, { once: true });

  const variants = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="default-margin">
      <div className="contact-section">
        <motion.div className="contact-heading" ref={refH1} animate={isInViewH1 ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5, delay: 0.5 }}>
          <motion.h1 className="contact-header">CONTACT</motion.h1>
          <div className="line"></div>
        </motion.div>

        <motion.div className="main" ref={refMain} animate={isInViewMain ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5, delay: 0.5 }}>
          <form action="https://formsubmit.co/Stefanrogic95@gmail.com" method="POST" className="inputs">
            <span>Name</span>
            <input name="name" type="text" placeholder="Enter you name..." />
            <span>Email</span>
            <input name="email" type="email" placeholder="Enter your email..." />
            <span>Message</span>
            <textarea name="message" id="" rows="5" placeholder="Enter your message..."></textarea>

            {/* <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="#" /> */}

            <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              SEND
            </motion.button>
          </form>

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
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
