import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";
import { MainImage } from "./styles";
import Chat from "../../components/Chat"

// import { Container } from './styles';

function Home() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          <MainImage>
            <h2>Bem-vindo ao ComicTrader!</h2>
          </MainImage>
          <div>
            <Chat/>
            <p></p>
            <button></button>
          </div>
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default Home;
