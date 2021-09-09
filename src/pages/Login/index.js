import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";

function Login() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          Login
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default Login;
