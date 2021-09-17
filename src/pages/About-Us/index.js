import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  BlackTop,
  InitialBackground,
  InitialContainer,
} from "../../styles/globalComponents";

import { UsContainer, DevContainer, DevInfo } from "./styles";

import { AiOutlineLinkedin, AiOutlineGitlab } from "react-icons/ai";
import { useHistory } from "react-router";
import { useState } from "react";

function AboutUs() {
  const history = useHistory();
  const [display, setDisplay] = useState(false);

  return (
    <InitialBackground>
      <BlackTop>
        <Header />
        <InitialContainer>
          {!display ? (
            <UsContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01R55T4552-5764ed1abc92-512"
                  }
                  alt="Kaio"
                />
                <DevInfo>
                  <a href="https://gitlab.com/users/KaioIwakiri">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="about:blank">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Kaio Iwakiri</h2>
                  <h3>Product Owner</h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01SWFS618Q-befc5bbc73e0-512"
                  }
                  alt="Anna"
                />
                <DevInfo>
                  <a href="https://gitlab.com/annaoliveira02">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/anna-louise-de-oliveira-ferreira-a6127b142">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Anna Oliveira</h2>
                  <h3>Scrum Master</h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01SH3SQNUC-72b840dbfd32-512"
                  }
                  alt="Lucas"
                />
                <DevInfo>
                  <a href="https://gitlab.com/lucasbrasil">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/lucasmbrasil/">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Lucas Machado</h2>
                  <h3>Tech Leader </h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01Q82C0C0Y-9e79cdd397d0-512"
                  }
                  alt="Arthur"
                />
                <DevInfo>
                  <a href="https://gitlab.com/Javascript_worm">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/arthur-goulart-99a7b118b/">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Arthur Goulart</h2>
                  <h3>Quality Assurance</h3>
                </DevInfo>
              </DevContainer>
            </UsContainer>
          ) : (
            <UsContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01R55T4552-5764ed1abc92-512"
                  }
                  alt="Kaio"
                />
                <DevInfo>
                  <a href="https://gitlab.com/users/KaioIwakiri">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="about:blank">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Kaio Iwakiri</h2>
                  <h3>Product Owner</h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01SWFS618Q-befc5bbc73e0-512"
                  }
                  alt="Anna"
                />
                <DevInfo>
                  <a href="https://gitlab.com/annaoliveira02">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/anna-louise-de-oliveira-ferreira-a6127b142">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Anna Oliveira</h2>
                  <h3>Scrum Master</h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01SH3SQNUC-72b840dbfd32-512"
                  }
                  alt="Lucas"
                />
                <DevInfo>
                  <a href="https://gitlab.com/lucasbrasil">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/lucasmbrasil/">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Lucas Machado</h2>
                  <h3>Tech Leader </h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://ca.slack-edge.com/TQZR39SET-U01Q82C0C0Y-9e79cdd397d0-512"
                  }
                  alt="Arthur"
                />
                <DevInfo>
                  <a href="https://gitlab.com/Javascript_worm">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="https://www.linkedin.com/in/arthur-goulart-99a7b118b/">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Arthur Goulart</h2>
                  <h3>Quality Assurance</h3>
                </DevInfo>
              </DevContainer>
              <DevContainer>
                <img
                  src={
                    "https://img.discogs.com/3GxI3A1UtCsY44DRTuvwqtN-GVg=/412x567/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-136870-1603051104-5232.jpeg.jpg"
                  }
                  alt="Ivan kiedis"
                />

                <DevInfo>
                  <a href="#">
                    <AiOutlineGitlab /> GitLab
                  </a>
                  <a href="#">
                    <AiOutlineLinkedin /> LinkedIn
                  </a>
                  <h2>Ivan Borba</h2>
                  <h3>Chief Technical Officer</h3>
                </DevInfo>
              </DevContainer>
            </UsContainer>
          )}
          <button className="backButton" onClick={() => history.push("/")}>
            Voltar
          </button>

          <button className="backButton" onClick={() => setDisplay(true)}>
            Revele o 5º personagem
          </button>
        </InitialContainer>

        <Footer />
      </BlackTop>
    </InitialBackground>
  );
}

export default AboutUs;
