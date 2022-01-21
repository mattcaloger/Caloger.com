import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../../img/photo.png'

const AboutImgContainer = styled.div`
    margin: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    border-radius: 100%;


    backdrop-filter: blur(10px);
`

const AboutImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 100%;
`

export default function ProfilePicture() {
    return (
        <AboutImgContainer>
                <AboutImg src={ProfilePic}></AboutImg>
            </AboutImgContainer>
    )
}
