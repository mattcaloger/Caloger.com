import React from 'react'
import styled from 'styled-components'
import { Link, Router, NavLink } from "react-router-dom";
import { DROP_SHADOW } from '../Layout/LightDarkCard';
import { PRIMARY } from '../Layout/Colors';
import { SHADOWS } from '../Layout/Shadows';

const HeaderNav = styled.nav`

background: ${PRIMARY};
width: 100%;

    
   
`

const NavGroup = styled.div`
    
`

const NavItem = styled.div`
    display:flex;
    color: white;
    all: unset;
    flex: 1;
    align-self: center;
    user-select: none;
    
    
    &:hover {
        color: rgba(0, 0, 0, .65);
        cursor: pointer;
    }

    &:active {
        color: rgba(0, 0, 0, .75);
        cursor: pointer;
    }

`

const NavItemRight = styled(NavItem)`
    
`
const HighlightedLink = styled.div`
justify-content: center;
text-align: center;
    @media (max-width: 768px) {
        font-size: 22px;
    }
    font-size: 30px;
`

const ProjectLink = styled.div`
  @media (max-width: 768px) {
    order: 2
  }
`

const NameLink = styled.div`
@media (max-width: 768px) {
    order: 1
  }
`
const BlogLink = styled.div`
@media (max-width: 768px) {
    order: 3
  }
  display: flex;
  justify-content: flex-end;
`
const InnerNav = styled.div`
background: ${PRIMARY};
    color: white;
    font-size: 20px;
    width: 100%;

    display: flex;
    z-index: 1;
    font-weight: bold;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &>* {
        padding-top: 25px;
        padding-bottom: 25px;
    }

    @media (max-width: 768px) {
        flex-direction: row;
        &>* {
            padding-top: 25px;
            padding-bottom: 25px;
        }
    }

    & > * {
        display: flex;
        flex: 1;
        align-self: center;
    }

    justify-content: flex-end;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        &>* {
            flex: 1;
        }
        
    }
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
                <ProjectLink>
                    <StyledNavLink to="/projects">
                    <NavItem>
                        Projects
                    </NavItem>
                </StyledNavLink>
                </ProjectLink>
                
                <NameLink>
                    <StyledNavLink to="/">
                    <NavItem>
                        <HighlightedLink>Matthew Caloger</HighlightedLink>
                    </NavItem>
                </StyledNavLink>
                </NameLink>
                
                <BlogLink>
                    <StyledNavLink to="/blog">
                    <NavItemRight>
                        Blog
                    </NavItemRight>
                </StyledNavLink>
                </BlogLink>
                
            </InnerNav>
        </HeaderNav>
    )
}