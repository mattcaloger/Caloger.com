import React from 'react'
import styled from 'styled-components'

const AboutImgContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 100%;
    padding: 10px;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
    font-family: monospace;
    background: rgba(256,256,256,.75);
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
                <AboutImg src="https://www.pngitem.com/pimgs/m/41-414389_account-avatar-face-head-person-profile-user-person.png"></AboutImg>
            </AboutImgContainer>
    )
}
