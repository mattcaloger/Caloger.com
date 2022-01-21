import React from 'react'
import styled from 'styled-components'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>* {
        margin-bottom: 25px;
    }
`


const BlurbCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
    background: rgba(0,0,0,.90);
    backdrop-filter: blur(10px);
    color: white;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    padding: 20px;
    user-select: none;

    &>* {
        flex: 1;
    }
`



export default function AboutBlurb() {
    return (
        <AboutBlock>
            
            <BlurbCard>
                <ProfilePicture />

                <p>
                    With over 5 years of experience in the IT industry, my goal is to become a software engineer to apply my passion for programming and system design. I greatly enjoy problem-solving and engineering solutions that help others succeed.
                </p>

                
                
            </BlurbCard>
            
        </AboutBlock>

    )
}
