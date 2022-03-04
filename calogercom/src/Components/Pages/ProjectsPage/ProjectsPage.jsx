import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SpanRow from '../../Terminal/SpanRow'

import PageTitle from '../../Layout/PageTitle'
import Title from './Projects/Layout/Title'
import Tag from './Projects/Layout/Tag'
import PageContainer from './Projects/Layout/PageContainer'
import { CssIconBlock, HtmlIconBlock, JavaIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, SpringIconBlock, SqlIconBlock, TypeScriptIconBlock } from '../../Terminal/LanguageIcons'
import DividedContainer from './Projects/Layout/DividedContainer'
import { CardContainer, DarkFooter, LightBody, LightHeader } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';
import PageSubtitle from '../../Layout/PageSubtitle';
import ProjectCard from './ProjectCard'
import ProjectList from './ProjectList'

const ProjectSummary = styled.div`
    cursor: default;
    user-select: none;
`

export default function ProjectsPage() {
    
    return (
        
        <PageContainer> 
                <PageTitle>Projects</PageTitle>
                <PageSubtitle>Select a project to view details</PageSubtitle>

            <ProjectList />

        </PageContainer>
    )
}
