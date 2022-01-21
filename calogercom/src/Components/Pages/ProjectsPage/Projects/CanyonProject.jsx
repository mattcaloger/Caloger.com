import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

export default function CanyonpProject() {
    return (
        <div>
            <h1>Canyon</h1>
            <SplitContainer>

                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>Canyon was created as a fun proof-of-concept of making a React/Angular/Vue-like framework with Vanilla JavaScript. The central concept is to use a singleton to manage the state and components of the application, and watch the state to modify the HTML using the observer pattern when needed.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
