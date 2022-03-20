import React from 'react';
import styled from 'styled-components';
import GithubIconImg from '../../img/github.svg'
import { BORDER_RADIUS } from './BorderRadius';
import { DROP_SHADOW, DROP_SHADOW_HOVER, LIGHT_COLOUR } from './LightDarkCard';

const GitHubIcon = styled.img`
    width: 25px;
    height: 25px;
`

const GitHubIconContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: row ;
    justify-content: center;
    align-items: center;
    background: ${LIGHT_COLOUR};
    border-radius: 25px;
    padding: 25px;
    width: 50%;

    &>* {
        margin-left: 10px;
        margin-right: 10px;
    }

    transition: all ease-in .1s;
    
    ${DROP_SHADOW}

    border-radius: ${BORDER_RADIUS};
    
    &:hover {
        ${DROP_SHADOW_HOVER}
    }
`
const CenteredText = styled.div`text-align: center;`

export default function ViewCodeButton(props) {
  return (
      <a href={props.url}>

              <GitHubIconContainer>
        <GitHubIcon src={GithubIconImg} />
        <CenteredText href={props.url}>View Code</CenteredText>
        </GitHubIconContainer>

        
    </a>
  );
}
