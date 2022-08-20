import React, { useState } from "react";
import shoes1_s1 from "../../image/shoes_s1.jpg";
import shoes2_s2 from "../../image/shoes_s2.jpg";
import shoes3_s3 from "../../image/shoes_s3.jpg";
import shoes4_s4 from "../../image/shoes_s4.jpg";
import "./productimage.css";

function ProductImage({ getBigImage }) {
  const images = [
    { id: 0, value: shoes1_s1 },
    { id: 1, value: shoes2_s2 },
    { id: 2, value: shoes3_s3 },
    { id: 3, value: shoes4_s4 },
  ];
  const [sliderdata, setSliderData] = useState(images[0]);
  console.log(sliderdata.id);
  const handleSliderImage = (index) => {
    console.log(index);
    const slider = images[index];
    setSliderData(slider);
  };

  return (
    <div>
      <div className="image-container">
        <i
          className="expand icon imageExpandIcon"
          onClick={() => getBigImage(true)}
        ></i>
        <img src={sliderdata.value} className="shoes_active" alt="shoes" />
      </div>
      <div className="small_allshoes">
        {images.map((image, index) => {
          return (
            <div className="thumbnail" key={index}>
              <img
                src={image.value}
                style={{
                  height: "50px",
                  width: "70px",
                  borderRadius: "5%",
                }}
                className={sliderdata.id === index ? "clicked" : ""}
                onClick={() => handleSliderImage(index)}
                alt={"shoes" + index}
              />
            </div>
          );
        })}
        {/* <img src={shoes1_s1} className="small-shoes" alt="shoes" />
        <img src={shoes2_s2} className="small-shoes" alt="shoes" />
        <img src={shoes3_s3} className="small-shoes" alt="shoes" />
        <img src={shoes4_s4} className="small-shoes" alt="shoes" /> */}
      </div>
    </div>
  );
}
export default ProductImage;
