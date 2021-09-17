import styled from "styled-components";
import main_background from "../../assets/main-background.jpg";
import { CircularProgress } from "@material-ui/core";

export const ComicListContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-inline: 0;
  margin-block-start: 15px;


  .errorContainer {
    width: 80vh;

    img {
      max-width: 200px;
    }

    p {
      font-family: "Urbanist", sans-serif;
      font-size: 20px;
      color: black;
    }
  }
`;

export const ComicSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-image: url(${main_background});
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid black;
  padding: 10px 0;

  input {
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 2px solid black;
    margin-block-start: 10px;
    font-family: "Urbanist", sans-serif;
  }

  .SearchBackground {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block-start: 10px;
    background-color: white;
    padding: 0 15px;
    font-size: 16px;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
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
    font-family: "Urbanist", sans-serif;
    margin-block: 10px;
  }

  button:hover {
    background-color: red;
    transition: 0.3s;
  }

  button:active {
    background-color: white;
    transition: 0.3s;
    color: black;
  }
`;
export const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: red;
  }
`;
