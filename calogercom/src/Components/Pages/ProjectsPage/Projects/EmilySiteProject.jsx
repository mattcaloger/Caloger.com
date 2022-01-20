import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

export default function EmilySiteProject() {
    return (
        <div>
            <h1>Graphic Designer Portfolio Website</h1>
            <SplitContainer>
                
                <SplitContainerPanel>
                    <img width="100" height="100" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1802/lkeskinen180208322/95731150-example-stamp-typographic-label-stamp-or-icon.jpg"/>
                </SplitContainerPanel>
                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>This website was built using PHP and designed for my wife as a centralized location to show her design portfolio. I chose PHP as a good opportunity to learn the language and sue it as a templating engine.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
