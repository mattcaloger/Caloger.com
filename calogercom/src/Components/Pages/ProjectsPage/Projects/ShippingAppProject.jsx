import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

export default function ShippingAppProject() {
    return (
        <div>
            <h1>Escargo</h1>
            <SplitContainer>

                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>Escargo is a for-fun project to learn ASP.Net, the Entity framework, and LINQ.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
