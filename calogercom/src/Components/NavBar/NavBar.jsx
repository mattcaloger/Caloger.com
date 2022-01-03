import React from 'react'
import styled from 'styled-components'

const Bar = styled.nav`
    display: flex;
    background: white;
    padding: 10px;
    height: 50px;
    
`

const NavItem = styled.li`
    all: unset;
    flex: 1;
    align-self: center;
    text-align: center;
`

export default function NavBar() {
    return (
        <Bar>
            <NavItem>
                Matthew Caloger
            </NavItem>
            <NavItem>
                Projects
            </NavItem>
            <NavItem>
                Blog
            </NavItem>
        </Bar>
    )
}
