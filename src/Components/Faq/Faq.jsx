import React, { Component } from "react";
import "./faq.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default class Faq extends Component {
  render() {
    return (
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__flex">
            <h2 className="faq__main_title">FAQ</h2>
            <div className="faq__acrr_div">
              <Accordion>
                <AccordionSummary
                  className="accardion__head"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h4 className="faq__title">
                    Zararkunandalarni yo'q qilish qanday amalga oshiriladi?
                  </h4>
                </AccordionSummary>
                <AccordionDetails className="accardion__body">
                  <p className="faq__text">
                    Mahsus asbob-uskunalar yordamida insectitsidlar aerosolli
                    tumanga alanadi va devor kog'ozi, tiklanadi va taxta
                    guruhlari eng kichik bwshlik, kwzga kwrinmas xasharotlar
                    uchun potensial 'yashirish joilari' ga qiradi.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accardion__head"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h4 className="faq__title">
                    Siz foydalanadigan dorilar xavflimi?{" "}
                  </h4>
                </AccordionSummary>
                <AccordionDetails className="accardion__body">
                  <p className="faq__text">
                    Preparatlar, uy hayvonlari va o'simliklar uchun xavfli emas.
                    Ammo keyin xonani 40 daqiqa ventilatsiya qilish kerak.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  className="accardion__head"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <h4 className="faq__title">
                    Menga uyimni bolalarga tayorlashning qandaydir usuli
                    kerakmi?
                  </h4>
                </AccordionSummary>
                <AccordionDetails className="accardion__body">
                  <p className="faq__text">
                    Asosan, idish-tovoq shakxsiy gigiyenani boshqarishni
                    izolyatsiya qilish kerak. Uy hayvonlari ham isolatisiya
                    qilinishi kerak. Mebel yoki maishiy asbob-uskunalarni
                    ko'chirishga hojat yo'q.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
