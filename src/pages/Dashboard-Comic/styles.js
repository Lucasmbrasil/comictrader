import styled from "styled-components";


export const FatherContainer = styled.div`
    background-color:red;
    height:100vh;
    width :100%;
`


export const TopBar = styled.div`
    background-color:green;
    height:10%;
    width :100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`


export const WebSiteName = styled.div`
    background-color:blue;
 width: 33%;
    height: 100%;
`

export const SearchDiv = styled.div`
    border-radius: 5px;
    border: 1px solid black;
    width: 14%;
    display: flex;
    justify-content: space-evenly;
`;

export const SearchInput = styled.input`
    border:none;
`;


export const PageContent = styled.div`
    background-color:purple;
    height:100%;
    display:flex;
    justify-content:center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    background-color:blue;
    height:50%;
    width: 85%;
    display:flex;
`;


export const TextContainer = styled.div`
   background-color: red;
    width: 64%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p{
        text-align:center;
    }

`;

export const ImageContainer = styled.div`
    background-color: orange;
    width: 36%;

`;

export const Image = styled.img`
    width: 15%;
    height: 15%;

`;