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

export default function Footer() {
    return (
        <FooterContainer>
            <ResponsiveRow>
                <div>
                    <CenteredTerminalCardComponent>email</CenteredTerminalCardComponent>
                </div>
                <div>
                    
                </div>
                <div>
                    <CenteredTerminalCardComponent>github</CenteredTerminalCardComponent>
                </div>
                <div>

                </div>
                <div>
                    <CenteredTerminalCardComponent>linkedin</CenteredTerminalCardComponent>
                </div>
                
                
                
            </ResponsiveRow>
        </FooterContainer>
            
            
    )
}
