import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../Layout/PageTitle'
import Title from '../Pages/ProjectsPage/Projects/Layout/Title'
import TerminalCard from '../Terminal/TerminalCard'
import SpanRow from '../Terminal/SpanRow'
import Tag from '../Pages/ProjectsPage/Projects/Layout/Tag'
import TerminalButton from '../Terminal/TerminalButton'
import PageContainer from '../Pages/ProjectsPage/Projects/Layout/PageContainer'

import { CardContainer, DarkHeader, LightBody, LightFooter, DarkFooter } from '../Layout/LightDarkCard'

import DividedContainer from '../Pages/ProjectsPage/Projects/Layout/DividedContainer'

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

            <Link to="buildsheet-editor">
                    <CardContainer>
                        <DarkHeader>
                            <DividedContainer>
                                    <Title>BuildSheet Editor</Title>
                                <SpanRow>
                                <Tag>Desktop Application</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </DarkHeader>
                        <LightFooter>
                        <p>A deep-dive into designing and deploying the Buildsheet Editor</p>
                        </LightFooter>
                    </CardContainer>    
                </Link> 

            
        </PageContainer>
    )
}
