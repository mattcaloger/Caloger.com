import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { CSharpIconBlock, CssIconBlock, HtmlIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, TypeScriptIconBlock, JavaIconBlock, SpringIconBlock, SqlIconBlock, DotnetIconBlock } from '../Terminal/LanguageIcons'
import EvenSpanRow from '../Terminal/EvenSpanRow'
import TerminalCardWhite from '../Terminal/TerminalCardWhite'
import PageTitle from '../Layout/PageTitle'
import SpanRow from '../Terminal/EvenSpanRow'
import { IconGrid } from '../Layout/IconGrid';
import { BORDER_RADIUS } from '../Layout/BorderRadius'
import Title from '../Layout/Title'
import { PRIMARY } from '../Layout/Colors'

const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>* {
        margin-bottom: 25px;
    }

    
    border-: 10px;
`


const BlurbCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    background: white;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    margin: auto;
    user-select: none;
    &>* {
        flex: 1;
    }
    
`

const BlurbHeader = styled(BlurbCard)`
    border-top-left-radius: ${BORDER_RADIUS};
    border-top-right-radius: ${BORDER_RADIUS};
    color: black;
    background: #ffffff;
`

const BlurbBody = styled(BlurbCard)`
color: black;
    background: #ffffff;
`

const BlurbFooter = styled(BlurbCard)`
border-bottom-left-${BORDER_RADIUS};
border-bottom-right-${BORDER_RADIUS};

    &>* {
        margin-top: 25px;
        margin-bottom: 25px;
    }
`

export default function AboutBlurb() {
    return (
        <AboutBlock>
            
            <BlurbHeader>
                <PageTitle>About Me</PageTitle>
                <ProfilePicture />
            </BlurbHeader>
            <BlurbBody>

                <p>
                    With over 5 years of experience in the IT industry, my goal is to become a software developer to apply my love for programming and system design. I greatly enjoy problem-solving and engineering solutions that help others succeed. I am located in Toronto, Canada.
                </p>
            </BlurbBody>
            <BlurbFooter>
                
            </BlurbFooter>
        </AboutBlock>

    )
}
