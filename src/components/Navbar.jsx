import React, { useEffect, useState } from "react";
import SocialLink from "./SocialLink";
import "./componentStyle/navbar-module.scss";
import { useNavigate } from "react-router-dom";
import {
  INFO_PAGE,
  MAIN_PAGE,
  // PENSION_PAGE,
  POSTS_PAGE,
  ROOMS_PAGE,
} from "../utils/consts";

const Navbar = () => {
  const [page, setPage] = useState(MAIN_PAGE);
  const navigate = useNavigate();

  useEffect(() => {
    const links = document.querySelectorAll(".navbar__list--link");
    links.forEach((elem) => {
      if (
        elem.classList.contains(
          `link-${window.location.pathname.slice(1) || "main"}`
        )
      ) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  }, [page]);

  const changePage = async (event) => {
    const links = document.querySelectorAll(".active");
    links.forEach((link) => link.classList.remove("active"));

    await setPage(event.target.innerHTML);
    event.target.classList.add("active");
  };

  const handlerClickNav = (event) => {
    const burger = event.target.closest(".navbar__burger");
    const navMenu = document.querySelector(".navbar__nav");

    if (burger.classList.contains("navbar__burger--active")) {
      burger.classList.remove("navbar__burger--active");
      navMenu.classList.remove("navbar__nav--active");
    } else {
      burger.classList.add("navbar__burger--active");
      navMenu.classList.add("navbar__nav--active");
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div
          className="navbar__burger"
          onClick={handlerClickNav}
        >
          <span></span>
          <span></span>
        </div>
        <h1
          className="navbar__logo"
          onClick={() => {
            document.querySelector(".link-main").click();
          }}
        >
          Valentina Guest House
        </h1>
        <nav className="navbar__nav">
          <ul className="navbar__list" onClick={() => {
            if(document.querySelector(".navbar__nav--active")){
              document.querySelector(".navbar__burger").click();
            }
          }}>
            <li
              className="navbar__list--link link-main"
              onClick={(event) => {
                changePage(event);
                navigate(MAIN_PAGE);
              }}
            >
              Главная
            </li>
            <li
              className="navbar__list--link link-room"
              onClick={(event) => {
                changePage(event);
                navigate(ROOMS_PAGE);
              }}
            >
              Номера и цены
            </li>
            <li
              className="navbar__list--link link-post"
              onClick={(event) => {
                changePage(event);
                navigate(POSTS_PAGE);
              }}
            >
              Статьи
            </li>
            <li
              className="navbar__list--link link-info"
              onClick={(event) => {
                changePage(event);
                navigate(INFO_PAGE);
              }}
            >
              Информация
            </li>
            {/* <li
              className="navbar__list--link"
              onClick={(event) => {
                changePage(event);
                navigate(PENSION_PAGE);
              }}
            >
              Полный пансион
            </li> */}
          </ul>
        </nav>
        <SocialLink />
      </div>
    </div>
  );
};

export default Navbar;
