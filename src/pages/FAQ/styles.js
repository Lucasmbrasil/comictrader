import styled from "styled-components";


export const QuestionContainer = styled.div`
    background-color: rgb(0,0,0,0.7);
    overflow: auto;
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
`;

export const QuestionBlock = styled.div`
    width: 90%;

    h1 {
        font-family: 'Staatliches', cursive;
        font-size: 28px;
        font-weight: 300;
        color:white;
    }

    p {
        font-family: 'Urbanist', sans-serif;  
        font-size: 18px;
        color:white;
    }

    @media(max-width: 600px) {
        h1 {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
`;