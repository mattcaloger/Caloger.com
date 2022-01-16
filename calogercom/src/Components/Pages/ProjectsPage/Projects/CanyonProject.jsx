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
                    <img width="100" height="100" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1802/lkeskinen180208322/95731150-example-stamp-typographic-label-stamp-or-icon.jpg"/>
                </SplitContainerPanel>
                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>Canyon was created as a fun proof-of-concept of making a React/Angular/Vue-like framework with Vanilla JavaScript. The central concept is to use a singleton to manage the state and components of the application, and watch the state to modify the HTML using the observer pattern when needed.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
