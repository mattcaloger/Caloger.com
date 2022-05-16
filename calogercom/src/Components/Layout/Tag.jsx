import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";

const Tag = styled.span`

    border-radius: ${BORDER_RADIUS};
    color: grey;
    user-select: none;
    cursor: default;
    color: #26A69A;
    font-family: monospace;

    &:first-child {
        padding-left: 0px;
    }
`

export default Tag