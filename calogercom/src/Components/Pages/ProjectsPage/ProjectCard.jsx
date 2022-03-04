import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SpanRow from '../../Terminal/SpanRow'
import Title from './Projects/Layout/Title'
import Tag from './Projects/Layout/Tag'
import DividedContainer from './Projects/Layout/DividedContainer'
import { CardContainer, DarkFooter, LightBody, LightHeader } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';

const ProjectSummary = styled.div`
    cursor: default;
    user-select: none;
`

export default function ProjectCard(props) {
    return (
        <Link to={props.url}>
            <CardContainer>
                <LightHeader>
                    <DividedContainer>
                            <Title>{props.title}</Title>
                        <SpanRow>
                            {props.tags.map(tag => {
                                return <Tag>{tag}</Tag>
                            })}
                        </SpanRow>
                    </DividedContainer>
                </LightHeader>
                <LightBody>
                    <ProjectSummary>{props.summary}</ProjectSummary>
                </LightBody>
                <DarkFooter>
                    <EvenSpanRow>
                        {props.icons.map(icon => {
                            return icon
                        })}
                    </EvenSpanRow>
                </DarkFooter>
            </CardContainer>
        </Link>
    )
}
