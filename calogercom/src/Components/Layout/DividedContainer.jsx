import styled from "styled-components";

const DividedContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > * {
            justify-content: center;
        }
   }
`

export default DividedContainer