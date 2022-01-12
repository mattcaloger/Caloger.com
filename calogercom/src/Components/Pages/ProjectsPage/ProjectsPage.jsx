import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import { Link } from 'react-router-dom'


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
            <Link to="Budgie">
                <ProjectCard title="Budgie" as={motion.div} variants={ProjectChild}/>
            </Link>
            <Link to="Canyon">
                <ProjectCard title="Canyon" as={motion.div} variants={ProjectChild}/>
            </Link>
            <Link to="EmilySite">
                <ProjectCard title="Emily Site" as={motion.div} variants={ProjectChild}/>
            </Link>
            <Link to="Helpdesk">
                <ProjectCard title="Helpdesk" as={motion.div} variants={ProjectChild}/>
            </Link>
            <Link to="ShippingApp">
                <ProjectCard title="ShippingApp" as={motion.div} variants={ProjectChild}/>
            </Link>
            
        </ProjectsContainer>
    )
}
