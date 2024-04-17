import { useEffect, useState } from "react";
import "./componentStyle/slider-module.scss";

const VideoSlider = ({ videos }) => {
  const [ArrVideos, setArrVideos] = useState([...videos]);
  const [imgCol, setImgCol] = useState(3);
  const finalVedeo = [...ArrVideos.slice(0, imgCol)];

  useEffect(() => {
    const reSize = () => {
      const size = window.innerWidth;
      if (size > 1210) {
        setImgCol(3);
      } else if (size > 970) {
        setImgCol(2);
      } else if (size <= 970) {
        setImgCol(1);
      } 
      // else if (size <= 630) {
      //   setImgCol(1);
      // }
    };

    window.addEventListener("resize", reSize);
    return () => {
      window.removeEventListener("resize", reSize);
    };
  }, []);

  const handlerBtn = (event) => {
    const sliderBox = event.target.parentNode.querySelector(".slider__videos");
    if (event.target.className.includes("slider__arrow--right")) {
      sliderBox.style.display = "none";
      setArrVideos(ArrVideos.concat(ArrVideos.shift()));
      setTimeout(() => (sliderBox.style.display = "flex"), 0);
    }
    if (event.target.className.includes("slider__arrow--left")) {
      sliderBox.style.display = "none";
      setArrVideos([].concat(ArrVideos.pop(), ...ArrVideos));
      setTimeout(() => (sliderBox.style.display = "flex"), 0);
    }
  };

  return (
    <div className="slider">
      <div className="slider__content slider__video-conntent">
        <button
          className="slider__arrow slider__arrow--left"
          onClick={handlerBtn}
        ></button>
        <div className="slider__videos">
          {finalVedeo.map((video, i) => (
            <a
              href="https://www.youtube.com/"
              key={video}
              target="_blank"
              rel="noreferrer"
              className="slider__video--link"
            >
              <img className="slider__video-img" src={video} alt={i} />
              <button className="slider__video--btn">▶</button>
            </a>
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

export default VideoSlider;
