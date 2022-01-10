import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'


const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1},
  }

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
                delayChildren: 3,
                staggerChildren: 3
            }
        }
}

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;

    &>* {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`

export default function ProjectsPage() {
    return (
        <ProjectsContainer as={motion.div} variants={container} initial="hidden" animate="show">
            <ProjectCard as={motion.div} variants={variants} title="Project1" />
            <ProjectCard as={motion.div} variants={variants} title="Project2" />
            <ProjectCard as={motion.div} variants={variants} title="Project3" />
        </ProjectsContainer>
    )
}
