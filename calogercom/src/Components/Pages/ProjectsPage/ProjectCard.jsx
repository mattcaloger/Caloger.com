import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SpanRow from '../../Terminal/SpanRow'
import Tag from '../../Layout/Tag'
import DividedContainer from '../../Layout/DividedContainer'
import { CardContainer, LightFooter, LightBody, LightHeader } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';
import Title from '../../Layout/Title'

import VideoIcon from '../../../img/icons/PlayVideo.svg'

const ProjectSummary = styled.div`
    cursor: default;
    user-select: none;
`
const CardFooter = styled.div`
    height: 50px;
    width: 100%;
    background: #DDD; 
`

const ActionIcon = styled.img`
    height: 50px;;
    width: auto;

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
                    <EvenSpanRow>
                        {props.icons.map((icon, index) => {
                            return <React.Fragment key={index}>{icon}</React.Fragment>
                        })}
                    </EvenSpanRow>
                </LightBody>
                <LightFooter>
                    <CardFooter>
                    <EvenSpanRow>
                        <ActionIcon src={VideoIcon} alt="Video"></ActionIcon>
                    </EvenSpanRow>
                    </CardFooter>
                </LightFooter>
                
            </CardContainer>
        </Link>
    )
}
