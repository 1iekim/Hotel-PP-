import { useEffect, useState } from "react";
import "./componentStyle/slider-module.scss";

const PhotoSlider = ({ title, imgs }) => {
  const [ArrImgs, setArrImgs] = useState([...imgs]);
  const [imgCol, setImgCol] = useState(4);
  const finalImgs = [...ArrImgs.slice(0, imgCol)];

  useEffect(() => {
    const reSize = () => {
      const size = window.innerWidth;
      if (size > 1210) {
        setImgCol(4);
      } else if (size > 970) {
        setImgCol(3);
      } else if (size > 670) {
        setImgCol(2);
      } else if (size <= 670) {
        setImgCol(1);
      }
    };

    reSize();

    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, []);

  const handlerBtn = (event) => {
    const photos = event.target.parentNode.querySelector(".slider__photos");
    if (event.target.className.includes("slider__arrow--right")) {
      photos.style.display = "none";
      setArrImgs(ArrImgs.concat(ArrImgs.shift()));
      setTimeout(() => (photos.style.display = "flex"), 0);
    }
    if (event.target.className.includes("slider__arrow--left")) {
      photos.style.display = "none";
      setArrImgs([].concat(ArrImgs.pop(), ...ArrImgs));
      setTimeout(() => (photos.style.display = "flex"), 0);
    }
  };

  return (
    <div className="slider">
      {!title.length || <h3 className="slider__title">{title}</h3>}
      <div className="slider__content">
        <button
          className="slider__arrow slider__arrow--left"
          onClick={handlerBtn}
        ></button>
        <div className="slider__photos">
          {finalImgs.map((img, i) => (
            <img
              key={i}
              className="slider__photo"
              src={img}
              alt={title + " " + i}
            />
          ))}
        </div>
        <button
          className="slider__arrow slider__arrow--right"
          onClick={handlerBtn}
        ></button>
      </div>
    </div>
  );
};

export default PhotoSlider;
