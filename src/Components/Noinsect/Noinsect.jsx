import React, { Component } from "react";
import "./noinsect.scss";

export default class Noinsect extends Component {
  render() {
    return (
      <section className="noinsect" id="noinsects">
        <div className="container">
          <div className="noinsect__flex">
            <div className="noinsect__tr"></div>
            <div className="noinsect__info">
              <div
                className="animated  anm1"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              >
                <h2 className="noinsect__title">
                  Klapa va zararli xashorot endi yo'q deb hisoblang!!!
                </h2>
              </div>
              <div
                className="animated anm2"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              >
                <p className="noinsect__text">
                  Bizning qup yillardan beri o'z kuchini olib keladi
                  kompaniyalar Mijozlarimiz bizdan mamnun
                </p>
              </div>
              <div
                className="animated anm3"
                data-aos="fade-left"
                data-aos-mirror="true"
                data-aos-anchor-placement="top-bottom"
                id="animated"
              >
                <a href="#contact">
                  <button className="btn">Bog'lanish</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
