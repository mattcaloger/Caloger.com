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


const BlurbCard = styled.div`
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
    background: rgba(256,256,256,.5);
    backdrop-filter: blur(10px);
    color: black;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 50px;
    padding: 20px;
    user-select: none;
`



export default function AboutBlurb() {
    return (
        <AboutBlock>
            
            
            <BlurbCard>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quisquam sed recusandae quo, quam impedit sapiente? Amet enim reprehenderit vitae eaque placeat repellat fugiat. Expedita numquam quis officia quos? Blanditiis.
            </BlurbCard>
            
        </AboutBlock>

    )
}
