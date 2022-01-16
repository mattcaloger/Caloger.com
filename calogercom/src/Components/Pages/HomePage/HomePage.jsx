import React from 'react'
import AboutBlurb from '../../AboutBlurb/AboutBlurb'
import ProfilePicture from '../../ProfilePicture/ProfilePicture'
import Terminal from '../../Terminal/Terminal'
import styled from 'styled-components'
import PageTitle from '../../Layout/PageTitle'

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;

    &>* {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`



export default function HomePage() {
    return (
        <HomePageContainer>
            <PageTitle>About Me</PageTitle>
            <AboutBlurb />
            <Terminal />
            
            
        </HomePageContainer>
    )
}
