import React from 'react'
import styled from 'styled-components'
import { Link, Router } from "react-router-dom";

const HeaderNav = styled.nav`
    font-size: 20px;
    width: 100%;
    height: 50px;
    color: black;
    display: flex;
    z-index: 1;
    padding-top: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    transition: all .2s;

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

const NavItem = styled.li`
    display:flex;
    color: white;

    all: unset;
    flex: 1;
    align-self: center;
    justify-content: center;
    user-select: none;
    text-align: center;
`
const HighlightedLink = styled.div`
    font-size: 30px;
`


export default function NavBar() {
    return (
        <HeaderNav>
            
            <NavItem>
                    <Link to="/projects">Projects</Link>
    
                </NavItem>

                <NavItem>
                    <Link to="/"><HighlightedLink>Matthew Caloger</HighlightedLink></Link>
                    
                </NavItem>
                
                <NavItem>
                    <Link to="/contact">Contact</Link>
    
                </NavItem>
                

        </HeaderNav>
    )
}
