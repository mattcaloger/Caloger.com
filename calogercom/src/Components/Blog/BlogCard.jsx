import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Layout/Title'
import SpanRow from '../Terminal/SpanRow'
import Tag from '../Layout/Tag'
import { CardContainer, LightHeader, LightFooter } from '../Layout/LightDarkCard'
import DividedContainer from '../Layout/DividedContainer'

export default function BlogCard(props) {
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
<p>{props.summary}</p>
            </LightHeader>
            <LightFooter>
                
            </LightFooter>
        </CardContainer>    
    </Link> 
  )
}
