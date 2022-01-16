import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import JavaIcon from '../../../img/lang-icons/Java_programming_language_logo.svg.png'
import TerminalCard from '../../Terminal/TerminalCard'

const Card = styled.div`

    display: flex;
    
    align-items: center;

    flex-direction: column;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);

    background: rgba(256,256,256,.5);
    backdrop-filter: blur(10px);
    color: black;
    width: 100%;
    border-radius: 10px;
    margin: auto;

    padding: 20px;
    user-select: none;
    transition: all .2s;

    &:hover {
        background: rgba(256,256,256,1);
        transform: scale(1.2);
        transition: all .2s;
    }
    

`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;

    align-content: center;
    justify-content: center;
`

const Title = styled.div`
    font-size: 24px;
    text-align: center;
    flex: 3;
`

const Icon = styled.img`
    width: 100px;
    height: 100px;

`

export default function ProjectCard(props) {
  
    return (
        <TerminalCard>
            {props.title}
            {props.languages}
        </TerminalCard>
    )
}
