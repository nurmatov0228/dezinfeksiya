import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Noinsect from "./Components/Noinsect/Noinsect";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";
import Clean from "./Components/Clean/Clean";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Faq from "./Components/Faq/Faq";
AOS.init();

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Noinsect />
        <Services />
        <Clean />
        <Faq />
        <Contact />
        <Footer />
      </>
    );
  }
}
