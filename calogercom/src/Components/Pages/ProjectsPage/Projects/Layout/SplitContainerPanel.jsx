import React from 'react'
import styled from 'styled-components'

const SplitContainerPanelComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
        margin-top: 25px;
        margin-bottom: 25px;
    }
    
`

export default function SplitContainerPanel(props) {
    return (
        <SplitContainerPanelComponent>
            {props.children}
        </SplitContainerPanelComponent>
    )
}
