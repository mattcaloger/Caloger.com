import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Pages/ProjectsPage/Projects/Layout/Title'
import SpanRow from '../Terminal/SpanRow'
import Tag from '../Pages/ProjectsPage/Projects/Layout/Tag'
import { CardContainer, LightHeader, LightFooter } from '../Layout/LightDarkCard'
import DividedContainer from '../Pages/ProjectsPage/Projects/Layout/DividedContainer'

export default function BlogCard(props) {
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
            <LightFooter>
                <p>{props.summary}</p>
            </LightFooter>
        </CardContainer>    
    </Link> 
  )
}
