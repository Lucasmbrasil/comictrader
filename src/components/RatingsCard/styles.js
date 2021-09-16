import styled from "styled-components";

export const RatingsCardContainer = styled.div`
    transition: 0.3s;
    display: flex;
    max-width: 250px;
    min-width: 250px;
    align-items: center;
    background-color: #E1E1E1;
    margin: 15px;
    padding: 5px;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);

    .commenterInfo {
        display:flex;
        flex-direction: column;
        width: 90%;
        color: black;
        min-height: 120px;
        margin-inline-start: 5px;
        justify-content: center;
        align-items: flex-start;
       
        h5 {
            margin-block: 2px;
            font-family: "Urbanist", sans-serif;
            text-align: left;
            font-style: italic;
            font-size: 18px;
        }

        h6 {
            margin-block: 2px;
            font-family: "Urbanist", sans-serif;
            text-align: left;
            font-weight: 300;
            font-size: 12px; 
        }
    }
`
