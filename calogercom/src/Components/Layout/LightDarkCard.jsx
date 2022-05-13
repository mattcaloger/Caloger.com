import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";
import { SHADOWS } from "./Shadows";

const LIGHT_COLOUR = 'white';
const DARK_COLOUR = 'black';
const DROP_SHADOW = SHADOWS.medium;
const DROP_SHADOW_HOVER = SHADOWS.large;

const CardContainer = styled.div`
border-top: 5px solid ${PRIMARY};
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all ease-in .1s;
    
    ${DROP_SHADOW}

    border-radius:${BORDER_RADIUS};
    @media (min-width: 768px) {
         &:hover {
            ${DROP_SHADOW_HOVER}
         }
    }
   
    
    &>* {
        margin-bottom: 25px;
    }
`

const CardBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
    width: 100%;

    &>* {
        flex: 1;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    @media only screen and (max-width: 992px) {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;

        &>* {

            margin-top: 10px;
            margin-bottom: 10px;
        }
        
    }
`

const HeaderBase = styled(CardBase)`
    border-top-left-radius: ${BORDER_RADIUS};;
    border-top-right-radius: ${BORDER_RADIUS};;
`

const FooterBase = styled(CardBase)`
    border-bottom-left-radius: ${BORDER_RADIUS};;
    border-bottom-right-radius: ${BORDER_RADIUS};;
`

const LightHeader = styled(HeaderBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const DarkHeader = styled(HeaderBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const LightBody = styled(CardBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const DarkBody = styled(CardBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const LightFooter = styled(FooterBase)`
    color: black;
    background: #DDD;;
`

const DarkFooter = styled(FooterBase)`
    color: white;
    background: ${DARK_COLOUR};
`

export { CardContainer, LightHeader, LightBody, LightFooter, DarkHeader, DarkBody, DarkFooter, LIGHT_COLOUR, DARK_COLOUR, DROP_SHADOW, DROP_SHADOW_HOVER }