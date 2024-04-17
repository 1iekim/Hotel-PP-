import room_1 from "../assets/main_page/room_card-1.png";
import room_2 from "../assets/main_page/room_card-2.png";
import room_3 from "../assets/main_page/room_card-3.png";
import room_4 from "../assets/main_page/room_card-4.png";
import "../components/componentStyle/roomSection-module.scss"


const RoomSection = () => {
  return (
    <section className="section container room-section">
      <h2 className="section__title">НАШИ НОМЕРА</h2>
      <div className="section__content rooms__container">
        <div className="room">
          <img src={room_1} alt="Номер 1" className="room__img" />
          <div className="room__content">
            <h3 className="room__title">2-х местный</h3>
            <ul className="room__list">
              <li>-Площадь номера: 11 м2</li>
              <li>-1 двуспальная или 2 односпальные кровати</li>
              <li>-Кондиционер</li>
              <li>-Интернет</li>
              <li>-Телевизор</li>
            </ul>
          </div>
        </div>

        <div className="room">
          <img src={room_2} alt="Номер 2" className="room__img" />
          <div className="room__content">
            <h3 className="room__title">Семейный</h3>
            <ul className="room__list">
              <li>-Площадь номера: 18 м2</li>
              <li>-1 двуспальная или 1 односпальныя кровать</li>
              <li>-Кондиционер</li>
              <li>-Интернет</li>
              <li>-Телевизор</li>
            </ul>
          </div>
        </div>

        <div className="room">
          <img src={room_3} alt="Номер 3" className="room__img" />
          <div className="room__content">
            <h3 className="room__title">Deluxe</h3>
            <ul className="room__list">
              <li>-Площадь номера: 30 м2</li>
              <li>-1 двуспальная кровать или 1 раскладной диван</li>
              <li>-Кондиционер</li>
              <li>-Интернет</li>
              <li>-Телевизор</li>
              <li>-2 комнаты</li>
            </ul>
          </div>
        </div>

        <div className="room">
          <img src={room_4} alt="Номер 4" className="room__img" />
          <div className="room__content">
            <h3 className="room__title">Deluxe Plus</h3>
            <ul className="room__list">
              <li>-Площадь номера: 45 м2</li>
              <li>-2 односпальные кровати, 1 двуспальная кровать, 1 диван</li>
              <li>-Кондиционер</li>
              <li>-Интернет</li>
              <li>-Телевизор</li>
              <li>-3 комнаты</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
