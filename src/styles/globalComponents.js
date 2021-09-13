import styled from "styled-components";
import main_background from "../assets/main-background.jpg"

export const InitialBackground = styled.div`
    background-image: url(${main_background});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
`
export const BlackTop = styled.div`
    background-color: rgb(0,0,0,0.6);
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const InitialContainer = styled.div`
    width: 80vw;
    min-height: 60vh;
    display: flex;
    flex: 1 0 auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px 0;

    .backButton {
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

    .backButton:hover {
       background-color: red;
        transition:0.3s;
    }

    .backButton:active {
        background-color: white;
        transition:0.3s;
        color: black;
    }
`

export const DashboardBackground = styled.div`
    background-color: #E1E1E1;
    margin-inline: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

export const DashboardContainer = styled.div`
    width: 80vw;
    min-height: 60vh;
    display: flex;
    flex: 1 0 auto;
    flex-wrap: wrap;
    align-items: center;
    justify content: center;
    padding: 15px 0;
`