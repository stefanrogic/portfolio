import "./modal.scss";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const Modal = ({ showModal, toggle, project, scrollLock }) => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [maxImages, setMaxImages] = useState(project?.static.length - 1);
  const [selectedImg, setSelectedImg] = useState(0);
  const [zoomImg, setZoomImg] = useState(false);
  const [listDirection, setListDirection] = useState("forward");

  useEffect(() => {
    setSelectedImg(0);
    setMaxImages(project?.static.length - 1);
  }, [project]);

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            key="modal-bg"
            className="modal-bg"
            onClick={() => {
              scrollLock("auto");
              toggle(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: "0" }}
          ></motion.div>

          <motion.div key="modal" className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: "0" }}>
            <div className="top">
              <button
                onClick={() => {
                  scrollLock("auto");
                  toggle(false);
                }}
              >
                <CloseIcon fontSize="large" />
              </button>
            </div>
            <div className="content" style={{ gap: zoomImg && "0" }}>
              <motion.div className="left" initial={{ width: "50%" }} animate={{ width: zoomImg ? "100%" : "50%" }} transition={{ duration: 0.5 }}>
                <AnimatePresence initial={false}>
                  <motion.img
                    key={selectedImg}
                    src={project.static[selectedImg]?.img}
                    alt={project.static[selectedImg]?.name}
                    initial={{ x: listDirection === "forward" && selectedImg !== 0 ? "100%" : "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1, zIndex: 1 }}
                    exit={{ x: listDirection === "backward" && selectedImg !== 0 ? "100%" : "-100%", opacity: 0, zIndex: 0 }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);

                      if (swipe < -swipeConfidenceThreshold) {
                        setListDirection("forward");
                        setSelectedImg((prev) => {
                          return prev < maxImages ? prev + 1 : 0;
                        });
                      } else if (swipe > swipeConfidenceThreshold) {
                        setListDirection("backward");
                        setSelectedImg((prev) => {
                          return prev > 0 ? prev - 1 : maxImages;
                        });
                      }
                    }}
                    onClick={() => setZoomImg(true)}
                  />
                </AnimatePresence>

                {
                  <motion.button className="reset-zoom" onClick={() => setZoomImg(false)} initial={{ display: "none", opacity: 0 }} animate={{ display: zoomImg ? "flex" : "none", opacity: zoomImg ? 1 : 0 }} transition={{ delay: zoomImg && 0.5 }}>
                    <CloseFullscreenIcon />
                  </motion.button>
                }
                <motion.div className="list" initial={{ left: "26%" }} animate={{ left: zoomImg ? "50%" : "26%" }}>
                  <button
                    onClick={() => {
                      setListDirection("backward");
                      setSelectedImg((prev) => {
                        return prev > 0 ? prev - 1 : maxImages;
                      });
                    }}
                  >
                    <ArrowBackIosNewIcon />
                  </button>
                  <div className="keys">
                    {project.static.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`button `}
                        onClick={() => {
                          setListDirection(i > selectedImg ? "forward" : "backward");
                          setSelectedImg(i);
                        }}
                        initial={{ width: "12px" }}
                        animate={{ width: selectedImg === i ? "70px" : "12px" }}
                        exit={{ width: "12px" }}
                      ></motion.div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setListDirection("forward");
                      setSelectedImg((prev) => {
                        return prev < maxImages ? prev + 1 : 0;
                      });
                    }}
                  >
                    <ArrowForwardIosIcon />
                  </button>
                </motion.div>
              </motion.div>

              <motion.div className="right" initial={{ width: "50%", opacity: 1 }} animate={{ width: zoomImg ? "0%" : "50%", opacity: zoomImg ? 0 : 1 }} transition={{ duration: 0.5 }}>
                <div className="project-info">
                  <div className="project-technologies">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <motion.h1 className="project-name">{project.name}</motion.h1>
                  <motion.p className="project-alt">{project.alt}</motion.p>

                  {project.background.length <= 1 && (
                    <p className="project-desc" style={{ marginRight: "30px" }}>
                      {project.shortDesc}
                    </p>
                  )}

                  {project.background.map((bg, i) => (
                    <p className="project-desc" key={i}>
                      {bg}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
