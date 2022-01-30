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
import { CSharpIconBlock, CssIconBlock, HtmlIconBlock, JavaIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, SpringIconBlock, TypeScriptIconBlock } from '../../Terminal/LanguageIcons'
import DividedContainer from './Projects/Layout/DividedContainer'
import { CardContainer, DarkFooter, LightBody, LightHeader, DarkBody, LightFooter } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';
import PageSubtitle from '../../Layout/PageSubtitle'

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
            staggerChildren: 1
        }
    }
}


export default function ProjectsPage() {
    
    return (
        
        <PageContainer variants={ProjectContainer} initial="hidden" animate="show"> 
                <PageTitle>Projects</PageTitle>
                <PageSubtitle>Select a project to view details</PageSubtitle>

            <Link to="Budgie">
                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Budgie</Title>
                            <SpanRow>
                                <Tag>Full Stack</Tag> 
                                <Tag>Data Visualization</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <p>An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the input data.</p>
                    </LightBody>
                    <DarkFooter>
                        <EvenSpanRow>
                            <ReactIconBlock />
                            <JavaIconBlock />
                            <SpringIconBlock/>
                        </EvenSpanRow>
                    </DarkFooter>
                </CardContainer>
            </Link>

            <Link to="emilysite">
                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Graphic Designer's Portfolio</Title>
                            <SpanRow>
                                <Tag>Website</Tag> 
                                <Tag>Front End</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <p>A completed website to show a Graphic Designer's portfolio.</p>
                    </LightBody>
                    <DarkFooter>
                            <EvenSpanRow>
                                <PhpIconBlock />
                                <HtmlIconBlock />
                                <CssIconBlock />
                            </EvenSpanRow>
                    </DarkFooter>
                </CardContainer>
            </Link>

            <Link to="helpdesk">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>University Helpdesk</Title>
                                <SpanRow>
                                    <Tag>Website</Tag> 
                                    <Tag>Full Stack</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightBody>
                            <p>A PHP-based helpdesk prototype.</p>
                        </LightBody>
                        <DarkFooter>
                                <EvenSpanRow>
                                    <PhpIconBlock />
                                    <HtmlIconBlock />
                                    <CssIconBlock />
                                </EvenSpanRow>
                                    

                        </DarkFooter>
                    </CardContainer>
                </Link>

                <Link to="reactchat">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>React Chat</Title>
                                <SpanRow>
                                    <Tag>Front End</Tag> 
                                    <Tag>Full Stack</Tag>
                                    <Tag>Web Sockets</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightBody>
                            <p>A real-time chat application.</p>
                        </LightBody>
                        <DarkFooter>
                                <EvenSpanRow>
                                    <TypeScriptIconBlock />
                                    <ReactIconBlock />
                                    <NodeIconBlock />
                                </EvenSpanRow>
                        </DarkFooter>
                    </CardContainer>
                </Link>

                <Link to="Canyon">

                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Canyon</Title>
                            <SpanRow>
                            <Tag>Vanilla JavaScript</Tag> <Tag>Front End</Tag> <Tag>Framework</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <p>A VanillaJS front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>
                    </LightBody>
                    <DarkFooter>

                            <EvenSpanRow>
                                <JavaScriptIconBlock />
                            </EvenSpanRow>

                    </DarkFooter>
                </CardContainer>            
                </Link>

                <Link to="Escargo">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>Escargo</Title>
                                <SpanRow>
                                <Tag>MVC</Tag> <Tag>Full Stack</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightBody>
                            <p>Escargo is a for-fun project to learn ASP.Net, the Entity framework, and LINQ.</p>
                        </LightBody>
                        <DarkFooter>

                                <EvenSpanRow>
                                    <CSharpIconBlock />
                                    <HtmlIconBlock />
                                    <CssIconBlock />
                                </EvenSpanRow>

                        </DarkFooter>
                    </CardContainer>    
                </Link> 
        </PageContainer>
    )
}
