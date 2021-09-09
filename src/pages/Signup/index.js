import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";

// import { Container } from './styles';

function Signup() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          Cadastro
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default Signup;
