import styled from "styled-components";
import main_background from "../../assets/main-background.jpg"

export const UserInfoBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-image: url(${main_background});
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid black;
  padding: 10px 0;

  .userImageContainer {
    width: 25%;
    max-width: 200px;
    
    img {
        width: 120px;
        border: 2px solid black;
        border-radius: 100%;
    }
  }

  .userProfileInfo {
      width: 50%;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

    h1 {
        margin-block: 0;
        font-family: "Staatliches", sans-serif;
        text-align: left;
        text-transform: uppercase;
        font-size: 60px;
        font-weight: 100;
    }

    h2 {
        margin: 0;
        font-family: "Urbanist", sans-serif;
        text-align: left;
        font-weight: 300;
        font-size: 20px; 
        background-color: rgb(0,0,0,0.8);
        border-radius: 5px;
        padding: 5px;
    }

    button {
      padding: 5px 15px;
      border-radius: 5px;
      background-color: red;
      color: white;
      cursor: pointer;
      outline: none;
      border: none;
      font-size: 16px;
      font-family: 'Urbanist', sans-serif;
      margin-block-start: 10px;
      margin-inline-end: 5px;
    }
  
    button:hover {
      background-color: black;
      transition:0.3s;
    }
  
    button:active {
      background-color: white;
      transition:0.3s;
      color: black;
    } 

    .visitorButtons {
      display: flex;
      
    }
  }

  @media(max-width: 750px) {
    .userImageContainer {
      img {
          width: 100px;
      }
    }

  .userProfileInfo {
    h1 {
        text-transform: none;
        font-size: 40px;
    }

    h2 {
        font-weight: 500;
        font-size: 16px; 
    }
  }

  @media(max-width: 500px) {
    .userImageContainer {
      img {
          width: 60px;
      }
    }

  .userProfileInfo {
    h1 {
        text-transform: none;
        font-size: 25px;
    }

    h2 {
        font-weight: 500;
        font-size: 14px; 
    }

    button {
      font-size: 12px;
      margin-block-start: 5px;
    }
  }
`;