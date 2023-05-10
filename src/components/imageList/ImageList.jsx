import "./imageList.scss";

import CloseIcon from "@mui/icons-material/Close";

const ImageList = ({ onClose, images, currentImg, onList }) => {
  return (
    <>
      <div className="image-list">
        <div className="top">
          <button onClick={() => onClose(false)}>
            <CloseIcon />
          </button>
        </div>
        <img src={images.find((_, i) => i === currentImg).img} alt="" />
        <div className="bottom">
          <button onClick={() => onList((prev) => (prev > 0 ? prev - 1 : prev))}>PREVIOUS</button>
          <button onClick={() => onList((prev) => (prev < images.length - 1 ? prev + 1 : prev))}>NEXT</button>
        </div>
      </div>
    </>
  );
};

export default ImageList;
