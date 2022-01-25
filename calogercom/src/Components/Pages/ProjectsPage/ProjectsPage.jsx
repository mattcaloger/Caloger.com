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
import { CSharpIconBlock, CssIconBlock, HtmlIconBlock, JavaIconBlock, JavaScriptIconBlock, PhpIconBlock, ReactIconBlock, SpringIconBlock } from '../../Terminal/LanguageIcons'
import DividedContainer from './Projects/Layout/DividedContainer'
import { CardContainer, DarkFooter, LightBody, LightHeader, DarkBody, LightFooter } from '../../Layout/LightDarkCard'

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
                        <DividedContainer>
                            <SpanRow>
                            <ReactIconBlock />
                            <JavaIconBlock />
                            <SpringIconBlock/>
                        </SpanRow>
                        <SpanRow>
                            
                            <TerminalButton>
                                <Link to="Budgie">Details</Link>
                            </TerminalButton>
                            
                            <TerminalButton>
                                <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                            </TerminalButton>
                        </SpanRow>
                        </DividedContainer>
                    </DarkFooter>
                </CardContainer>


                <TerminalCard>
                    <DividedContainer>
                        <Title>Budgie</Title>
                    <SpanRow>
                        <Tag>Full Stack</Tag> 
                        <Tag>Data Visualization</Tag>
                    </SpanRow>
                </DividedContainer>
                    

                    
                    
                    <p>An expense tracker with data visualization and the ability to add/remove expenses and incomes while displaying graphs based on the input data.</p>

                    <DividedContainer>
                        <SpanRow>
                        <ReactIconBlock />
                        <JavaIconBlock />
                        <SpringIconBlock/>
                    </SpanRow>
                    <SpanRow>
                        
                        <TerminalButton>
                            <Link to="Budgie">Details</Link>
                        </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                    </DividedContainer>
                    
                        
                    
                </TerminalCard>

                <TerminalCard>
                    <Title>02. Graphic Designer's Portfolio</Title>
                    <SpanRow>
                        <Tag>Website</Tag>
                    </SpanRow>
                    <SpanRow>
                        <PhpIconBlock />
                        <HtmlIconBlock />
                        <CssIconBlock />
                    </SpanRow>

                    <p>A completed website to show a Graphic Designer's portfolio.</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="emilysite">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>

                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Graphic Designer's portfolio</Title>
                            <SpanRow>
                                <Tag>Website</Tag> 
                                <Tag>Full Stack</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <p>A completed website to show a Graphic Designer's portfolio.</p>
                    </LightBody>
                    <DarkFooter>
                        <DividedContainer>
                            <SpanRow>
                                <PhpIconBlock />
                                <HtmlIconBlock />
                                <CssIconBlock />
                            </SpanRow>
                        <SpanRow>
                        
                            <TerminalButton>
                                <Link to="emilysite">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                        </DividedContainer>
                    </DarkFooter>
                </CardContainer>

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
                        <DividedContainer>
                            <SpanRow>
                                <PhpIconBlock />
                                <HtmlIconBlock />
                                <CssIconBlock />
                            </SpanRow>
                        <SpanRow>
                        
                            <TerminalButton>
                                <Link to="helpdesk">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                        </DividedContainer>
                    </DarkFooter>
                </CardContainer>

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
                        <DividedContainer>
                            <SpanRow>
                                <JavaScriptIconBlock />
                            </SpanRow>
                        <SpanRow>
                        
                            <TerminalButton>
                                <Link to="canyon">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                        </DividedContainer>
                    </DarkFooter>
                </CardContainer>

                <TerminalCard>
                    <Title>04. Canyon</Title>
                    <SpanRow>
                        <Tag>Vanilla JavaScript</Tag> <Tag>Front End</Tag> <Tag>Framework</Tag>
                    </SpanRow>
                    <SpanRow>
                        <JavaScriptIconBlock />
                    </SpanRow>
                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="canyon">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>

                <CardContainer>
                    <LightHeader>
                        <DividedContainer>
                                <Title>Escargo</Title>
                            <SpanRow>
                            <Tag>Vanilla JavaScript</Tag> <Tag>Front End</Tag> <Tag>Framework</Tag>
                            </SpanRow>
                        </DividedContainer>
                    </LightHeader>
                    <LightBody>
                        <p>Escargo is a for-fun project to learn ASP.Net, the Entity framework, and LINQ.</p>
                    </LightBody>
                    <DarkFooter>
                        <DividedContainer>
                            <SpanRow>
                            <CSharpIconBlock />
                            <HtmlIconBlock />
                            <CssIconBlock />
                            </SpanRow>
                        <SpanRow>
                        
                            <TerminalButton>
                                <Link to="canyon">Details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                        </TerminalButton>
                    </SpanRow>
                        </DividedContainer>
                    </DarkFooter>
                </CardContainer>
 
            <TerminalCard>
                <Title>05. Escargo</Title>
                <SpanRow>
                    <Tag>Full Stack</Tag> <Tag>Authentication</Tag> <Tag>Authorization</Tag>
                </SpanRow>
                <SpanRow>
                    <CSharpIconBlock />
                    <HtmlIconBlock />
                    <CssIconBlock />

                </SpanRow>
                <p>Escargo is a for-fun project to learn ASP.Net, the Entity framework, and LINQ.</p>

                <SpanRow>
                    
                        <TerminalButton>
                            <Link to="escargo">Details</Link>
                        </TerminalButton>
                    
                    <TerminalButton>
                        <a href="https://github.com/mattusoperandi/Budgie">Code</a>
                    </TerminalButton>
                </SpanRow>
            </TerminalCard>
            
        </PageContainer>
    )
}
