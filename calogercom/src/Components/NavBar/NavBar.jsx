import React from 'react'
import styled from 'styled-components'
import { Link, Router, NavLink, useLocation } from "react-router-dom";
import { DROP_SHADOW } from '../Layout/LightDarkCard';
import { PRIMARY } from '../Layout/Colors';
import { SHADOWS } from '../Layout/Shadows';
import Footer from '../Footer/Footer';
import ProfilePicture from '../ProfilePicture/ProfilePicture';



const HeaderNav = styled.nav`
border-top: 10px solid ${PRIMARY};
    width: 100%;
    position: sticky;
    top: 0;
    background: white;
    ${DROP_SHADOW}

`

const NavGroup = styled.div`
    
`

const NavItem = styled.div`
    display:flex;
    flex: 1;
    align-self: center;
    user-select: none;
    flex-direction: row;
    
    
    &>:hover {
        cursor: pointer;
        color: grey;
    }

    &:active {
        color: rgba(0, 0, 0, .75);
        cursor: pointer;
    }

    &>* {
        margin-right: 15px;
        margin-left: 15px;
    }

`

const NavItemRight = styled(NavItem)`
display: flex;
justify-content: flex-end;
&>* {
    
}
`
const HighlightedLink = styled.div`

align-self: center;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 22px;
    }
    font-size: 24px;
`

const ProjectLink = styled.div`
justify-content: center;
  @media (max-width: 768px) {
    order: 2
  }
`

const NameLink = styled.div`
justify-content: left;
@media (max-width: 768px) {
    order: 1
  }
`
const BlogLink = styled.div`
@media (max-width: 768px) {
    order: 3
  }
  
`
const InnerNav = styled.div`

    background: white;
    // color: ${PRIMARY};
    font-size: 16px;
    width: 66%;

    display: flex;
    z-index: 1;
    font-weight: bold;

    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    &>* {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    & > * {
        display: flex;
        flex: 1;
        align-self: center;
    }

    justify-content: flex-end;

    @media (max-width: 1080px) {
        flex-direction: column;
        justify-content: center;
        &>* {
            padding-top: 10px;
            padding-bottom: 10px;
        }
        &>* {
            flex: 1;
        }
        
    }
`

const StyledNavLink = styled(NavLink)`
    &.active {
        color: black;
    }
`


export default function NavBar() {

    const location = useLocation();

    return (
        <HeaderNav>
            <InnerNav>
                <NameLink>
                    <StyledNavLink to="/">
                    <NavItem>
                        <ProfilePicture />
                        <HighlightedLink>Matthew Caloger</HighlightedLink>
                    </NavItem>
                </StyledNavLink>
                </NameLink>
                <BlogLink>
                    <NavItemRight>
                    {location.pathname == "/" ?
                    <>
                    <StyledNavLink to={{hash: "#about"}}>
                            <NavItem>About</NavItem>
                        </StyledNavLink>
                        <StyledNavLink to={{hash: "#skills"}}>
                            <NavItem>Skills</NavItem>
                        </StyledNavLink>
                        <StyledNavLink to={{hash: "#projects"}}>
                            <NavItem>Projects</NavItem>
                        </StyledNavLink>
                        <StyledNavLink to={{hash: "#blog"}}>
                            <NavItem>Blog</NavItem>
                        </StyledNavLink>
                    </>
                    :
                        <StyledNavLink to="/">
                            <NavItem>Back</NavItem>
                        </StyledNavLink>
                    }
                    </NavItemRight> 
                </BlogLink>
                
            </InnerNav>
        </HeaderNav>
    )
}