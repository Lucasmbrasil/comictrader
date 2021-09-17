import styled from "styled-components";
import devBackground from "../../assets/small-background.jpg";

export const UsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 60vh;
  width: 80vw;
  justify-content: center;
  align-items: center;
`;

export const DevContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid black;
  background: url(${devBackground}) no-repeat center;
  width: 200px;
  margin: 15px;

  img {
    width: 150px;
    height: 150px;
    margin-block: 10px;
    border-radius: 100%;
    border: 2px solid black;
    object-fit: cover;
  }
`;

export const DevInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.8);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    text-decoration: none;
    padding: 5px;
    width: 120px;
    border-radius: 5px;
    border: 2px solid black;
    margin-block-start: 10px;
    font-size: 14px;
    font-family: "Urbanist", sans-serif;
  }

  a:hover {
    background-color: red;
    color: white;
    transition: 0.3s;
  }

  svg {
    font-size: 20px;
    margin-inline-end: 5px;
  }

  h2 {
    font-family: "Staatliches", cursive;
    font-size: 26px;
    font-weight: 200;
    margin-block-end: 0;
  }

  h3 {
    font-family: "Urbanist", sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-block-start: 0;
  }
`;
