import styled from "styled-components";

export const UsContainer = styled.div`
background-color:black;
height: 389px;
    width: 1205px;
 display: flex;
 justify-content:space-evenly;
 flex-direction: row;
 align-items: center;
 @media screen and (max-width:768px){
    flex-direction:column;
    height: 1222px;
 }
`;

export const FirtsDev = styled.div`
       
    border-radius: 5px;
    height: 99%;
    width: 20%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
   
    @media screen and (max-width:768px){
        height: 214px;
    width: 204px;
 }
`;

export const SecondDev = styled.div`
    
    border-radius: 5px;
    height: 99%;
    width: 20%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        height: 264px;
    width: 249px;
 }
   
`;

export const ThirdDev = styled.div`
     
    border-radius: 5px;
    height: 99%;
    width: 20%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        
    height: 272px;
    width: 252px;

 }
   
`;

export const FourthDev = styled.div`
    
    border-radius: 5px;
    height: 99%;
    width: 20%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        
        height: 241px;
    width: 211px;
     }
    
`;

export const LinkDivs = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 6%;
    width: 100%;
    .icons{
        width: 36px;
        height: 23px;
        cursor:pointer;
        }

        a{
            color:white;
            width: 67px;
        }



`;

export const DevImage = styled.img`
       width: 124px;
    height: 125px;
    border-radius: 100%;

`;
