import styled from "styled-components"

export const EditProfileForm = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 400px;
    width: 90vw;
    min-height: 40vh;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 15px 0;
    box-shadow: 2px 2px 6px 0px rgba(0,0,0,0.5);
    color: black; 

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    input {
        width: 280px;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 2px solid black;
        margin-block-end: 2px;
        font-family: 'Urbanist', sans-serif;  
    }
     
    
        span {
        font-size: 14px;
        font-family: 'Urbanist', sans-serif;
        font-weight: 600; 
        margin-block-end: 12px;
        margin-inline-start: 5px;
        text-align: left;
        color: red;
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
        font-family: 'Urbanist', sans-serif;
        margin-block: 10px;
        }
    
        button:hover {
        background-color: red;
        transition:0.3s;
        }
    
        button:active {
        background-color: white;
        transition:0.3s;
        color: black;
        }     
        
        h2 {
            font-family: "Staatliches", cursive;
            font-size: 20px;
            text-align: center;
            font-weight: 100;
        }

        @media(max-width: 600px) {
            input {
                width: 240px;
            }
        }
    }
`