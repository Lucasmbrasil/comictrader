import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";
import { QuestionContainer,FirtsBlock ,SecondBlock} from "./styles";

function FAQ() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          <QuestionContainer>
            <FirtsBlock>
              <h1>Oque é o Comic Trader ?</h1>
              <p>O Comic Trade trata-se de uma plataforma voltada para troca de quadrinhos novos,seminovos e usados afim de facilitar a vida
                dos leitores de quadrinhos que querem uma HQ, nova mas gostariam de adquirir uma sem gastar seu dinheiro
              </p>
            </FirtsBlock>
           <SecondBlock>
              <h1>Como faço uma troca ?</h1>
              <p>Basta clicar no botão "eu quero" localizado abaixo da HQ que você que você deseja trocar e você sera redirecionado para o chat onde podera ter uma conversa privada com o usuario que possue aquela HQ</p>
            </SecondBlock> 
          </QuestionContainer>
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default FAQ;