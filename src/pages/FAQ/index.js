import React from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  BlackTop,
  InitialBackground,
  InitialContainer,
} from "../../styles/globalComponents";
import { QuestionContainer, QuestionBlock } from "./styles";

function FAQ() {
  const history = useHistory();

  return (
    <InitialBackground>
      <BlackTop>
        <Header />
        <InitialContainer>
          <QuestionContainer>
            <QuestionBlock>
              <h1>O que é o ComicTrader?</h1>
              <p>
                O ComicTrader é uma plataforma voltada para troca de quadrinhos
                novos e usados a fim de facilitar a vida dos leitores, que podem
                economizar trocando HQs paradas na estante por exemplares que
                tenham interesse. Aqueles que não possuem recursos para sempre
                comprarem novas edições, também se beneficiam pelos preços mais
                baixos e possibilidade de troca sem valor adicional.
              </p>
            </QuestionBlock>
            <QuestionBlock>
              <h1>Quais os quadrinhos disponíveis?</h1>
              <p>
                O ComicTrader conta com um acervo de mais de 400.000 HQs
                cadastradas, incluindo os mais recentes lançamentos. Basta você
                buscar a HQ de seu interesse e adicioná-la à sua coleção de
                interesses ou de oferta.
              </p>
            </QuestionBlock>
            <QuestionBlock>
              <h1>Como faço uma troca?</h1>
              <p>
                É super simples! Ao escolher a HQ que está procurando, você pode
                clicar no botão "Quero!" na página de detalhes do quadrinho para
                adicioná-la à sua seção de interesses. Na página da HQ, também há uma lista
                de pessoas que tem aquela revista, e ao entrar no perfil de alguma delas, você
                poderá entrar em contato e acertar os detalhes da troca (envio, pagamento, etc).
              </p>
            </QuestionBlock>
            <QuestionBlock>
              <h1>As trocas são seguras?</h1>
              <p>
                Para garantir que nossos usuários sempre estejam satisfeitos,
                contamos com um sistema de avaliação onde você pode reportar
                elogios ou reclamações sobre as pessoas com quem realizou
                trocas. Usuários com melhores avaliações sempre estarão em maior
                evidência, e os que apresentarem muitas reclamações serão
                advertidos pela nossa equipe.
              </p>
            </QuestionBlock>
          </QuestionContainer>
          <button className="backButton" onClick={() => history.push("/")}>
            Voltar
          </button>
        </InitialContainer>
        <Footer />
      </BlackTop>
    </InitialBackground>
  );
}

export default FAQ;
