import imgCalendar from "../assets/calendar__logo.png";
import imgPerson from "../assets/person__logo.png";
import imgComeIn from "../assets/come-in__logo.png";
import imgComeOut from "../assets/come-out__logo.png";
import { useContext } from "react";
import { Context } from "../App";

const DateBar = ({ dateGap }) => {
  const DateData = useContext(Context);

  const reCreateDate = (data) => {
    const date = data.split("-")[2];
    const month = data.split("-")[1];
    // const year = data.split("-")[0];

    return `${date} ${monthToStr(+month)}`;
  };

  const monthToStr = (num) => {
    const months = {
      1: "января",
      2: "февраля",
      3: "марта",
      4: "апреля",
      5: "мая",
      6: "июня",
      7: "июля",
      8: "августа",
      9: "сентября",
      10: "октября",
      11: "ноября",
      12: "декабря",
    };
    return months[num];
  };

  return (
    <section className="section data">
      <div className="data__content">
        <ul className="data__list">
          <li>
            <img src={imgCalendar} alt="Calendar" />
            {dateGap} {dateGap === 1 ? "сутки" : "суток"}
          </li>
          <li>
            <img src={imgPerson} alt="Person" />
            {DateData.persons}{" "}
            {DateData.persons === 1
              ? "человек"
              : DateData.persons < 5
              ? "человека"
              : "человек"}
          </li>
          <li>
            <img src={imgComeIn} alt="Come in" />
            {reCreateDate(DateData.dateFirst)}
            {/* {DateData.dateFirst.getDate()} {monthToStr(DateData.dateFirst.getMonth())} */}
          </li>
          <li>
            <img src={imgComeOut} alt="Come out" />
            {reCreateDate(DateData.dateLast)}
            {/* {DateData.dateLast.getDate()} {monthToStr(DateData.dateLast.getMonth())} */}
          </li>
        </ul>
        <button
          className="data__content--btn"
          onClick={() => {
            document.querySelector(".link-main").click();
          }}
        >
          Изменить даты и гостей
        </button>
      </div>
    </section>
  );
};

export default DateBar;
