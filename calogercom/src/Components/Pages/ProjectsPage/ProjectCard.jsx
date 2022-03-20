import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SpanRow from '../../Terminal/SpanRow'
import Tag from '../../Layout/Tag'
import DividedContainer from '../../Layout/DividedContainer'
import { CardContainer, LightFooter, LightBody, LightHeader } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';
import Title from '../../Layout/Title'

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
                            {props.tags.map((tag, index) => {
                                return <Tag key={index}>{tag}</Tag>
                            })}
                        </SpanRow>
                    </DividedContainer>
                </LightHeader>
                <LightBody>
                    <ProjectSummary>{props.summary}</ProjectSummary>
                </LightBody>
                <LightFooter>
                    <EvenSpanRow>
                        {props.icons.map((icon, index) => {
                            return <React.Fragment key={index}>{icon}</React.Fragment>
                        })}
                    </EvenSpanRow>
                </LightFooter>
            </CardContainer>
        </Link>
    )
}
