import React from 'react'
import styled from 'styled-components'
import { Link, Router } from "react-router-dom";

const HeaderNav = styled.nav`
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    z-index: 1;
    padding-top: 10px;
    margin-bottom: 35px;

    & > * {
        padding: 10px;
        justify-content: center;
        text-align: center;
        flex: 1;
    }
    
    &>*:hover {
        color: black;
        cursor: pointer;
    }
`

const NavItem = styled.li`
    all: unset;
    flex: 1;
    align-self: center;
    text-align: center;
`

export default function NavBar() {
    return (
        <HeaderNav>
                <NavItem>
                    <Link to="/">Matthew Caloger</Link>
                    
                </NavItem>
                <NavItem>
                    <Link to="/projects">Projects</Link>
    
                </NavItem>
                <NavItem>
                    Blog
                </NavItem>
        </HeaderNav>
    )
}
