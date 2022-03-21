import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS } from '../Layout/BorderRadius'

const TerminalCardComponent = styled.div`
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
            font-family: 'Montserrat', sans-serif;;
            background: rgba(255, 255, 255, .75);
            backdrop-filter: blur(10px);
            color: black;
            width: 100%;
            border-radius: ${BORDER_RADIUS};
            margin: auto;
            padding: 20px;
            user-select: none;
            margin-top: 25px;
            margin-bottom: 25px;
        `

export default function TerminalCardWhite(props) {

    

    return (
        <TerminalCardComponent>
            {props.children}
        </TerminalCardComponent>
    )
}
