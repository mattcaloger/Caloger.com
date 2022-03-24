import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";

const LIGHT_COLOUR = 'white';
const DARK_COLOUR = 'black';
const DROP_SHADOW = 'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'
const DROP_SHADOW_HOVER = 'box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'

const CardContainerMini = styled.div`
    border-left: 5px solid ${PRIMARY};

    justify-content: center;
    align-items: center;

    font-size: 16px;

    transition: all ease-in .1s;
    width: 75%;
    margin: auto;

    color: black;
    background: ${LIGHT_COLOUR};

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

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    user-select: none;
    text-align: center;

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

export { CardContainerMini }