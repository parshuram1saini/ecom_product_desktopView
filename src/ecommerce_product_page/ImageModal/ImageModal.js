import React from "react";
import shoes1 from "../../image/shoes1.jpg";
import shoes2 from "../../image/shoes2.jpg";
import shoes3 from "../../image/shoes3.jpg";
import shoes4 from "../../image/shoes4.jpg";
import CloseIcon from "../../image/icon-close.svg";
import NextIcon from "../../image/icon-next.svg";
import PrevIcon from "../../image/icon-prev.svg";
import "./imageModal.css";

function ImageModal({  getBigImage }) {
  const [current, setCurrent] = React.useState(0);
  const imagesmodal = [
    { id: 0, value: shoes1 },
    { id: 1, value: shoes2 },
    { id: 2, value: shoes3 },
    { id: 3, value: shoes4 },
  ];
  const length = imagesmodal.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);

  if(!Array.isArray(imagesmodal)&& imagesmodal.length<=0)
  {
    return null
  }
  return (
    <>
    <div className="modal-backdrop">
      <div className="image-modal">
        <img
          src={CloseIcon}
          alt="close-icon"
          className="close-icon"
          onClick={() => getBigImage(false)}
          />
      </div>
      <div className="large-img-container">
        <img
          src={PrevIcon}
          alt="prev-icon"
          className="prev-icon"
          onClick={() => prevSlide()}
        />
        {imagesmodal.map((image, index) => {
          return (
            <div
              key={index}
              className={current === index ? "slide active" : "slide"}>
              {index === current && (
                <img
                  src={image.value}
                  alt={image + index}
                  className="large-image"
                />
              )}
            </div>
          );
        })}
        <img
          src={NextIcon}
          alt="next-icon"
          className="next-icon"
          onClick={() => nextSlide()}
        />
      </div>
      </div>
    </>
  );
}

export default ImageModal;
