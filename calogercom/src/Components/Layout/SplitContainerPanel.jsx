import React from 'react'
import styled from 'styled-components'

const SplitContainerPanelComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    
`

export default function SplitContainerPanel(props) {
    return (
        <SplitContainerPanelComponent>
            {props.children}
        </SplitContainerPanelComponent>
    )
}
