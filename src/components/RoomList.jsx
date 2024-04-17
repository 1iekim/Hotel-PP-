const RoomList = ({ rooms, setSelectRoom, setProgressState, setPersonality, personality }) => {

  const handlerClick = (index, room) => {
    if(room) {
      console.log(room.maxPersons);
      setPersonality({...personality, foodfor: room.maxPersons >= 4 ? 4 : room.maxPersons});
    }
    setSelectRoom(index);
    setProgressState("order");
  }

  return (
    <section className="section room-list">
      {rooms.map((room, i) => (
        <div className="catalog_room" key={room.imgPath}>
          <div className="catalog_room__img-box">
            <img src={room.imgPath} alt="" />
            <p>В наличии {room.free} номеров</p>
          </div>
          <div className="catalog_room__content">
            <span className="catalog_room__content--persons">
              {room.maxPersons}
            </span>
            <h2 className="catalog_room__content--title">{room.title}</h2>
            <p className="catalog_room__content--description">
              {room.description}
            </p>
            <ul className="catalog_room__content--list">
              <li>
                <span>Площадь номера: </span>
                {room.size}
              </li>
              <li>
                <span>Слальные места: </span>
                {room.beds}
              </li>
              <li>
                <span>Максимальное количество гостей: </span>
                {room.maxPersons}
              </li>
              <li>
                <span>Оснащение номера: </span>
                {room.roomFitting}
              </li>
              <li>
                <span>Оплата: </span>
                {room.pay}
              </li>
            </ul>
          </div>
          <div className="catalog_room__select">
            <div className="catalog_room__select--type">
              <span>Начиная с</span>
              <h3>{room.price},00 руб</h3>
              <span>за 1 ночь, за номер</span>
              <button onClick={(event) => {handlerClick(i)}}>Выбрать</button>
              <span>Без питания</span>
            </div>
            <div className="catalog_room__select--type">
              <span>Начиная с</span>
              <h3>
                {room.maxPersons >= 4
                  ? room.price + 50 * 4
                  : room.price + 50 * room.maxPersons}
                ,00 руб
              </h3>
              <span>за 1 ночь, за номер</span>
              <button onClick={() => {handlerClick(i, room)}}>Выбрать</button>
              <span>
                С питанием для {room.maxPersons >= 4 ? 4 : room.maxPersons}-х
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RoomList;
