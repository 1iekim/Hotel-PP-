import FormSection from "../components/FormSection";
import RoomSection from "../components/RoomSection";
import folder from "../assets/main_page/main_folder.png";
import report from "../assets/main_page/report_img.png";
import arrowLeft from "../assets/main_page/Arrow_left.png";
import arrowRight from "../assets/main_page/Arrow_right.png";
import "../components/componentStyle/main-module.scss";

const Main = () => {
  const clickHandler = () => {
    console.log("click");
    const block = document.querySelector(".report__text");
    const control = document.querySelector(".report__control");

    block.style.display = 'none';
    control.style.marginTop = '175px';
    setTimeout(() => {
      block.style.display = 'block';
      control.style.marginTop = '0px';
    }, 0);
  };

  return (
    <main className="main-container">
      <FormSection />
      <RoomSection />
      <section className="section container section__about">
        <h2 className="section__title">ГОСТЕВОЙ ДОМ "Valentina Guest House"</h2>
        <div className="section__content about__content">
          <img src={folder} alt="Владелец" className="about__content--img" />
          <div className="about__content--text">
            <p>Дорогие гости,</p>
            <p>
              Безопасность и комфорт гостей и персонала – это приоритет нашей
              работы.
            </p>
            <p>
              Мы круглосуточно следим за тем, что Министерство здравоохранения
              Российской Федерации, Федеральная служба по надзору в сфере защиты
              прав потребителей и Всемирная организация здравоохранения сообщают
              о распространении нового типа коронавируса (COVID-19) и
              беспрекословно выполняем рекомендации этих организаций и местных
              органов здравоохранения.
            </p>
            <p>
              Мы искренне сочувствуем всем, кого коснулось это бедствие и с
              огромным уважением относимся к врачам, местным сообществам и
              правительствам, которые задействованы в прямой борьбе с
              распространением коронавируса.
            </p>
          </div>
        </div>
      </section>
      <section className="section container">
        <h2 className="section__title">ОТЗЫВЫ О НАС</h2>
        <div className="section__content report">
          <div className="report__text">
            <p>
              Все было прекрасно! Отличный номер, уютный и комфортный; в номере
              чисто, все в рабочем состоянии!
            </p>
            <h3>Vera</h3>
          </div>
          <div className="report__control">
            <button className="report__control--btn" onClick={clickHandler}>
              <img
                src={arrowLeft}
                alt="Arrow left"
                className="report__control--btn-arrow"
              />
            </button>
            <img
              src={report}
              alt="User_report"
              className="report__control--img"
            />
            <button className="report__control--btn" onClick={clickHandler}>
              <img
                src={arrowRight}
                alt="Arrow right"
                className="report__control--btn-arrow"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
