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
    justify content: stretch;
    padding: 15px 0;
`

export const DashboardContainer = styled.div`
    background-color: gray;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`