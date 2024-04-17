import { useContext, useState } from "react";
import "./componentStyle/section-module.scss";
import { Context } from "../App";

const FormSection = () => {
  const DateData = useContext(Context);

  const [data, setData] = useState({
    dateFirst: "",
    dateLast: "",
    persons: 1,
  });

  // const date = new Date();

  const errorHandler = () => {
    const BlockInput = document.querySelectorAll(".form__box--input");
    BlockInput.forEach((elem) => elem.classList.add("form__box--input--error"));

    setTimeout(() => {
      BlockInput.forEach((elem) =>
        elem.classList.remove("form__box--input--error")
      );
    }, 500);
  };

  return (
    <section className="section main-form">
      <div className="container main-form__container">
        <form className="form">
          <div className="form__box">
            <label htmlFor="first_date">Даты заезда</label>
            <input
              name="first_date"
              id="first_date"
              type="date"
              className="form__box--input"
              value={data.dateFirst}
              onChange={(event) => {
                const nowDate = new Date();
                let value = event.target.value;
                if (new Date(value) - nowDate < 0) {
                  value = `${nowDate.getFullYear()}-${
                    nowDate.getMonth() < 10
                      ? "0" + (nowDate.getMonth() + 1)
                      : nowDate.getMonth() + 1
                  }-${
                    nowDate.getDate() < 10
                      ? "0" + nowDate.getDate()
                      : nowDate.getDate()
                  }`;
                  event.target.value = value;
                }
                if (new Date(data.dateLast) - new Date(value) < 0) {
                  setData({
                    ...data,
                    dateFirst: event.target.value,
                    dateLast: event.target.value,
                  });
                } else {
                  setData({ ...data, dateFirst: event.target.value });
                }
              }}
            />
          </div>
          <div className="form__box">
            <label htmlFor="second_date">Даты выезда</label>
            <input
            name="second_date"
            id="second_date"
              type="date"
              className="form__box--input"
              value={data.dateLast}
              onChange={(event) => {
                const firstDate = data.dateFirst;
                let value = event.target.value;
                if (new Date(value) - new Date(firstDate) < 0) {
                  event.target.value = firstDate;
                }
                if (new Date(value) - new Date(data.dateFirst) < 0) {
                  setData({
                    ...data,
                    dateFirst: event.target.value,
                    dateLast: event.target.value,
                  });
                } else {
                  setData({ ...data, dateLast: event.target.value });
                }
              }}
            />
          </div>
          <div className="form__box">
            <label htmlFor="person_num">Гостей</label>
            <input
            name="person_num"
            id="person_num"
              type="number"
              className="form__box--btn"
              defaultValue={1}
              onChange={(event) => {
                const value = event.target.value > 1 ? event.target.value : 1;
                setData({ ...data, persons: value });
              }}
            />
          </div>
          <button
            className="form__btn"
            onClick={(event) => {
              event.preventDefault();
              DateData.dateFirst = data.dateFirst;
              DateData.dateLast = data.dateLast;
              DateData.persons = data.persons;

              if (data.dateFirst === "" || data.dateLast === "") {
                errorHandler();
                return;
              }

              document.querySelector(".link-room").click();
            }}
          >
            Проверить
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
