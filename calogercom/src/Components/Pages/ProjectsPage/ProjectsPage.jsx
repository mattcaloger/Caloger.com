import React from 'react'

import PageTitle from '../../Layout/PageTitle'
import PageSubtitle from '../../Layout/PageSubtitle';
import ProjectList from './ProjectList'
import PageContainer from '../../Layout/PageContainer';

export default function ProjectsPage() {
    
    return (
        <>
            <PageSubtitle>Select a project to view details</PageSubtitle>
            <PageContainer> 
                    

                <ProjectList />

            </PageContainer>
        </>
    )
}
