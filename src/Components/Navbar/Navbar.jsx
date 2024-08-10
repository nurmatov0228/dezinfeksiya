import React, { Component } from "react";
import "./navbar.scss";
import dezinfeksiya from "../Assets/img/dezinfeksiyatoshkent.png";

export default class Navbar extends Component {
  render() {
    return (
      <section className="navbar_active navbar">
        <div className="container">
          <div className="navbar_flex">
            <a className="navbar__logo__link" href="#home">
              <img
                className="logo__pic"
                src={dezinfeksiya}
                alt="This is the logo"
              />
            </a>
            <div className="navbar__rigth__box">
              <div className="null navigations">
                <button className="close_menu">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    className="close_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </button>
                <a href="#home" className="navbar__links">
                  Asosiy
                </a>
                <a href="#about" id="linkitem" className="navbar__links">
                  Biz haqimizda
                </a>
                <a href="#service" className="navbar__links">
                  Xizmatlar
                </a>
                <a href="#faq" className="navbar__links">
                  Faq
                </a>
                <a href="#contact" className="gg">
                  <button className="custom-btn_nav btn-11_nav">
                    Bog'lanish<div className="dot"></div>
                  </button>
                </a>
              </div>
              <div className="navbar_lang_and_btn_div">
                <div className="custom-dropdown">
                  <select className="lang__option">
                    <option className="lang__option" value="ru">
                      Русский
                    </option>
                    <option className="lang__option" value="uz">
                      O'zbekcha
                    </option>
                  </select>
                </div>
                <div className="null dark_div"></div>
                <a href="#contact" className="gg1">
                  <button className="custom-btn_nav btn-11_nav">
                    Bog'lanish<div className="dot"></div>
                  </button>
                </a>
                <div className="navbar__burger">
                  <hr className="navbar__hr" />
                  <hr className="navbar__hr" />
                  <hr className="navbar__hr" />
                </div>
                <button className="open_menu">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="0"
                    viewBox="0 0 15 15"
                    className="open_icon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
