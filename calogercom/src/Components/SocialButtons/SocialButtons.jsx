import React from 'react'
import styled from 'styled-components'

import GitHubIcon from '../../img/github.svg';
import LinkedInIcon from '../../img/icons/linkedin.svg';
import EmailIcon from '../../img/icons/email.svg';
import { DROP_SHADOW, DROP_SHADOW_HOVER } from '../Layout/LightDarkCard';

const SocialButtonContainer = styled.div`
    display: inline;
    position: fixed;
    bottom: 4%;
    right: 7%;

    @media only screen and (max-width: 1080px) {
        display: flex;
        position: fixed;
        width: 100%;
        bottom: 0;
        right: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: white;
        &>* {
            flex: 1;
        }

        padding-top: 25px;
        padding-bottom: 25px;
    }

`



const ImgContainer = styled.img`
    width: 24px;
    height: 24px;

    

    
`

const SocialButton = styled.div`
    @media only screen and (min-width: 1080px) {
        background: white;
        padding: 20px;
        ${DROP_SHADOW}
        &:hover {
            ${DROP_SHADOW_HOVER}
            cursor: pointer;
        }

        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    display: flex;
    justify-content: center;
        align-items: center;
`

export default function SocialButtons() {
  return (
    <SocialButtonContainer>

        <a href="mailto:mattcaloger@gmail.com" target="_blank" rel="noreferrer">
            <SocialButton>
                <ImgContainer src={EmailIcon} />
            </SocialButton>
        </a>

        <a href="https://www.linkedin.com/in/matthew-caloger/" target="_blank" rel="noreferrer">
            <SocialButton>
                <ImgContainer src={LinkedInIcon} />
            </SocialButton>
        </a>

        <a href="https://github.com/MCaloger" target="_blank" rel="noreferrer">
                <SocialButton>
                    <ImgContainer src={GitHubIcon} />
                </SocialButton>
        </a>
        
    </SocialButtonContainer>
  )
}
