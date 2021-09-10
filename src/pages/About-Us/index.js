import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  BlackTop,
  InitialBackground,
  InitialContainer,
} from "../../styles/globalComponents";

import {
  UsContainer,
  FirtsDev,
  SecondDev,
  ThirdDev,
  FourthDev,
  LinkDivs,
  DevImage,
} from "./styles";

function AboutUs() {
  return (
    <InitialBackground>
      <BlackTop>
        <Header />
        <InitialContainer>
          <UsContainer>
            <FirtsDev>
              <DevImage
                src={
                  "https://ca.slack-edge.com/TQZR39SET-U01SWFS618Q-befc5bbc73e0-512"
                }
                alt=""
              />
              <LinkDivs>
                <a href="https://gitlab.com/annaoliveira02">
                  <img
                    src={"https://cdn.worldvectorlogo.com/logos/gitlab.svg"}
                    alt=""
                    className="icons"
                  />
                </a>
                <a href="https://www.linkedin.com/in/anna-louise-de-oliveira-ferreira-a6127b142">
                  <img
                    src={
                      "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                    }
                    alt=""
                    className="icons"
                  />
                </a>
              </LinkDivs>
              <p>Anna Louise</p>
              <p>Cargo:SM </p>
            </FirtsDev>
            <SecondDev>
              <DevImage
                src={
                  "https://ca.slack-edge.com/TQZR39SET-U01SH3SQNUC-72b840dbfd32-512"
                }
                alt=""
              />
              <LinkDivs>
                <a href="https://gitlab.com/lucasbrasil">
                  <img
                    src={"https://cdn.worldvectorlogo.com/logos/gitlab.svg"}
                    alt=""
                    className="icons"
                  />
                </a>

                <a href="https://www.linkedin.com/in/lucasmbrasil/">
                  <img
                    src={
                      "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                    }
                    alt=""
                    className="icons"
                  />
                </a>
              </LinkDivs>
              <p>Lucas Machado</p>
              <p>Cargo:TL </p>
            </SecondDev>
            <ThirdDev>
              <DevImage
                src={
                  "https://ca.slack-edge.com/TQZR39SET-U01R55T4552-5764ed1abc92-512"
                }
                alt=""
              />

              <LinkDivs>
                <a href="https://gitlab.com/users/KaioIwakiri">
                  <img
                    src={"https://cdn.worldvectorlogo.com/logos/gitlab.svg"}
                    alt=""
                    className="icons"
                  />
                </a>
                <a href="#">
                  {" "}
                  <img
                    src={
                      "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                    }
                    alt=""
                    className="icons"
                  />
                </a>
              </LinkDivs>
              <p>Kaio Takumi </p>
              <p>Cargo:PO </p>
            </ThirdDev>
            <FourthDev>
              <DevImage
                src={
                  "https://ca.slack-edge.com/TQZR39SET-U01Q82C0C0Y-9e79cdd397d0-512"
                }
                alt=""
              />
              <LinkDivs>
                <a href="https://gitlab.com/Javascript_worm">
                  {" "}
                  <img
                    src={"https://cdn.worldvectorlogo.com/logos/gitlab.svg"}
                    alt=""
                    className="icons"
                  />
                </a>
                <a href="https://www.linkedin.com/in/arthur-goulart-99a7b118b/">
                  <img
                    src={
                      "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                    }
                    alt=""
                    className="icons"
                  />
                </a>
              </LinkDivs>
              <p>Arthur Goulart </p>
              <p>Cargo:QA </p>
            </FourthDev>
          </UsContainer>
        </InitialContainer>
        <Footer />
      </BlackTop>
    </InitialBackground>
  );
}

export default AboutUs;
