import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../Layout/PageTitle'
import Title from '../Pages/ProjectsPage/Projects/Layout/Title'
import TerminalCard from '../Terminal/TerminalCard'
import SpanRow from '../Terminal/SpanRow'
import Tag from '../Pages/ProjectsPage/Projects/Layout/Tag'
import TerminalButton from '../Terminal/TerminalButton'
import PageContainer from '../Pages/ProjectsPage/Projects/Layout/PageContainer'

import { CardContainer, DarkHeader, LightHeader, LightBody, LightFooter, DarkFooter } from '../Layout/LightDarkCard'

import DividedContainer from '../Pages/ProjectsPage/Projects/Layout/DividedContainer'
import PageSubtitle from '../Layout/PageSubtitle'

const BlogChild = {
    hidden: { opacity: 0 },
    show: { opacity: 1},
  }

const BlogContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 1
        }
    }
}


export default function Blog() {
    return (
        <PageContainer  variants={BlogContainer} initial="hidden" animate="show">
            <PageTitle>Blog</PageTitle>
            <PageSubtitle>Select a blog to view details</PageSubtitle>

            <Link to="buildsheet-editor">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>BuildSheet Editor</Title>
                                <SpanRow>
                                <Tag>Desktop Application</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightFooter>
                        <p>A deep-dive into designing and deploying the Buildsheet Editor</p>
                        </LightFooter>
                    </CardContainer>    
                </Link> 

                <Link to="automating-account-creation">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>Automating Account Creation</Title>
                                <SpanRow>
                                    <Tag>IT</Tag>
                                    <Tag>Scripting</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightFooter>
                        <p>An exploration of automating an IT account creation process from a manual process.</p>
                        </LightFooter>
                    </CardContainer>    
                </Link> 
            
        </PageContainer>
    )
}
