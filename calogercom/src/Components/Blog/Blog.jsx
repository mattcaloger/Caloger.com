import React from 'react'
import { Link } from 'react-router-dom'
import PageTitle from '../Layout/PageTitle'
import Title from '../Pages/ProjectsPage/Projects/Layout/Title'
import TerminalCard from '../Terminal/TerminalCard'
import SpanRow from '../Terminal/SpanRow'
import Tag from '../Pages/ProjectsPage/Projects/Layout/Tag'
import TerminalButton from '../Terminal/TerminalButton'
import PageContainer from '../Pages/ProjectsPage/Projects/Layout/PageContainer'


export default function Blog() {
    return (
        <PageContainer>
            <PageTitle>Blog</PageTitle>
                
            <TerminalCard>

                <Title>Buildsheet Editor</Title>
                <SpanRow>
                    <Tag>desktop-app</Tag>
                </SpanRow>

                <p>A deep-dive into designing the Buildsheet Editor</p>

                <SpanRow>
                    
                        <TerminalButton>
                            <Link to="buildsheet-editor">> details</Link>
                        </TerminalButton>
                </SpanRow>
            </TerminalCard>
        </PageContainer>
    )
}
