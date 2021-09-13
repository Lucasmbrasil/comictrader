import styled, { keyframes } from "styled-components";
import signUpBack from "../../assets/balloon-img.png";

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

export const SignUpBackground = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: url(${signUpBack}) no-repeat center;
  background-size: contain;
  animation: ${showUp} 0.3s;

  h1 {
    margin-block: 20px;
    font-size: 40px;
    font-family: 'Staatliches', cursive;
    color: black;
  }

  @media (min-width: 600px) {
    width: 300px;
    height: 300px;

    h1 {
        font-size: 50px;
    }
  }

  @media (min-width: 800px) {
    width: 400px;
    height: 400px;
    h1 {
        font-size: 70px;
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

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 2px solid black;
    margin-block-end: 2px;
    font-family: 'Urbanist', sans-serif;  
  }

  span {
    font-size: 14px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600; 
    margin-block-end: 12px;
    margin-inline-start: 5px;
    text-align: left;
  }
  
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

  p {
    font-size: 12px;
    font-family: 'Urbanist', sans-serif;
    font-weight: 600; 
  }

  a {
    color: yellow;
  }

  a:active {
    color: red;
  }

  @media(min-width: 800px) {
    flex-direction: row;
    width: 80vw;
    justify-content: space-around;

    p {
        font-size: 16px;
    }
  }
`;