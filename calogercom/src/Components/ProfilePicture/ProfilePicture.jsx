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
    background: transparent;
    border-radius: 100%;
`

const AboutImg = styled.img`
    width: 48px;
    height: auto;
    border-radius: 100%;
`

export default function ProfilePicture() {
    return (

                <AboutImg src={ProfilePic}></AboutImg>
    )
}
