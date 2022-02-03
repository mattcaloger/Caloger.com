import React from 'react'
import styled from 'styled-components'

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    padding: 10px;

    @media only screen and (min-width: 992px) {
        width: 50%;
    }
`

export default function Content(props) {
    return (
        <ContentBox>
            {props.children}
        </ContentBox>
    )
}
