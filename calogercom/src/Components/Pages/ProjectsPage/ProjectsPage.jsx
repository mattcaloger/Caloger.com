import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'


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
    const ProjectsContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;

    &>* {
        margin-top: 10px;
        margin-bottom: 10px;
    }
`;
    return (
        <ProjectsContainer variants={ProjectContainer} initial="hidden" animate="show"> 
            <ProjectCard title="Project1" as={motion.div} variants={ProjectChild}/>
            <ProjectCard title="Project2" as={motion.div} variants={ProjectChild}/>
            <ProjectCard title="Project3" as={motion.div} variants={ProjectChild}/>
        </ProjectsContainer>
    )
}
