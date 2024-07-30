import React, { Component } from "react";
import "./services.scss";
import virus from "../Assets/img/virus.png";
import burga from "../Assets/img/burga.png";
import sichqon from "../Assets/img/sichqon.png";
import turi1 from "../Assets/img/turi1.jpg";
import turi2 from "../Assets/img/turi2.jpg";
import turi3 from "../Assets/img/turi3.jpg";
import turi4 from "../Assets/img/turi4.jpg";
import turi5 from "../Assets/img/turi5.jpg";

export default class Services extends Component {
  render() {
    return (
      <section className="service" id="service">
        <div className="container">
          <div className="animated flipInX anm01">
            <h2 className="service__title">Xizmatlar</h2>
          </div>
          <div className="animated flipInX anm02">
            <p className="service__info">
              Biz sizga samarali va kafolatli xizmat ko'rsatdim.
            </p>
          </div>
          <div className="top_service__flex ">
            <div className="animated bounceInLeft anm03">
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={virus} alt="dsadasda" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    Dezinfektsiya - zararli mikroorganizmlarni yo'q qilish
                  </h3>
                  <p className="topser_card_text">
                    Har kanday dezinfektsiya asosy foydalanish infektsiyalar va
                    olib kelishi mumkin bulgan hafli mikroorganizm yo'q
                    qilishdir. Bushni zararsizlantirish zhojni mogor, virus,
                    chiriyotgan va bakteriyalardan tozalaydi. Qovurilgan
                    atrof-muhitni patogen organizmlardan tozalaidi.Agar o'zingiz
                    emon his qisangiz, charchok yoki sababsiz zaiflassangiz
                    kerak.
                  </p>
                </div>
              </div>
            </div>
            <div className="animated bounceInLeft anm04">
              <div className="top_ser_cards">
                <img
                  className="topser_card_pic"
                  src={burga}
                  alt="sdasdasdads"
                />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    Desineksatsiya - xasharotlarni yo'q qilish
                  </h3>
                  <p className="topser_card_text">
                    Kup odamlar birinchi navbatdagi 'dizinfestatsiya' suzini
                    istalmagan qushnilaridan - choyshablar, hamambösekler,
                    chumolilar va boshka xasharotlardan halos bulish elini
                    Qidirganda duch kelishadi. Ularning o'zlari o'qimsiz va ular
                    ham malum infeksiya tashuvchilari. Desineksatsiya - boo
                    hasharotlarni: chivinlar, chivinlar, choishablar, tarakan,
                    kuya, shomil, kobik qo'ng'izlari, yog'och bitlari va boshka
                    sudralib yuruvchi va uchuvchi zhonzotlarni yo'q qilish. .
                  </p>
                </div>
              </div>
            </div>
            <div className="animated bounceInLeft anm05">
              <div className="top_ser_cards">
                <img className="topser_card_pic" src={sichqon} alt="dasdasda" />
                <div className="topser_card_right">
                  <h3 className="topser_card_title">
                    Deratizatsiya - kemiruvchilarni yo'q qilish.
                  </h3>
                  <p className="topser_card_text">
                    Toshkentda deratizatsiya kemiruvchilarni yoqqa qaratilgan
                    Chora-ning majmuasi butun majmuasidir. Malumki,
                    kemiruvchilar zhuda qattik zhonzotlar bwlib, ular turli hill
                    hafli ta'sirlarga dosh beradilar. Buning uchun ularni yo'q
                    qilish uchun bir kator usullardan foidalanish kerak.
                    Deratizatsiya Tashkent shahrida kemiruvchilar payo boʻlgan
                    joilarda: kop qavatli uylar, omborlar, doʻkonlar, umumiy
                    ovqatlanish korhonalari amalga oshirish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animated flipInX anm06">
            <h2 className="service__title">Xizmat turi</h2>
          </div>
          <div className="service__flex">
            <div className="animated bounceInLeft anm06">
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">KLAPALAR</h3>
                    <p className="service__card_text">
                      Ular tushakda, yumshok mebellari, tukimachilikda, yeshik
                      romlari va osti romlari ostida yashashlar. Ular odamlar va
                      issiq qonli xayvonlarning qoni bilan oziklanadi. Allergiya
                      va ogir psixolog nokulaylikni qo'zg'atmoqda...
                    </p>
                  </div>
                  <a href="#contact">
                    <button className="custom-btn_ser-card btn-11_ser-card service__card_btn">
                      Bog'lanish<div className="dot"></div>
                    </button>
                  </a>
                  <div className="service__card_img_box">
                    <img className="service__img" src={turi1} alt="salom" />
                  </div>
                </div>
              </span>
            </div>
            <div className="animated bounceInLeft anm06">
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">TARAKANLAR</h3>
                    <p className="service__card_text">
                      Ular patogenlarni olib yuradi. Ular yoriqlarda, taglik
                      tagida, mebel orkasida, hammom ostida, cabinet ostida va
                      Hokazolarda yashashlar. Ular ozik-ovkat, maishi
                      chikindilar, Charm buyumlar va kogoz bilan oziklanadilar.
                    </p>
                  </div>
                  <a href="#contact">
                    <button className="custom-btn_ser-card btn-11_ser-card service__card_btn">
                      Bog'lanish<div className="dot"></div>
                    </button>
                  </a>
                  <div className="service__card_img_box">
                    <img className="service__img" src={turi2} alt="salom" />
                  </div>
                </div>
              </span>
            </div>
            <div className="animated bounceInLeft anm06">
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">CHAYON</h3>
                    <p className="service__card_text">
                      Hasharotlar va arachnidlar bilan ozik issiklikni yaxshi
                      kuradigan zhonzotlar. Ular omborlarda va uylarda
                      yashashlari koʻpincha ular yogoch binolarda topiladi...
                    </p>
                  </div>
                  <a href="#contact">
                    <button className="custom-btn_ser-card btn-11_ser-card service__card_btn">
                      Bog'lanish<div className="dot"></div>
                    </button>
                  </a>
                  <div className="service__card_img_box">
                    <img className="service__img" src={turi3} alt="salom" />
                  </div>
                </div>
              </span>
            </div>
            <div className="animated bounceInLeft anm06">
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">KEMIRUVCHILAR</h3>
                    <p className="service__card_text">
                      Yong keng tarkalgan qalamushlar va sichqonlar. Ular
                      patogenlarni olib yuradi, barcha sirtlarda ishlaydi, devor
                      va shiftlarda o'tish zhoylarini dasturlar, structuring
                      ishonchliligini pasaytiradi. Ular ozik-ovkat va maishiy
                      chikindilar bilan oziklanadi...
                    </p>
                  </div>
                  <a href="#contact">
                    <button className="custom-btn_ser-card btn-11_ser-card service__card_btn">
                      Bog'lanish<div className="dot"></div>
                    </button>
                  </a>
                  <div className="service__card_img_box">
                    <img className="service__img" src={turi4} alt="salom" />
                  </div>
                </div>
              </span>
            </div>
            <div className="animated bounceInLeft anm06">
              <span>
                <div className="service__cards">
                  <div>
                    <h3 className="service__card_title">BURGALAR</h3>
                    <p className="service__card_text">
                      Ular uy khayvonlari tanasiga kirib, qushnilardan quchib
                      ketadi. Ular mebellari, kurpa-tushaklar, gilamlar, yangi
                      o'yinchoqlar, taglik tagida va eshiklar romlarida
                      yashaydilar. Ular odamlar va hayvonlarning koni bilan
                      oziklanadi. Ularga olib keladi...
                    </p>
                  </div>
                  <a href="#contact">
                    <button className="custom-btn_ser-card btn-11_ser-card service__card_btn">
                      Bog'lanish<div className="dot"></div>
                    </button>
                  </a>
                  <div className="service__card_img_box">
                    <img className="service__img" src={turi5} alt="salom" />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
