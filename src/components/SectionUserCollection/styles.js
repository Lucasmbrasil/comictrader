import styled from "styled-components"

export const ComicListsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap wrap;
    max-width: 900px;
    
    .ListContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        h2 {
            width: 100%;
            font-size: 32px;
            font-family: 'Staatliches', cursive;
            font-weigth: 200;
        }
    }
`