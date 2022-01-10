import React from 'react'
import styled from 'styled-components'

const Card = styled.div`

    display: flex;
    height: 100px;
    align-items: center;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);

    background: rgba(256,256,256,.5);
    backdrop-filter: blur(10px);
    color: black;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 50px;
    padding: 20px;
    user-select: none;
`



const Title = styled.div`
    flex: 3;
`

export default function ProjectCard(props) {
    return (
        <Card>
            <img src={props.image} />
            <Title>{props.title}</Title>
            <span>GitHub</span>
        </Card>
    )
}
