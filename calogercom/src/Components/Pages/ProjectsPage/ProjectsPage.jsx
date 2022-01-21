import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'

import CanyonImage from '../../../img/canyon.png'
import EscargoImage from '../../../img/escargo.jpg'
import { ColorCSharp, ColorCss, ColorHtml, ColorJava, ColorJs, ColorPhp, ColorReactJs, ColorSpring } from '../../Terminal/Languages'
import TerminalCard from '../../Terminal/TerminalCard'
import SpanRow from '../../Terminal/SpanRow'
import TerminalButton from '../../Terminal/TerminalButton'
import PageTitle from '../../Layout/PageTitle'
import Title from './Projects/Layout/Title'
import Tag from './Projects/Layout/Tag'
import PageContainer from './Projects/Layout/PageContainer'

const ProjectChild = {
    hidden: { opacity: 0 },
    show: { opacity: 1},
  }

const ProjectContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: .4
        }
    }
}


export default function ProjectsPage() {
    
    return (
        
        <PageContainer variants={ProjectContainer} initial="hidden" animate="show"> 
                <PageTitle>Projects</PageTitle>
                <TerminalCard>
                    <Title>01. Budgie</Title>
                    <SpanRow>
                        <Tag>full-stack</Tag> 
                        <Tag>data-viz</Tag>
                    </SpanRow>

                    <SpanRow>
                        <ColorReactJs>react-js</ColorReactJs>
                        <ColorJava>java</ColorJava>
                        <ColorSpring>spring</ColorSpring>
                    </SpanRow>
                    
                    <p>An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the ipput data.</p>

                    <SpanRow>
                        
                        <TerminalButton>
                            <Link to="Budgie">> details</Link>
                        </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                        </TerminalButton>
                    </SpanRow>
                        
                    
                </TerminalCard>
            

                <TerminalCard>
                    <Title>02. Buildsheet Editor</Title>
                    <SpanRow>
                        <Tag>desktop-app</Tag> <Tag>win-forms</Tag>
                    </SpanRow>
                    <SpanRow>
                        <ColorCSharp>c-sharp</ColorCSharp>
                    </SpanRow>
                    <p>A desktop application used to define the deployment of hardware and software in a medical IT environment.</p>

                        
                    <SpanRow>
                        
                        <TerminalButton>
                            <Link to="buildshet">> details</Link>
                        </TerminalButton>
                    </SpanRow>
                        

                </TerminalCard>

            

                <TerminalCard>
                    <Title>03. Graphic Designer's Portfolio</Title>
                    <SpanRow>
                        <Tag>website</Tag>
                    </SpanRow>
                    <SpanRow>
                        <ColorPhp>php</ColorPhp>
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>
                    </SpanRow>

                    <p>A completed website to show a Graphic Designer's portfolio.</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="emilysite">> details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>


                <TerminalCard>
                    <Title>04. Helpdesk</Title>
                    <SpanRow>
                        <Tag>full-stack</Tag> <Tag>authentication</Tag> <Tag>authorization</Tag>
                    </SpanRow>
                    <SpanRow>
                        <ColorPhp>php</ColorPhp>
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>
                    </SpanRow>

                    <p>A PHP-based helpdesk.</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="helpdesk">> details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>

                <TerminalCard>
                    <Title>05. Canyon</Title>
                    <SpanRow>
                        <Tag>vanilla-js</Tag> <Tag>front-end</Tag> <Tag>framework</Tag>
                    </SpanRow>
                    <SpanRow>
                        <ColorJs>javascript</ColorJs>
                    </SpanRow>
                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="canyon">> details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>
 
            <TerminalCard>
                <Title>06. Escargo</Title>
                <SpanRow>
                    <Tag>full-stack</Tag> <Tag>authentication</Tag> <Tag>authorization</Tag>
                </SpanRow>
                <SpanRow>
                    <ColorCSharp>c-sharp</ColorCSharp>
                    <ColorHtml>html</ColorHtml>
                    <ColorCss>css</ColorCss>
                </SpanRow>
                <p>Escargo is a for-fun project to learn ASP.Net, the Entity framework, and LINQ.</p>

                <SpanRow>
                    
                        <TerminalButton>
                            <Link to="escargo">> details</Link>
                        </TerminalButton>
                    
                    <TerminalButton>
                        <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                    </TerminalButton>
                </SpanRow>
            </TerminalCard>
            
        </PageContainer>
    )
}
