import React from 'react'
import styled from 'styled-components'
import TerminalButton from '../Terminal/TerminalButton'
import TerminalCard from '../Terminal/TerminalCard'

const ResponsiveRow = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    &>* {
        text-align: center;
        flex: 1;

    }

`

const FooterContainer = styled.div`
    margin-top: 25px;
`

const CenteredTerminalCardComponent = styled.div`
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
            font-family: monospace;
            background: black;
            backdrop-filter: blur(10px);
            color: white;
            width: 100%;
            border-radius: 10px;
            margin: auto;
            margin-bottom: 50px;
            padding: 20px;
            user-select: none;
            justify-content: center;
            align-content: center;

            &:hover {
                color:black;
                background: white;
            }

        `

const FooterComponent = styled.div`
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: black;
    display: flex;
    z-index: 1;

    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: bold;

    & > * {
        padding: 10px;
        justify-content: center;
        text-align: center;
        flex: 1;

    }
    
    &>*:hover {
        color: rgba(0, 0, 0, .65);
        cursor: pointer;

    }
`

const FooterItem = styled.div`
    display:flex;
    color: white;

    all: unset;
    flex: 1;
    align-self: center;
    justify-content: center;
    user-select: none;
    text-align: center;
`


        
export default function Footer() {
    return (
        <FooterComponent>


                
                <FooterItem>Email</FooterItem>
                <FooterItem>GitHub</FooterItem>
                <FooterItem>Linkedin</FooterItem>

        </FooterComponent>
            
            
    )
}
