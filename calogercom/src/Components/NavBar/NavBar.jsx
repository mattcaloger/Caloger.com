import React from 'react'
import styled from 'styled-components'
import { Link, Router, NavLink } from "react-router-dom";
import { DROP_SHADOW } from '../Layout/LightDarkCard';
import { PRIMARY } from '../Layout/Colors';
import { SHADOWS } from '../Layout/Shadows';

const HeaderNav = styled.nav`
    background: ${PRIMARY};
    color: white;
    font-size: 20px;
    width: 100%;
    height: 75px;
    display: flex;
    z-index: 1;
    font-weight: bold;
    
   
`

const NavGroup = styled.div`
    
`

const NavItem = styled.li`
    display:flex;
    color: white;
    all: unset;
    flex: 1;
    align-self: center;
    user-select: none;
    
`

const NavItemRight = styled(NavItem)`
    text-align: right;
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
const InnerNav = styled.div`
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

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

    &>*:active {
        color: rgba(0, 0, 0, .75);
        cursor: pointer;
    }

    & > * {
        display: flex;
        flex: 1;
        align-self: center;
    }

    justify-content: flex-end;
`

const StyledNavLink = styled(NavLink)`
    &.active {
        color: rgba(0, 0, 0, .65);
    }
`


export default function NavBar() {
    return (
        <HeaderNav>
            <InnerNav>
                <StyledNavLink to="/projects">
                    <NavItem>
                        Projects
                    </NavItem>
                </StyledNavLink>
                <StyledNavLink to="/">
                    <NavItem>
                        <HighlightedLink>Matthew Caloger</HighlightedLink>
                    </NavItem>
                </StyledNavLink>
                <StyledNavLink to="/blog">
                    <NavItemRight>
                        Blog
                    </NavItemRight>
                </StyledNavLink>
            </InnerNav>
        </HeaderNav>
    )
}