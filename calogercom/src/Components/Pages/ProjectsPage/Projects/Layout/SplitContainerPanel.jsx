import React from 'react'
import styled from 'styled-components'

const SplitContainerPanelComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export default function SplitContainerPanel(props) {
    return (
        <SplitContainerPanelComponent>
            {props.children}
        </SplitContainerPanelComponent>
    )
}
