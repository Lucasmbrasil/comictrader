import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground, InitialContainer } from "../../styles/globalComponents";
import { QuestionContainer,FirtsBlock ,SecondBlock,ThirdBlock} from "./styles";

function FAQ() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <InitialContainer>
          <QuestionContainer>
            <FirtsBlock>
              <h1>Oque é o Comic Trader ?</h1>
              <p>é uma plataforma voltada para troca de quadrinhos novos,seminovos e usados afim de facilitar a vida
                dos leitores de quadrinhos que querem uma Hq nova mas gostariam de adquirir uma sem gastar seu dinheiro
              </p>
            </FirtsBlock>
           <SecondBlock>
              <h1>Como faço uma troca ?</h1>
              <p>Bata clicar no botão eu quero e você sera redirecionado para o chat onde podera ter uma conversa privada com o usuario que possue aquela HQ</p>
            </SecondBlock> 
          </QuestionContainer>
        </InitialContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default FAQ;