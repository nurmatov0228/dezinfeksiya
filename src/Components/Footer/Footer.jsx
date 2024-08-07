import React, { Component } from "react";
import "./footer.scss";
import dezinfeksiya from "../Assets/img/dezinfeksiyatoshkent.png";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container">
          <div className="footer__flex">
            <a href="#home" className="footer__logo__link">
              <img
                className="logo__pic"
                src={dezinfeksiya}
                alt="This is the footer logo"
              />
            </a>
            <div className="footer__right_div">
              <div className="footer__phone_address">
                <div
                  className="animated anm1"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="#home">
                    <span className="footer__span">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="footer__icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </span>
                    <p className="footer__text">Uzbekistan, Toshkent Shahri</p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="footer__icon2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </a>
                </div>
                <div
                  className="animated anm2"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <a href="tel:+998991199933">
                    <span className="footer__span">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="footer__icon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </span>
                    <p className="footer__text">+998 99 119 99 33</p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="footer__icon2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
