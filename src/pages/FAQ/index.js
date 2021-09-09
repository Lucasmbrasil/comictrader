import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";

function FAQ() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          F.A.Q.
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default FAQ;