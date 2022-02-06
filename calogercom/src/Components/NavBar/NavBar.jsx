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

    margin-top: 25px;
    margin-bottom: 25px;
    font-weight: bold;

    @media (max-width: 768px) {
        flex-direction: row;
        &>* {
            margin-top: 50px;
            margin-bottom: 50px;
        }
      }

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
    @media (max-width: 768px) {
        font-size: 22px;
    }
    font-size: 30px;
`

const ProjectLink = styled(NavItem)`
  @media (max-width: 768px) {
    order: 1
  }
`

const NameLink = styled(NavItem)`
@media (max-width: 768px) {
    order: 2
  }
`
const BlogLink = styled(NavItem)`
@media (max-width: 768px) {
    order: 3
  }
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
                    <Link to="/blog">Blog</Link>
    
                </NavItem>
                

        </HeaderNav>
    )
}
