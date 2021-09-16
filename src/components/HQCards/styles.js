import styled from "styled-components";

export const HQCardContainer = styled.div`
    transition: 0.3s;
    display: flex;
    max-width: 250px;
    min-width: 250px;
    max-height: 150px;
    align-items: center;
    background-color: white;
    margin: 15px;
    padding: 5px;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);
    cursor: pointer;

    .hqImageContainer {
        align-content: center;
        max-width: 110px;
        max-height: 140px;

        img {
            justify-self: center;
            align-self: center;
            width: 110px;
            height: 140px;
        }
    }

    .hqInfoContainer {
        display:flex;
        flex-direction: column;
        width: 140px;
        color: black;
        height: 140px;
        margin-inline-start: 5px;
        justify-content: space-between;
        align-items: center;

        .hqInfo {
            display: flex;
            flex-direction: column;
            width: 130px;

            h3 {
            font-family: 'Staatliches', cursive;
            font-size: 20px;
            margin-block: 0;
            text-align: left;
            }

            p {
            font-family: 'Urbanist', sans-serif;
            font-size: 12px;
            margin-block-start: 2px;
            text-align: left;
            }
        }
    }

    &&:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }

    &&:active {
        background-color: black;
        transition: 0.2s;

        .hqInfoContainer {
            color: white;
        }        
    }

    .hqRating {
        max-width: 90%;
    }
`