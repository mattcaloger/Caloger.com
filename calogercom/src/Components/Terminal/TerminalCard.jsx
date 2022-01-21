import React from 'react'
import styled from 'styled-components'

const TerminalCardComponent = styled.div`
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
            font-family: monospace;
            background: rgba(0, 0, 0, .90);
            backdrop-filter: blur(10px);
            color: white;
            width: 100%;
            border-radius: 10px;
            margin: auto;
            margin-bottom: 50px;
            padding: 20px;
            user-select: none;
        `

export default function TerminalCard(props) {

    

    return (
        <TerminalCardComponent>
            {props.children}
        </TerminalCardComponent>
    )
}
