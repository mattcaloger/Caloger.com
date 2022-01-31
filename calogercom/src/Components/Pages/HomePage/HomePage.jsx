import React from 'react'
import AboutBlurb from '../../AboutBlurb/AboutBlurb'
import ProfilePicture from '../../ProfilePicture/ProfilePicture'
import Terminal from '../../Terminal/Terminal'
import styled from 'styled-components'
import PageTitle from '../../Layout/PageTitle'

import { CSharpIcon, CSharpIconBlock, JavaScriptIconBlock, HtmlIconBlock, CssIconBlock } from '../../Terminal/LanguageIcons'
import IconImage from '../../Layout/IconImage'
import SpanRow from '../../Terminal/SpanRow'

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
            <AboutBlurb>
            </AboutBlurb>
        </HomePageContainer>
    )
}
