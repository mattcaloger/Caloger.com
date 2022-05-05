import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";
import { DROP_SHADOW, DROP_SHADOW_HOVER } from "./LightDarkCard";

const LIGHT_COLOUR = 'white';
const DARK_COLOUR = 'black';

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
        width: 50%;
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
    padding-left: 10px;
    padding-right: 10px;
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