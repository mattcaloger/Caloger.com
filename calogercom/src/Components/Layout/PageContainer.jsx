import styled from "styled-components";

const PageContainer = styled.div`


    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 2em;
    grid-auto-rows: minmax(0, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: minmax(0, 1fr);
        grid-gap: 2em;
    }

    

`;

export default PageContainer;