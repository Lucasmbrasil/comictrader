import styled from "styled-components";

export const HeaderMain = styled.div`
    display: flex;
    height: 60px;
    flex-shrink: 0;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 10px 0;
    background-color: black;
    margin-block-start: 0px;

    .MenuButton {
        align-self: center;
        font-size: 25px;
        margin-inline-start: 10px;
        cursor: pointer;

        &:active {
            color: red;
            transition: 0.4s;
        }
    }

    .HeaderLogo {
        margin-inline-start: 15px;
        cursor: pointer;
        display: flex;
        align-itens: center;
        font-family: 'Staatliches', cursive;

        .Logo1 {
            color: red;
            font-size: 30px;
        }

        .Logo2 {
            font-weight: 400;
            font-size: 30px;
        }
    }

    .HeaderButtons {
        margin-inline-end: 10px;
        
        h5 {
            font-weight: 400;
            font-size: 12px;

            a {
                color: red;
                cursor: pointer;
            }
        }
    }

    @media(min-width: 600px) {
        .MenuButton {
            display: none;
        }

        .HeaderButtons {
            margin-inline-end: 20px;

            h5 {
                font-size: 18px;
            }
        }

        .HeaderLogo {
            margin-inline-start: 20px;

            .Logo1 {
                font-size: 40px;
            }
    
            .Logo2 {
                font-size: 40px;
            }
        }
    }
`

export const HeaderButton = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    margin-inline: 10px;
    font-size: 18px;
    cursor: pointer;

    &&:hover {
        color: red;
        transition: 0.4s;
    }
`