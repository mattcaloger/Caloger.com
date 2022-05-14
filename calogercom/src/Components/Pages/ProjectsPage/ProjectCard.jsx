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

const CardIcon = styled.div`

&>* {
    width: 24px;
    height: 24px;
}
    
`

export default function ProjectCard(props) {
    return (
        <Link to={props.url}>
            <CardContainer>
                <LightHeader>
                    <Title>{props.title}</Title>
                    <SpanRow>
                        {props.tags.map((tag, index) => {
                            return <Tag key={index}>{tag}</Tag>
                        })}
                    </SpanRow>
                    </LightHeader>
                <LightBody>
                    
                    <ProjectSummary>{props.summary}</ProjectSummary>
                    
                </LightBody>
                <LightFooter>
                <EvenSpanRow>
                        {props.icons.map((icon, index) => {
                            return <CardIcon key={index}>{icon}</CardIcon>
                        })}
                    </EvenSpanRow>
                </LightFooter>
            </CardContainer>
        </Link>
    )
}
