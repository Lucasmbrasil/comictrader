import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";

function AboutUs() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          Sobre nós
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default AboutUs;