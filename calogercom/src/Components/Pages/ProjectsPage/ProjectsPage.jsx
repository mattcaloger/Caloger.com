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

const Title = styled.p`
    font-size: 24px;
`

const ProjectsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    

    &>* {
        margin-top: 25px;
        margin-bottom: 25px;

    }

`;

const Tag = styled.span`
    background: white;
    color: black;
    padding-left: 5px;
    padding-right: 5px;
    user-select: none;
    cursor: default;
`



export default function ProjectsPage() {
    
    return (
        <ProjectsContainer variants={ProjectContainer} initial="hidden" animate="show"> 
            
                <TerminalCard color="white">
                    <Title>01. Budgie</Title>
                    <p>
                        <Tag>full-stack</Tag> <Tag>data-viz</Tag>
                    </p>
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
                    <p>
                        <Tag>desktop-app</Tag> <Tag>win-forms</Tag>
                    </p>
                    <SpanRow>
                        <ColorCSharp>c-sharp</ColorCSharp>
                    </SpanRow>
                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

                        
                    <SpanRow>
                        
                        <TerminalButton>
                            <Link to="buildshet">> details</Link>
                        </TerminalButton>
                    </SpanRow>
                        

                </TerminalCard>

            

                <TerminalCard>
                    <Title>03. Graphic Designer's Portfolio</Title>
                    <p>
                        <Tag>website</Tag>
                    </p>
                    <SpanRow>
                        <ColorPhp>php</ColorPhp>
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>
                    </SpanRow>

                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

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
                    <p>
                        <Tag>full-stack</Tag> <Tag>authentication</Tag> <Tag>authorization</Tag>
                    </p>
                    <SpanRow>
                        <ColorPhp>php</ColorPhp>
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>
                    </SpanRow>

                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

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
                    <p>
                        <Tag>vanilla-js</Tag> <Tag>front-end</Tag> <Tag>framework</Tag>
                    </p>
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
                    <p>
                        <Tag>full-stack</Tag> <Tag>authentication</Tag> <Tag>authorization</Tag>
                    </p>
                    <SpanRow>
                        <ColorCSharp>c-sharp</ColorCSharp>
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>
                    </SpanRow>
                    <p>A vanilla-js front-end framework that allows you to define components and dynamically render them when certain actiosn take place. Combines a state container with the observer pattern</p>

                    <SpanRow>
                        
                            <TerminalButton>
                                <Link to="escargo">> details</Link>
                            </TerminalButton>
                        
                        <TerminalButton>
                            <a href="https://github.com/mattusoperandi/Budgie">> code</a>
                        </TerminalButton>
                    </SpanRow>
                </TerminalCard>
            
        </ProjectsContainer>
    )
}
