import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS } from '../Layout/BorderRadius'
import { DROP_SHADOW, DROP_SHADOW_HOVER } from '../Layout/LightDarkCardFlat'

const TerminalCardComponent = styled.div`
            ${DROP_SHADOW_HOVER}
            background: rgba(0, 0, 0, .90);
            color: white;
            width: 100%;
            border-radius: ${BORDER_RADIUS};
            margin: auto;
            padding: 20px;
            user-select: none;
            font-family: monospace;
            &>* {
                padding: 10px;
            }
        `

export default function TerminalCard(props) {

    

    return (
        <TerminalCardComponent>
            {props.children}
        </TerminalCardComponent>
    )
}
