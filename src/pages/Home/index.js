import React from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BlackTop, InitialBackground } from "../../styles/globalComponents";
import { AnimationContainer, HomeBackground } from "./styles";

function Home() {

  const history = useHistory();

  return (
    <InitialBackground>
      <BlackTop>
        <Header/>
        <AnimationContainer>
          <HomeBackground>
            <h1>Bem-vindo ao ComicTrader!</h1>
          </HomeBackground>
          <div className="presentation">
            <h3>Somos a primeira plataforma de troca de HQs!
              Incentivamos a leitura e o fácil acesso aos quadrinhos,
              ao mesmo tempo que criamos uma rede de trocas seguras e 
              práticas, para não deixar nenhuma história guardada na estante,
              e sempre abrir caminho para novas aventuras.
            </h3>
            <button onClick={() => history.push("/signup")}>Começar</button>
          </div>
        </AnimationContainer>
        <Footer/>
      </BlackTop>
    </InitialBackground>
  )
}

export default Home;
