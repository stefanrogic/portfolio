import "./contactSection.scss";

import { motion, useInView } from "framer-motion";
import { ReactComponent as LinkedIn } from "../../assets/linkedIn.svg";
import { ReactComponent as GitHub } from "../../assets/github.svg";
import { useRef } from "react";

import EmailIcon from "@mui/icons-material/Email";

const ContactSection = () => {
  return (
    <div className="default-margin">
      <div className="contact-section">
        <motion.div className="contact-heading" viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <motion.h1 className="contact-header">CONTACT</motion.h1>
          <div className="line"></div>
        </motion.div>

        <div className="main">
          <form action="https://formsubmit.co/Stefanrogic95@gmail.com" method="POST" className="inputs">
            <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              Name
            </motion.span>
            <motion.input name="name" type="text" placeholder="Enter your name..." viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              Email
            </motion.span>
            <motion.input name="email" type="email" placeholder="Enter your email..." viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} />
            <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              Message
            </motion.span>
            <motion.textarea
              name="message"
              id=""
              rows="5"
              placeholder="Enter your message..."
              viewport={{ once: true }}
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            ></motion.textarea>

            {/* <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="#" /> */}

            <motion.div viewport={{ once: true }} initial={{ opacity: 0, x: "-100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
                SEND
              </motion.button>
            </motion.div>
          </form>

          <div className="links">
            <div className="link link-mail">
              <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <EmailIcon style={{ color: "white", height: "50px", width: "50px" }} /> Email
              </motion.span>
              <motion.a href="mailto:stefanrogic@protonmail.com" target="_blank" viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                stefanrogic@protonmail.com
              </motion.a>
            </div>

            <div className="link">
              <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <LinkedIn fill="white" /> LinkedIn
              </motion.span>
              <motion.a href="https://www.linkedin.com/in/stefanrogic" target="_blank" viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                linkedin.com/in/stefanrogic
              </motion.a>
            </div>

            <div className="link">
              <motion.span viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <GitHub fill="white" /> GitHub
              </motion.span>
              <motion.a href="https://github.com/Rasgrin" target="_blank" viewport={{ once: true }} initial={{ opacity: 0, x: "100%" }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                linkedin.com/in/stefanrogic
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
