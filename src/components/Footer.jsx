import SocialLink from "./SocialLink";
import map from "../assets/map.png";
import imgPhone from "../assets/phone.png";
import imgHouse from "../assets/house.png";
import imgGeo from "../assets/geo.png";
import imgLetter from "../assets/letter.png";
import "./componentStyle/footer-module.scss";

const Footer = () => {
  const contacts = [
    { img: imgPhone, content: "8 (862) 279-56-89" },
    { img: imgHouse, content: "Абхазия, Цандрыпш" },
    { img: imgGeo, content: "ул.Октябрьская, д.492" },
    { img: imgLetter, content: "booking@valentinahouse.ru" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/*section Geo*/}
          <section className="footer__geo">
            <h4 className="footer__section--title">Геолокация</h4>
            <img className="footer__geo-img" src={map} alt="map" />
          </section>
          {/*section contacts*/}
          <section className="footer__contacts">
            <h4 className="footer__section--title">Контакты</h4>
            <ul className="footer__contacts--list">
              {contacts.map(({ img, content }) => (
                <li key={content} className="footer__contacts--list-item">
                  <img className="footer__contacts--list-img" src={img} alt="#" />
                  {content}
                </li>
              ))}
            </ul>
          </section>
          {/*section info*/}
          <section className="footer__info">
            <h4 className="footer__section--title">Информация</h4>
            <ul className="footer__info--list">
              <li className="footer__info--list-item">Заезд: с 16:00</li>
              <li className="footer__info--list-item">Выезд: до 12:00</li>
              <li className="footer__info--list-item">Бесплатный Wi-Fi</li>
              <li className="footer__info--list-item">Бесплатная парковка</li>
            </ul>
            <div className="footer__info--links">
              <a className="footer__info--link" href="#">О нас</a>
              <a className="footer__info--link" href="#">Условия бронирования</a>
              <a className="footer__info--link" href="#">Политика конфиденциальности</a>
            </div>
          </section>
          {/*section weather*/}
          <section className="footer__weather">
            <h4 className="footer__section--title">Погода</h4>
            <div className="footer__weather--content">Яндекс.Погода: +17</div>
            <SocialLink />
          </section>
        </div>
        <div className="footer__post">
          <h5 className="footer__post--title">© 2015–2024 - VALENTINA GUEST HOUSE</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
