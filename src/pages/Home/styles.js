import styled, { keyframes } from "styled-components";
import mainImg from "../../assets/main-img.png";

const appearFromBack = keyframes`
from{
    opacity: 0;
    transition: all 0.1s linear; 
    transform: scale(0.8);
}
to {
    opacity:1;
    transform: scale(1); 
}
`;

const showUp = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}
`;

export const HomeBackground = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 280px;
  background: url(${mainImg}) no-repeat center;
  background-size: contain;
  animation: ${showUp} 0.3s;

  h1 {
    margin-block: 10px;
    max-width: 60%;
    font-size: 24px;
    font-family: 'Staatliches', cursive;
    color: black;
  }

  @media (min-width: 600px) {
    width: 380px;
    height: 380px;

    h1 {
        font-size: 30px;
    }
  }

  @media (min-width: 800px) {
    background-size: cover;
    min-width: 450px;
    height: 400px;
    h1 {
        font-size: 40px;
    }
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  animation: ${appearFromBack} 0.3s;

  button {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: 'Urbanist', sans-serif;
    margin-block: 10px;
  }

  button:hover {
    background-color: red;
    transition:0.3s;
  }

  button:active {
    background-color: white;
    transition:0.3s;
    color: black;
  }

  .presentation {
    font-size: 12px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600; 
    max-width: 500px;
    min-width: 30vw;
    margin-block: 0;
  }

  @media(min-width: 800px) {
    flex-direction: row;
    width: 75vw;
    justify-content: space-around;

    h3 {
        font-size: 16px;
    }
  }
`;