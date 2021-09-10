import styled from "styled-components";


export const QuestionContainer = styled.div`
   background-color:black;
   overflow-y:scroll;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: column;
    align-items: center;
`;

export const FirtsBlock = styled.div`
    border:1px solid black;
    height: 67%;
    width: 68%;
    margin-bottom:1rem;
    margin-top:1rem;
    h1{
        color:white;
    }
    p{
        color:white;
    }
`;

export const SecondBlock = styled.div`
    border:1px solid black;
    height: 67%;
    width: 68%;
    margin-bottom:1rem;
    h1{
        color:white;
    }
    p{
        color:white
    }
`;


export const ThirdBlock = styled.div`
    border:1px solid black;
    height: 67%;
    width: 68%;
    h1{
        color:white;
    }
    p{
        color:white;
    }
`;