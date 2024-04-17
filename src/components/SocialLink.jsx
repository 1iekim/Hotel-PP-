import React from "react";
import linkTelegram from "../assets/social_telegram-w.png";
import linkViber from "../assets/social_viber-w.png";
import linkFacebook from "../assets/social_facebook-w.png";
import linkVK from "../assets/social_vk-w.png";
import linkInstagram from "../assets/social_instagram-w.png";
import "./componentStyle/social-module.scss"

const SocialLink = () => {
  return (
    <div className="social__block">
      <a
        href="https://github.com/1iekim"
        className="social__block--link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkTelegram} className="social__block--img" alt="Telegram" />
      </a>
      <a
        href="https://github.com/1iekim"
        className="social__block--link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkViber} className="social__block--img" alt="Viber" />
      </a>
      <a
        href="https://github.com/1iekim"
        className="social__block--link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkFacebook} className="social__block--img" alt="Facebook" />
      </a>
      <a
        href="https://github.com/1iekim"
        className="social__block--link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkVK} className="social__block--img" alt="VK" />
      </a>
      <a
        href="https://github.com/1iekim"
        className="social__block--link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkInstagram}
          className="social__block--img"
          alt="Instagram"
        />
      </a>
    </div>
  );
};

export default SocialLink;
