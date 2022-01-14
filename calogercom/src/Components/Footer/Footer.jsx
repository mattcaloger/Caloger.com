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

export default function Footer() {
    return (
        <TerminalCard>
            <ResponsiveRow>
                <div>
                    <TerminalButton>> email</TerminalButton>
                </div>
                <div>
                    <TerminalButton>> github</TerminalButton>
                </div>

                <div>
                    <TerminalButton>> linkedin</TerminalButton>
                </div>
                
                
                
            </ResponsiveRow>
            
        </TerminalCard>
    )
}
