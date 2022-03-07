import React from 'react'

import PageTitle from '../../Layout/PageTitle'
import PageContainer from './Projects/Layout/PageContainer'
import PageSubtitle from '../../Layout/PageSubtitle';
import ProjectList from './ProjectList'

export default function ProjectsPage() {
    
    return (
        
        <PageContainer> 
                <PageTitle>Projects</PageTitle>
                <PageSubtitle>Select a project to view details</PageSubtitle>

            <ProjectList />

        </PageContainer>
    )
}
