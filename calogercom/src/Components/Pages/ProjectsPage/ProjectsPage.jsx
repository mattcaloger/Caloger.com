import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SpanRow from '../../Terminal/SpanRow'

import PageTitle from '../../Layout/PageTitle'
import Title from './Projects/Layout/Title'
import Tag from './Projects/Layout/Tag'
import PageContainer from './Projects/Layout/PageContainer'
import { CssIconBlock, HtmlIconBlock, JavaIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, SpringIconBlock, SqlIconBlock, TypeScriptIconBlock } from '../../Terminal/LanguageIcons'
import DividedContainer from './Projects/Layout/DividedContainer'
import { CardContainer, DarkFooter, LightBody, LightHeader } from '../../Layout/LightDarkCard'
import EvenSpanRow from '../../Terminal/EvenSpanRow';
import PageSubtitle from '../../Layout/PageSubtitle';

const ProjectSummary = styled.div`
    cursor: default;
    user-select: none;
`

export default function ProjectsPage() {
    
    return (
        
        <PageContainer> 
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
                        <ProjectSummary>An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the input data.</ProjectSummary>
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
                        <ProjectSummary>A completed website to show a Graphic Designer's portfolio.</ProjectSummary>
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

            <Link to="shortcake">
                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Shortcake</Title>
                            <SpanRow>
                                <Tag>API</Tag> 
                                <Tag>Back End</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <ProjectSummary>Shortcake is a simple API for shortening and sharing URLs.</ProjectSummary>
                    </LightBody>
                    <DarkFooter>
                            <EvenSpanRow>
                                <JavaScriptIconBlock />
                                <NodeIconBlock />
                                <SqlIconBlock />
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
                            <ProjectSummary>A PHP-based helpdesk prototype.</ProjectSummary>
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

                <Link to="instantchat">
                    <CardContainer>
                        <LightHeader>
                            <DividedContainer>
                                    <Title>Instant Chat</Title>
                                <SpanRow>
                                    <Tag>Front End</Tag> 
                                    <Tag>Full Stack</Tag>
                                    <Tag>Web Sockets</Tag>
                                </SpanRow>
                            </DividedContainer>
                        </LightHeader>
                        <LightBody>
                            <ProjectSummary>A real-time chat application.</ProjectSummary>
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
                        <ProjectSummary>A VanillaJS front-end framework that allows you to define components and dynamically render them when certain actions take place. Combines a state container with the observer pattern</ProjectSummary>
                    </LightBody>
                    <DarkFooter>

                            <EvenSpanRow>
                                <JavaScriptIconBlock />
                            </EvenSpanRow>

                    </DarkFooter>
                </CardContainer>            
                </Link>

                {/* <Link to="Escargo">
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
                                    <DotnetIconBlock />
                                </EvenSpanRow>

                        </DarkFooter>
                    </CardContainer>    
                </Link>  */}
        </PageContainer>
    )
}
