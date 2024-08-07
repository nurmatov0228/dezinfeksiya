import React, { Component } from "react";
import "./home.scss";
import tozalovchi from "../Assets/img/tozalovchi.png";
import antiseptik from "../Assets/img/antiseptik.png";

export default class Home extends Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="container">
          <div className="home__flex">
            <div className="home__left">
              <div className="home__hero_top">
                <div
                  className="animated anm1"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <h1 className="home__title">Dezinfeksiya xizmati</h1>
                </div>
                <div
                  className="animated anm1"
                  data-aos="fade-right"
                  data-aos-mirror="true"
                  data-aos-anchor-placement="top-bottom"
                >
                  <p className="home__info">
                    Biz Toshkentda 10 yildan beri professional dezinfeksiya
                    Ishlarini Olib Boramiz, Buning uchun Birinchi March
                    zararkunandalardan kanday qutulishni bilamiz.
                  </p>
                </div>
                <div className="mini_pic_home">
                  <img
                    className="mini_home__img"
                    src={antiseptik}
                    alt="bu yerda rasm bor"
                  />
                </div>
              </div>
              <div
                className="animated anm1"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
              >
                <a href="#contact">
                  <button className="custom-btn_home btn-11_home btn_hm_H">
                    Bog'lanish<div className="dot"></div>
                  </button>
                </a>
              </div>
            </div>
            <div className="home__right">
              <img
                className="home__rightpic"
                src={tozalovchi}
                alt="bu yerda rasm bor"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
