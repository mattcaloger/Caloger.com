import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

export default function ReactChatProject() {
    return (
        <div>
            <h1>Chat</h1>
            <SplitContainer>

                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>This project was created to gain an understanding of websockets and real-time communication.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
