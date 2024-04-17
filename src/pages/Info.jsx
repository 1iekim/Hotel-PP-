import "../components/componentStyle/info-module.scss";
import img_1_1 from "../assets/info/photo_1-1.png";
import img_1_2 from "../assets/info/photo_1-2.png";
import img_1_3 from "../assets/info/photo_1-3.png";
import img_1_4 from "../assets/info/photo_1-4.png";
import img_2_1 from "../assets/info/photo_2-1.png";
import img_2_2 from "../assets/info/photo_2-2.png";
import img_2_3 from "../assets/info/photo_2-3.png";
import img_2_4 from "../assets/info/photo_2-4.png";
import img_3_1 from "../assets/info/photo_3-1.png";
import img_3_2 from "../assets/info/photo_3-2.png";
import img_3_3 from "../assets/info/photo_3-3.png";
import img_3_4 from "../assets/info/photo_3-4.png";
import video_1 from "../assets/info/video_1.png";
import video_2 from "../assets/info/video_2.png";
import video_3 from "../assets/info/video_3.png";

import PhotoSlider from "../components/PhotoSlider";
import VideoSlider from "../components/VideoSlider";

const Info = () => {
  const infoData = [
    { title: "Детская площадка", imgs: [img_1_1, img_1_2, img_1_3, img_1_4] },
    { title: "Бассейн", imgs: [img_2_1, img_2_2, img_2_3, img_2_4] },
    { title: "Кафе", imgs: [img_3_1, img_3_2, img_3_3, img_3_4] },
  ];
  const videoData = [
    {videos: [video_1, video_2, video_3]},
  ]

  return (
    <main className="container info">
      <section className="info__section info__about">
        <div className="info__about-1">
          <h2 className="info__about-1--title">О НАС</h2>
          <p>
            Номера в нашем Гостевом доме, расположенном на берегу черного моря,
            соответствуют современным стандартам гостиничного бизнеса: оснащены
            комфортными кроватями, с хорошими матрацами, удобными санузлами с
            душем, кондиционерами, LCD телевизорами.
            <br />
            Кухонная зона со всем необходимым оборудованием - набор посуды,
            холодильник, микроволновая печь, чайник, индукционная панель.
            Освежить свою одежду можно воспользовавшись автоматической
            стиральной машиной, расположенной здесь же.
          </p>
          <p>
            У нас Вы можете выбрать размещение в номерах по Вашему желанию и
            потребностям: одноместное; двухместное; семейное трехместное;
            семейное четырехместное; в некоторых номерах могут быть
            предоставлены дополнительные места.
          </p>
          <p>
            По просьбе гостей предоставляются туалетные и гладильные
            принадлежности, фен, утюг, гладильная доска. <br /> И конечно
            бесплатный Wi-Fi на всей территории мини-отеля.
          </p>
        </div>
        <div className="info__about-2">
          <div className="info__about-2--part">
            <h3 className="info__about-2--title">Удобства</h3>
            <ul className="info__about-2--list">
              <li>Заезд 24 часа</li>
              <li>Система бронирования через оператора или через наш сайт</li>
              <li>Бесплатный паркинг для путешествующих на авто</li>
              <li>Бесплатный Wi-Fi на территории</li>
            </ul>
          </div>
          <div className="info__about-2--part">
            <h3 className="info__about-2--title">Преимущества</h3>
            <ul className="info__about-2--list">
              <li>Безопасность и конфиденциальность</li>
              <li>Качественный сервис и высокий уровень комфорта</li>
              <li>Расположение в тихом районе, 100 шагов от моря</li>
              <li>Индивидуальный подход к каждому гостю</li>
            </ul>
          </div>
          <div className="info__about-2--part">
            <h3 className="info__about-2--title">Сервис</h3>
            <ul className="info__about-2--list">
              <li>Помощь в бронировании авиа и ж/д билетов</li>
              <li>Услуги корпоративным клиентам</li>
              <li>Визовые услуги</li>
              <li>Вызов такси</li>
            </ul>
          </div>
        </div>
      </section>
      {/* СЕКЦИЯ ФОТО */}
      <section className="info__section info__gallery">
        <h2 className="info__gallery--title">ФОТОГАЛЕРЕЯ</h2>
        <PhotoSlider title={infoData[0].title} imgs={infoData[0].imgs}/>
        <PhotoSlider title={infoData[1].title} imgs={infoData[1].imgs}/>
        <PhotoSlider title={infoData[2].title} imgs={infoData[2].imgs}/>
      </section>
      {/* СЕКЦИЯ ВИДЕО */}
      <section className="info__section info__videos">
        <h2 className="info__videos--title">ВИДЕО О НАС</h2>
        <VideoSlider videos={videoData[0].videos}/>
      </section>
    </main>
  );
};

export default Info;
