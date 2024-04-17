import PhotoSlider from "../components/PhotoSlider";
import imgRoom1 from "../assets/room/f1.png";
import imgRoom2 from "../assets/room/f2.png";
import imgRoom3 from "../assets/room/f3.png";
import imgRoom4 from "../assets/room/f4.png";
import imgRoom5 from "../assets/room_1.png";
import imgRoom6 from "../assets/room_2.png";
import imgRoom7 from "../assets/room_3.png";
import imgRoom8 from "../assets/room_4.png";


const OrderRoom = ({selectRoom}) => {
  return (
    <div className="order__prev">
          <h3 className="order__prev--title">{selectRoom.title}</h3>
          <div className="order__prev--content">
            <div className="order__prev--description">
              {selectRoom.description}
            </div>
            <ul className="order__prev--list">
              <li>
                <span>Оснащение номера: </span>
                {selectRoom.roomFitting}
              </li>
              <li>
                <span>Площадь номера: </span>
                {selectRoom.size}
              </li>
              <li>
                <span>Слальные места: </span>
                {selectRoom.beds}
              </li>
              <li>
                <span>Оплата: </span>
                {selectRoom.pay}
              </li>
            </ul>
          </div>
          <PhotoSlider
            imgs={[
              imgRoom1,
              imgRoom2,
              imgRoom3,
              imgRoom4,
              imgRoom5,
              imgRoom6,
              imgRoom7,
              imgRoom8,
            ]}
            title={""}
          />
        </div>
  )
}

export default OrderRoom;