import React, { Component } from "react";
import "./contact.scss";
import oldirasm from "../Assets/img/oldifondagirasm.png";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      number: "",
    };
  }

  handleValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const token = `7224174930:AAHfX4xYMCiylsXEZPRrKF395SLBmv3XdcU`;
    const chat_id = 1308395281;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    axios({
      url: url,
      method: "post",
      data: {
        chat_id: chat_id,
        text: this.state.name + "  " + this.state.number,
      },
    })
      .then((data) => {
        alert("Ma'lumotlar Jo'natildi");
      })
      .catch((error) => {
        alert("Ma'lumotlar jo'natishda xatolik yuz berdi");
      });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__flex">
            <div
              className="animated"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="contact__left">
                <h2 className="contact__title">Ma'lumotingizni qoldiring</h2>
                <form onSubmit={this.handleSubmit} className="contact__form">
                  <input
                    onChange={this.handleValue}
                    required
                    className="contact__input"
                    type="text"
                    placeholder="Ismingiz"
                    name="name"
                    value={this.state.name}
                  />
                  <label className="contact__plus">
                    <input
                      onChange={this.handleValue}
                      required
                      className="contact__input contact__number"
                      type="number"
                      placeholder="998-90-123-45-67"
                      name="number"
                      value={this.state.number}
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
