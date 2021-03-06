import styled from "styled-components";

export const FooterMain = styled.div`
  display: flex;
  height: 30px;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-end;
  width: 100vw;
  padding: 10px 0;
  background-color: black;
  font-family: 'Urbanist', sans-serif;
  margin-block-end: 0px;

  .FooterSignature {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-start: 15px;
    font-size: 10px;
  }

  .FooterLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline-end: 15px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 10px;
    font-size: 10px;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  p:hover {
    color: red;
    transition: 0.3s;
  }

  @media (min-width: 600px) {
    .FooterSignature {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }
  }
`;
