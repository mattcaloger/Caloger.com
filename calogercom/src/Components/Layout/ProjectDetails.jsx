import styled from "styled-components"
import { BORDER_RADIUS } from "./BorderRadius"

const ProjectDetails = styled.div`

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
    background: rgba(255,255,255,1);
    backdrop-filter: blur(10px);
    color: black;
    width: 100%;
    border-radius: ${BORDER_RADIUS};
    margin: auto;
    margin-bottom: 1em;
    padding: 1em;
`

export default ProjectDetails