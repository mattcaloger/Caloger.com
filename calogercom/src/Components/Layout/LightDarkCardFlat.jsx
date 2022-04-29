import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";

const LIGHT_COLOUR = 'white';
const DARK_COLOUR = 'black';
const DROP_SHADOW = 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
const DROP_SHADOW_HOVER = 'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'

const FlatCardContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all ease-in .1s;

    border-radius:${BORDER_RADIUS};
    

    margin-top: 25px;
    margin-bottom: 25px;
    
`

const FlatCardBase = styled.div`
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

const FlatHeaderBase = styled(FlatCardBase)`
    border-top-left-radius: ${BORDER_RADIUS};;
    border-top-right-radius: ${BORDER_RADIUS};;
`

const FlatFooterBase = styled(FlatCardBase)`
    border-bottom-left-radius: ${BORDER_RADIUS};;
    border-bottom-right-radius: ${BORDER_RADIUS};;
`

const FlatLightHeader = styled(FlatHeaderBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const FlatDarkHeader = styled(FlatHeaderBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const FlatLightBody = styled(FlatCardBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const FlatDarkBody = styled(FlatCardBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const FlatLightFooter = styled(FlatFooterBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const FlatDarkFooter = styled(FlatFooterBase)`
    color: white;
    background: ${DARK_COLOUR};
`

export { FlatCardContainer, FlatLightHeader, FlatLightBody, FlatLightFooter, FlatDarkHeader, FlatDarkBody, FlatDarkFooter, LIGHT_COLOUR, DARK_COLOUR, DROP_SHADOW, DROP_SHADOW_HOVER }