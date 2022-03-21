import React from 'react'
import styled from 'styled-components'

const SplitContainerComponent = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;

    &>* {
        flex: 1;
    }

`

export default function SplitContainer(props) {
    return (
        <SplitContainerComponent>
            {props.children}
        </SplitContainerComponent>
    )
}
