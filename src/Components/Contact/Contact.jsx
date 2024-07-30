import React, { Component } from "react";
import "./contact.scss";
import oldirasm from "../Assets/img/oldifondagirasm.png";

export default class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__flex">
            <div className="animated bounceInLeft anm1">
              <div className="contact__left">
                <h2 className="contact__title">Ma'lumotingizni qoldiring</h2>
                <form className="contact__form">
                  <input
                    required
                    className="contact__input"
                    type="text"
                    placeholder="Ismingiz"
                  />
                  <label className="contact__plus">
                    <input
                      required
                      className="contact__input contact__number"
                      type="number"
                      placeholder="998-90-123-45-67"
                    />
                    <span className="plus">+</span>
                  </label>
                  <button id="con_btn" className="contact__btn">
                    Yuborish
                  </button>
                </form>
              </div>
            </div>
            <div className="contact__right">
              <img className="contact__img" src={oldirasm} alt="pic" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
