import styled from "styled-components";

export const DashboardComicContainer = styled.div`
    width: 90vw;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 auto;
    flex-wrap: wrap;
    align-items: center;
    margin-block: 20px;
    justify-content: space-around;
    padding: 15px 0;
`

export const ComicBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 40vw;
    max-width: 400px;
    background: ${props => props.image ? `url(${props.image})` : "black"} no-repeat center;
    background-size: cover;
  `

export const ComicBlackTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    height: 100%;
    width: 100%;
    padding: 15px 0;
    background-color: rgb(0,0,0,0.7);

    img {
        border: 2px solid white;
        border-radius: 5px;
        max-width: 100px;
    }

    h1 {
        font-size: 38px;
        font-family: 'Staatliches', cursive;
        font-weigth: 200;
        width: 80%;
    }

    p {
        font-size: 14px;
        font-family: 'Urbanist', sans-serif;
        width: 80%;
        margin-inline: 0;
    }
`

export const ComicButtons = styled.div`

    button {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: red;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 16px;
    font-family: 'Urbanist', sans-serif;
    margin-inline: 10px;
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
`

export const InfoContainer = styled.div`
    display: flex;
    margin-block: 20px;
    justify-content: space-around;
    align-items: flex-start;
    min-width: 40vw;
    max-width: 500px;
    background-size: cover;
    background-color: white;
    padding: 12px;
    min-height: 60vh;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);

    h3 {
        color: black;
        font-size: 24px;
        font-family: 'Staatliches', cursive;
    }

    .WhoHas {
        margin-inline-end: 20px;
    }
`

