import styled from "styled-components";
import background from "../../assets/small-background.jpg";

export const UserCardContainer = styled.div`
  background: url(${background}) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  border-radius: 5px;

  img {
    border: 2px solid black;
    border-radius: 100%;
    width: 40px;
    margin-inline: 5px;
  }

  .userCardInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(0, 0, 0, 0.7);
    border-radius: 0 5px 5px 0;
    padding: 8px;
    height: 100%;
    width: 60%;

    h5 {
      margin-block: 2px;
      font-family: "Urbanist", sans-serif;
      text-align: left;
      text-transform: uppercase;
      font-size: 15px;
    }

    h6 {
      margin-block: 2px;
      font-family: "Urbanist", sans-serif;
      text-align: left;
      font-weight: 300;
      font-size: 12px;
    }
  }
`;
