import React from 'react'
import styled from 'styled-components'
import { Link, Router } from "react-router-dom";
import { DROP_SHADOW } from '../Layout/LightDarkCard';
import { PRIMARY } from '../Layout/Colors';

const HeaderNav = styled.nav`
    background: ${PRIMARY};
    color: white;

    font-size: 20px;
    width: 100%;
    height: 75px;
    display: flex;
    z-index: 1;

    font-weight: bold;

    ${DROP_SHADOW}

    @media (max-width: 768px) {
        flex-direction: row;
        &>* {
            padding-top: 50px;
            padding-bottom: 50px;
        }
      }

    
    
    &>*:hover {
        color: rgba(0, 0, 0, .65);
        cursor: pointer;

    }

    & > * {
        justify-content: center;
        text-align: center;
        flex: 1;
        align-self: center;
    }
`

const NavGroup = styled.div`
    
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
justify-content: center;
text-align: center;
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
            <Link to="/projects">
                <NavItem>
                    Projects
                </NavItem>
            </Link>
            <Link to="/">
                <NavItem>
                    <HighlightedLink>Matthew Caloger</HighlightedLink>
                </NavItem>
            </Link>
            <Link to="/blog">
                <NavItem>
                    Blog

                </NavItem>
            </Link>
            
        </HeaderNav>
    )
}
