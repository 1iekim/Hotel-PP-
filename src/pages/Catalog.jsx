import Progress from "../components/Progress";
import "../components/componentStyle/catalog-module.scss";

import { rooms } from "../utils/rooms";
import DateBar from "../components/DateBar";
import RoomList from "../components/RoomList";
import RoomRules from "../components/RoomRules";
import OrderRoom from "../components/OrderRoom";
import { useContext, useState } from "react";
import OrderForm from "../components/OrderForm";
import { Context } from "../App";

const Catalog = () => {
  const DateData = useContext(Context);

  const [selectRoom, setSelectRoom] = useState(0);
  const [progressState, setProgressState] = useState("catalog");

  const [personality, setPersonality] = useState({
    name: "",
    surname: "",
    secondName: "",
    email: "",
    phone: "",
    city: "",
    payDelay: true,
    foodfor: 0,
    wishes: "",
  });

  // const dateFirst = new Date(2024, 4, 1);
  // const dateLast = new Date(2024, 4, 6);
  // const persons = { numAdult: 2 };
  let dateGap =
    (new Date(DateData.dateLast) - new Date(DateData.dateFirst)) /
    1000 /
    60 /
    60 /
    24;

  if (dateGap <= 0) dateGap = 1;

  const getDate = (data) => {
    const date = data;
    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${
      date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    }-${date.getFullYear()}`;
  };

  if (DateData.dateFirst === "") {
    DateData.dateFirst = getDate(new Date());
  }
  if (DateData.dateLast === "") {
    DateData.dateLast = getDate(new Date());
  }

  return (
    <main className="main container catalog">
      {/*Progress */}
      <Progress progress={progressState} />
      {/*Cataloge */}
      {progressState === "proof" || <DateBar dateGap={dateGap} />}
      {progressState !== "catalog" || (
        <RoomList
          rooms={rooms}
          setSelectRoom={setSelectRoom}
          setProgressState={setProgressState}
          setPersonality={setPersonality}
          personality={personality}
        />
      )}
      {progressState !== "catalog" || <RoomRules />}
      {/*Form */}
      <section className="order">
        {progressState !== "order" || (
          <OrderRoom selectRoom={rooms[selectRoom]} />
        )}

        {progressState !== "order" || (
          <OrderForm
            selectRoom={rooms[selectRoom]}
            dateGap={dateGap}
            personality={personality}
            setPerson={setPersonality}
            setProgressState={setProgressState}
          />
        )}
      </section>
      {/*Ending */}
      {progressState !== "proof" || (
        <section className="proof">
          <h3 className="proof--title">Сведения об оплате</h3>
          <ul className="proof__list">
            <li>
              Полное имя:
              <span>{`${personality.surname} ${personality.name} ${personality.secondName}`}</span>
            </li>
            <li>
              Email: <span>{personality.email}</span>
            </li>
            <li>
              Телефон: <span>{personality.phone}</span>
            </li>
            <li>
              Заезд: <span>{getDate(new Date(DateData.dateFirst))}</span>
            </li>
            <li>
              Выезд: <span>{getDate(new Date(DateData.dateLast))}</span>
            </li>
            <li>
              Оплата:
              <span>
                {Boolean(personality.payDelay)
                  ? "Оплатить позже"
                  : "Оплатить переводом"}
              </span>
            </li>
          </ul>
          <div className="proof__content">
            <h4 className="proof__content--title">{rooms[selectRoom].title}</h4>
            <table className="proof__content--table">
              <thead>
                <tr>
                  <th>
                    За {dateGap} суток{" "}
                    {personality.foodfor
                      ? `с питанием на ${personality.foodfor}`
                      : ""}
                  </th>
                  <th>
                    {(rooms[selectRoom].price + personality.foodfor * 50) *
                      dateGap}
                    ,00 руб
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Итого цена за номер</td>
                  <td>
                    {Math.floor(rooms[selectRoom].price * dateGap)},00 руб
                  </td>
                </tr>
                <tr>
                  <td>Итого цена за питание</td>
                  <td>
                    {Math.floor(personality.foodfor * 50 * dateGap)},00 руб
                  </td>
                </tr>
                <tr>
                  <td>Общая сумма</td>
                  <td>
                    {Math.floor(
                      (rooms[selectRoom].price + personality.foodfor * 50) *
                        dateGap
                    )}
                    ,00 руб
                  </td>
                </tr>
                <tr>
                  <td>Размер предоплаты</td>
                  <td>
                    {Math.floor(
                      (rooms[selectRoom].price + personality.foodfor * 50) *
                        dateGap *
                        0.3
                    )}
                    ,00 руб
                  </td>
                </tr>
                <tr>
                  <td>Сумма к оплате</td>
                  <td>
                    {Math.floor(
                      (rooms[selectRoom].price + personality.foodfor * 50) *
                        dateGap
                    ) -
                      Math.floor(
                        (rooms[selectRoom].price + personality.foodfor * 50) *
                          dateGap *
                          0.3
                      )}
                    ,00 руб
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="proof--btn"
            onClick={() => {
              setProgressState("catalog");
              setPersonality({
                name: "",
                surname: "",
                secondName: "",
                email: "",
                phone: "",
                city: "",
                payDelay: true,
                foodfor: 0,
                wishes: "",
              });
              document.querySelector(".link-main").click();
            }}
          >
            Завершить
          </button>
        </section>
      )}
    </main>
  );
};

export default Catalog;
