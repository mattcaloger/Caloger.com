import styled from "styled-components"
import { BORDER_RADIUS } from "../Layout/BorderRadius"

const TerminalButton = styled.span`
    padding: 10px;
    cursor: default;
    border: 2px solid white;
    border-radius: ${BORDER_RADIUS};

    &:hover {
        background: white;
        color: black;

    }
`

export default TerminalButton