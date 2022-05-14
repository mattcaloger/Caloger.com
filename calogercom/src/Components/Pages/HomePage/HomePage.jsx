import React from 'react'
import AboutBlurb from '../../AboutBlurb/AboutBlurb'
import ProfilePicture from '../../ProfilePicture/ProfilePicture'
import Terminal from '../../Terminal/Terminal'
import styled from 'styled-components'
import PageTitle from '../../Layout/PageTitle'

import { HashRouter } from 'react-router-dom'

import * as LanguageIcons from '../../Terminal/LanguageIcons'
import * as LanguageColors from '../../Terminal/Languages'
import IconImage from '../../Layout/IconImage'

import { IconGrid } from '../../Layout/IconGrid'

import { Link } from 'react-router-dom'
import Title from '../../Layout/Title'

import PageSubtitle from '../../Layout/PageSubtitle'

import PageContainer from '../../Layout/PageContainer'

import ProjectList from '../ProjectsPage/ProjectList'

import BlogList from '../../Blog/BlogList'
import Content from '../../Layout/Content'
import ToggleIcon from '../../Layout/ToggleIcon'
import ResponsiveIconImage from '../../Layout/Redesign/ResponsiveIconImage'
import * as LanguageData from '../../Layout/Redesign/LanguageData'


const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;

    
`

const CenteredPragraph = styled.p`
text-align: center;`

const PageSection = styled.section`
    padding-top: 1.5em;
    padding-bottom: 1.5em;

    &:nth-child(even) {
        background: #F3F3F3;
     };
`

export default function HomePage() {

    const LanguageList = () => LanguageData.LanguageList.map((language, index) => {
        return <ToggleIcon key={index} default={LanguageData.LanguageList[index].IconComponentResponsive} hover={LanguageData.LanguageList[index].Text}></ToggleIcon>
    })

    return (
        <HomePageContainer>
            <PageSection>
                <Content>
                    <PageTitle id="#about">About</PageTitle>
                    <AboutBlurb />
                </Content>    
            </PageSection>
            
            <PageSection>
                <Content>

                     <PageTitle id="#skills">Skills</PageTitle>

                    <IconGrid>
                        
                        {LanguageList()}

                    </IconGrid>

   
                </Content>
            </PageSection>

            {/* Projects */}

            <PageSection>
                <Content>
                    <PageTitle id="#projects">Projects</PageTitle>
                    <PageSubtitle>Select a project to view details</PageSubtitle>
                    <PageContainer> 
                        <ProjectList />
                    </PageContainer>
                </Content>
            </PageSection>

            {/* Blog */}

            <PageSection>
                <Content>
                    <PageTitle id="#blog">Blog</PageTitle>
                    <PageSubtitle>Select a blog to view details</PageSubtitle>
                    <PageContainer>
                        <BlogList />
                    </PageContainer>
                </Content>
            </PageSection>
        </HomePageContainer>
    )
}
