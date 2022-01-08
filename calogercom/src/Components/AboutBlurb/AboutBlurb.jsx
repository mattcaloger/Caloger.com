import React from 'react'
import styled from 'styled-components'

const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: center;
    align-items: center;

    &>* {
        margin-bottom: 25px;
    }
`

const AboutImgContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 100%;
    padding: 10px;
`

const AboutImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 100%;
`




export default function AboutBlurb() {
    return (
        <AboutBlock>
            <AboutImgContainer>
                <AboutImg src="https://www.pngitem.com/pimgs/m/41-414389_account-avatar-face-head-person-profile-user-person.png"></AboutImg>
            </AboutImgContainer>
            
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quisquam sed recusandae quo, quam impedit sapiente? Amet enim reprehenderit vitae eaque placeat repellat fugiat. Expedita numquam quis officia quos? Blanditiis.
            </div>
            
        </AboutBlock>

    )
}
