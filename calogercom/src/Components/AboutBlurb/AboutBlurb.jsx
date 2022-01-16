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
    background: rgba(0,0,0,1);
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quisquam sed recusandae quo, quam impedit sapiente? Amet enim reprehenderit vitae eaque placeat repellat fugiat. Expedita numquam quis officia quos? Blanditiis.
                </p>
                
            </BlurbCard>
            
        </AboutBlock>

    )
}
