import React from 'react'
import styled from 'styled-components'

const AboutImgContainer = styled.div`
    margin: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;

    border-radius: 100%;
    padding: 10px;

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
