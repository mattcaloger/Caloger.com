import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { CSharpIconBlock, CssIconBlock, HtmlIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, TypeScriptIconBlock, JavaIconBlock, SpringIconBlock, SqlIconBlock } from '../Terminal/LanguageIcons'
import EvenSpanRow from '../Terminal/EvenSpanRow'
import TerminalCardWhite from '../Terminal/TerminalCardWhite'
import PageTitle from '../Layout/PageTitle'

const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>* {
        margin-bottom: 25px;
    }
    box-shadow:
        0 2px 2px rgba(0, 0, 0, 0.034),
        0 4px 4px rgba(0, 0, 0, 0.048),
        0 6px 6px rgba(0, 0, 0, 0.06),
        0 8px 8px rgba(0, 0, 0, 0.072),
        0 16px 16px rgba(0, 0, 0, 0.086),
        0 32px 32px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
`


const BlurbCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: radial-gradient(#000000dd, #000000ee);
    backdrop-filter: blur(10px);
    color: white;
    width: 100%;

    margin: auto;
    padding: 20px;
    user-select: none;
    &>* {
        flex: 1;
    }
    
`

const BlurbHeader = styled(BlurbCard)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: black;
    background: #ffffff99;
`

const BlurbBody = styled(BlurbCard)`
color: black;
    background: #ffffff99;
`

const BlurbFooter = styled(BlurbCard)`
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`

export default function AboutBlurb() {
    return (
        <AboutBlock>
            
            <BlurbHeader>
                <ProfilePicture />
            </BlurbHeader>
            <BlurbBody>

                <p>
                    With over 5 years of experience in the IT industry, my goal is to become a software engineer to apply my passion for programming and system design. I greatly enjoy problem-solving and engineering solutions that help others succeed. I am located in Toronto, Canada.
                </p>
            </BlurbBody>
            <BlurbFooter>
                <PageTitle>Skills</PageTitle>
                <EvenSpanRow>
                    
                    <JavaScriptIconBlock />
                    <HtmlIconBlock />
                    <CssIconBlock />
                    <ReactIconBlock />
                    <TypeScriptIconBlock />
                    <NodeIconBlock />
                    <CSharpIconBlock />
                    <JavaIconBlock />
                    <SpringIconBlock />
                    <PhpIconBlock />
                    <SqlIconBlock />
                </EvenSpanRow>
            </BlurbFooter>

                
                
            
            
        </AboutBlock>

    )
}
