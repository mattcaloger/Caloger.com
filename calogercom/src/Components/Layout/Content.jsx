import React from 'react'
import styled from 'styled-components'

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;

    @media only screen and (min-width: 1081px) {
        width: 66%;
    }

    @media only screen and (max-width: 1080px) {
        width: 90%;
    }
`

export default function Content(props) {
    return (
        <ContentBox>
            {props.children}
        </ContentBox>
    )
}
