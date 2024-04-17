import { useEffect } from "react";

const ProgressStates = ["catalog", "order", "proof"];

const Progress = ({ progress }) => {
  useEffect(() => {
    const index = ProgressStates.indexOf(progress);
    const progressBox = document.querySelector(".progress");
    const barBox = progressBox.querySelectorAll(".progress__bar");
    const roundBox = progressBox.querySelectorAll(".progress__round");
    const textBox = progressBox
      .querySelector(".progress__text")
      .querySelectorAll("span");
    
    roundBox.forEach((e, i) => {
      e.classList.remove("progress__round--active");
      if (i <= index) e.classList.add("progress__round--active");
    });
    textBox.forEach((e, i) => {
      e.classList.remove("progress__text--active");
      if (i <= index) e.classList.add("progress__text--active");
    });
    barBox.forEach((e, i) => {
      e.classList.remove("progress__bar--active");
      if (i <= index || index === 2) e.classList.add("progress__bar--active");
    });
  }, [progress]);

  return (
    <section className="section cataloge__section progress">
      <div className="progress__box">
        <div className="progress__bar progress__point progress__bar--active"></div>
        <div className="progress__round progress__point progress__round--active"></div>
        <div className="progress__bar progress__point"></div>
        <div className="progress__round progress__point"></div>
        <div className="progress__bar progress__point"></div>
        <div className="progress__round progress__point"></div>
        <div className="progress__bar progress__point"></div>
      </div>
      <div className="progress__text">
        <span className="progress__text--active progress__point">
          Номер и цена
        </span>
        <span className="progress__point">Бронь</span>
        <span className="progress__point">Подтверждение</span>
      </div>
    </section>
  );
};

export default Progress;
