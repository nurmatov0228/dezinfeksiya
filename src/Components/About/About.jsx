import React, { Component } from "react";
import "./about.scss";

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="container">
          <div
            className="animated"
            data-aos="flip-up"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 className="about_title2">Haqida</h2>
          </div>
          <div className="about_flex">
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="about_cards">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  className="about_card_icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"></path>
                </svg>
                <h3 className="about_card_title">Tezda Xizmat Kursatish</h3>
                <p className="about_card_text">
                  ARIZALAR KUNIGA 24 SOAT KABUL KILINADI. AGAR MUAMMO
                  SHOSHILINCH BOLSA, BIZ DARGOL KETISHIMIZ MUMKIN. SHU BILAN
                  BIRGA, SIFAT MUKAMMAL BOLIB KOLADI.
                </p>
              </div>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="about_cards">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 256 256"
                  className="about_card_icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M176,96a48,48,0,1,1-48-48A48,48,0,0,1,176,96Z"
                    opacity="0.2"
                  ></path>
                  <path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96ZM168,227.06l-36.43-18.21a8,8,0,0,0-7.16,0L88,227.06V174.37a87.89,87.89,0,0,0,80,0ZM128,152A56,56,0,1,0,72,96,56.06,56.06,0,0,0,128,152Zm0-96A40,40,0,1,1,88,96,40,40,0,0,1,128,56Z"></path>
                </svg>
                <h3 className="about_card_title">Yetuk mutaxasislarimiz</h3>
                <p className="about_card_text">
                  BIZNES XODIMLARIMIZ GAMA NARSAGA GAMHORLIK KILADI:
                  HISOB-KITOBLAR, KHONANI TAYERLASH, KAYTA ISHLASH, YAKUNIY
                  TOZALASH, Shamollatish VA NAZORAT TEXIRUVI.
                </p>
              </div>
            </div>
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="about_cards cc">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  className="about_card_icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.22 19.85c-.18.18-.5.21-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.19.2-.51.19-.71 0a.504.504 0 010-.71l3.39-3.39-1.41-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71l3.39-3.39-1.42-1.41-3.39 3.39c-.18.18-.5.21-.71 0a.513.513 0 010-.71L9.52 8.4l1.87 1.86c.95.95 2.59.94 3.54 0 .98-.98.98-2.56 0-3.54l-1.86-1.86.28-.28c.78-.78 2.05-.78 2.83 0l4.24 4.24c.78.78.78 2.05 0 2.83l-8.2 8.2zm9.61-6.78a4.008 4.008 0 000-5.66l-4.24-4.24a4.008 4.008 0 00-5.66 0l-.28.28-.28-.28a4.008 4.008 0 00-5.66 0L2.17 6.71a3.992 3.992 0 00-.4 5.19l1.45-1.45a2 2 0 01.37-2.33l3.54-3.54c.78-.78 2.05-.78 2.83 0l3.56 3.56c.18.18.21.5 0 .71-.21.21-.53.18-.71 0L9.52 5.57l-5.8 5.79c-.98.97-.98 2.56 0 3.54.39.39.89.63 1.42.7a2.458 2.458 0 002.12 2.12 2.458 2.458 0 002.12 2.12c.07.54.31 1.03.7 1.42.47.47 1.1.73 1.77.73.67 0 1.3-.26 1.77-.73l8.21-8.19z"></path>
                </svg>
                <h3 className="about_card_title">Sizga Makul Vaktda</h3>
                <p className="about_card_text">
                  SIZ OZINGIZ UCHUN MAKUL VA KULAY VAKTNI TALANG VA BIZGA
                  MUROZHAT QILING. SIZGA KAFOLATLANGAN VA SAMARALI NATIZHANI
                  OLIB BORAMIZ{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
