import React from 'react'
import styled from 'styled-components'
import { Link, Router, NavLink } from "react-router-dom";
import { DROP_SHADOW } from '../Layout/LightDarkCard';
import { PRIMARY } from '../Layout/Colors';
import { ReactComponent as Logo1 } from '../../img/logo/logo1_teal.svg'

const HeaderNav = styled.nav`

    background: white;
    color: ${PRIMARY};

    font-size: 20px;
    width: 100%;
    margin: auto;
    height: 75px;
    display: flex;
    z-index: 1;
    justify-content: space-between;

    font-weight: bold;

    @media (max-width: 768px) {

        flex-direction: column;
        height: auto;
        justify-content: center;
      }
`
const StyledNavLink = styled(NavLink)`
    &.active {
        color: #962300;
    }
`

const NavGroup = styled.div`

    display: flex;
    flex-direction: row;
    height: 100%;

    &>*:hover {
        filter: grayscale(100%);
        cursor: pointer;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        &>* {
            margin: auto;
        }
        justify-content: center;
      }
`

const NavGroupLeft = styled(NavGroup)`

    & > * {
        margin-left: 18.75px;
        justify-content: center;
        text-align: center;
        align-self: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        &>* {
            margin:auto;
            justify-content: center;
            text-align: center;
            align-self: center;
        }
    }
`

const NavGroupRight = styled(NavGroup)`

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        &>* {
            margin:auto;
            justify-content: center;
            text-align: center;
            align-self: center;
        }
    }

    & > * {
        margin-right: 37.5px;
        justify-content: center;
        text-align: center;
        align-self: center;
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

const LogoContainer = styled.div`
  height: 37.5px;
  width: 37.5px;
`

export default function NavBarPotential() {
    return (
        <HeaderNav>

        <NavGroupLeft>
            <StyledNavLink to="/">
                <NavItem>
                    <HighlightedLink>Matthew Caloger</HighlightedLink>
                </NavItem>
            </StyledNavLink>
        </NavGroupLeft>
        <NavGroupRight>
             <StyledNavLink to="/projects">
                <NavItem>
                    Projects
                </NavItem>
            </StyledNavLink>
            
            <StyledNavLink to="/blog">
                <NavItem>
                    Blog
                </NavItem>
            </StyledNavLink>
        </NavGroupRight>
            
           
            
        </HeaderNav>
    )
}
