import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

export default function HelpdeskProject() {
    return (
        <div>
            <h1>Helpdesk</h1>
            <SplitContainer>

                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>This project was a prototype of a PHP-based helpdesk, it includes a custom authentication and authorization system with differing logic between users and technicians to render different views and options.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
