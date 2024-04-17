const OrderForm = ({
  selectRoom,
  dateGap,
  personality,
  setPerson,
  setProgressState,
}) => {
  return (
    <form action="" className="order__form">
      <h4 className="order__form--prev">
        Всего за {dateGap} суток -{" "}
        {(selectRoom.price + personality.foodfor * 50) * dateGap},00 руб.
      </h4>
      <div className="order__form--content">
        <h3>Информация о госте</h3>
        <div className="order__form--inputs">
          <div className="order__form--inputBox1">
            <label htmlFor="surname">
              <input
                name="surname"
                id="surname"
                type="text"
                placeholder="Фамилия"
                value={personality.surname}
                onChange={(event) => {
                  const value =
                    event.target.value.length > 1
                      ? event.target.value.slice(0, 1).toUpperCase() +
                        event.target.value.slice(1)
                      : event.target.value;
                  setPerson({ ...personality, surname: value });
                }}
              />
            </label>
            <label htmlFor="name1">
              <input
                name="name1"
                id="name1"
                type="text"
                placeholder="Имя"
                value={personality.name}
                onChange={(event) => {
                  const value =
                    event.target.value.length > 1
                      ? event.target.value.slice(0, 1).toUpperCase() +
                        event.target.value.slice(1)
                      : event.target.value;
                  setPerson({ ...personality, name: value });
                }}
              />
            </label>
            <label htmlFor="fatherName">
              <input
                name="fatherName"
                id="fatherName"
                type="text"
                placeholder="Отчество"
                value={personality.secondName}
                onChange={(event) => {
                  const value =
                    event.target.value.length > 1
                      ? event.target.value.slice(0, 1).toUpperCase() +
                        event.target.value.slice(1)
                      : event.target.value;
                  setPerson({ ...personality, secondName: value });
                }}
              />
            </label>
            <label htmlFor="mail">
              <input
                name="mail"
                id="mail"
                type="email"
                placeholder="E-mail"
                value={personality.email}
                onChange={(event) =>
                  setPerson({ ...personality, email: event.target.value })
                }
              />
            </label>
            <label htmlFor="phoneNumber">
              <input
                name="phoneNumber"
                id="phoneNumber"
                type="tel"
                placeholder="Телефон"
                value={personality.phone}
                onChange={(event) => {
                  const value = "+" + event.target.value.replace(/[^\d]/g, "");
                  setPerson({ ...personality, phone: value });
                }}
              />
            </label>
            <label htmlFor="city">
              <input
                name="city"
                id="city"
                type="text"
                placeholder="Город"
                value={personality.city}
                onChange={(event) => {
                  const value =
                    event.target.value.length > 1
                      ? event.target.value.slice(0, 1).toUpperCase() +
                        event.target.value.slice(1)
                      : event.target.value;
                  setPerson({ ...personality, city: value });
                }}
              />
            </label>
            <label htmlFor="food">
              Питание на кол-во персон:
              <select
                name="food"
                id="food"
                onChange={(event) =>
                  setPerson({ ...personality, foodfor: event.target.value })
                }
                defaultValue={personality.foodfor}
              >
                <option value="0">-</option>
                {Array.from(
                  { length: selectRoom.maxPersons },
                  (_, i) => i + 1
                ).map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label htmlFor="textarea">
            <textarea
              name="textarea"
              id="textarea"
              className="order__form--textarea"
              cols="30"
              rows="10"
              placeholder="Особые пожелания"
              value={personality.wishes}
              onChange={(event) => {
                const value =
                  event.target.value.length > 1
                    ? event.target.value.slice(0, 1).toUpperCase() +
                      event.target.value.slice(1)
                    : event.target.value;
                setPerson({ ...personality, wishes: value });
              }}
            ></textarea>
          </label>
        </div>
        <label
          htmlFor="checkbox"
          className="order__form--content-checkbox"
          onChange={(event) => {
            if (event.target.value) {
              setPerson({ ...personality, payDelay: "" });
            } else {
              setPerson({ ...personality, payDelay: "true" });
            }
          }}
        >
          <input
            name="checkbox"
            id="checkbox"
            type="checkbox"
            value={personality.payDelay}
          />
          <div
            className={[
              "order__form--content-checkbox-block",
              personality.payDelay
                ? " order__form--content-checkbox-block--active"
                : "",
            ].join(" ")}
          ></div>
          Оплатить при въезде
        </label>
        <button
          className="order__form--btn"
          onClick={(event) => {
            event.preventDefault();
            setProgressState("proof");
          }}
        >
          Забронировать
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
