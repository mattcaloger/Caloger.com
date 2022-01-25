import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'
import BlogImage from './Layout/BlogImage'

import Ekmccourtimage from '../../../../img/blog-img/ekmccourt.png'
import PageTitle from '../../../Layout/PageTitle'

export default function EmilySiteProject() {
    return (
        <div>
            <PageTitle>Graphic Designer Portfolio Website</PageTitle>

            

            <SplitContainer>

                <SplitContainerPanel>
                    
                    <ProjectDetails>
                    <a href="https://ekmccourt.com/">https://ekmccourt.com</a>

                    
                        <p>This website was built using PHP and designed for my wife as a centralized location to show her design portfolio. I chose PHP as a good opportunity to learn the language and sue it as a templating engine.</p>
                        
                        <BlogImage src={Ekmccourtimage} />
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
