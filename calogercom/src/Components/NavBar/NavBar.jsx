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
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;

    & > * {
        padding: 10px;
        justify-content: center;
        text-align: center;
        flex: 1;
        transition: all .2s;
    }
    
    &>*:hover {
        color: black;
        cursor: pointer;
        transition: all .2s;
    }
`

const NavItem = styled.li`
    display:flex;
    color: white;
    transition: all .2s;
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
