import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'
import ProjectDetails from '../../../Layout/ProjectDetails'
import Content from '../../../Layout/Content'

export default function ShippingAppProject() {
    return (
        <Content>
            <h1>Escargo</h1>
            <SplitContainer>

                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>Escargo is a for-fun C# project to learn ASP.Net, the Entity framework, and LINQ.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </Content>
    )
}
