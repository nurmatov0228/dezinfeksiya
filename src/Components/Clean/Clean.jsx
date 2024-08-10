import React, { Component } from "react";
import "./clean.scss";
import tozalash2 from "../Assets/img/tozalash2.png";
import himoyaicon from "../Assets/img/himoyaicon.png";

export default class Information extends Component {
  render() {
    return (
      <section className="clean">
        <div className="container">
          <div className="clean__flex">
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="clean__left">
                <img
                  className="clean__left_pic"
                  src={tozalash2}
                  alt="sdaijawida"
                />
              </div>
            </div>
            <div className="clean__right">
              <div
                className="animated"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
              >
                <img
                  className="threeD_image"
                  src={himoyaicon}
                  alt="sdasdasda"
                />
              </div>
              <div
                className="animated"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
              >
                <h3 className="clean__title">
                  Rasmiy kafolat - 1 yil. Biz jizmoniy va yuridik shaxslarga
                  xizmat ko'rsatamiz. Xizmatlar litsenziyalangan!!!
                </h3>
              </div>
              <div
                className="animated"
                data-aos="fade-right"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
              >
                <a href="#contact">
                  <button className="custom-btn_home btn-11_home">
                    Bog'lanish<div className="dot"></div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
