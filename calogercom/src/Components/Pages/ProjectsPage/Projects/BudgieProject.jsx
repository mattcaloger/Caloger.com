import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import AboutBlurb from '../../../AboutBlurb/AboutBlurb'
import styled from 'styled-components'
import ProjectDetails from './Layout/ProjectDetails'



export default function BudgieProject() {
    return (
        <div>
            <h1>Budgie</h1>
            <SplitContainer>
                
                <SplitContainerPanel>
                    <img width="100" height="100" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1802/lkeskinen180208322/95731150-example-stamp-typographic-label-stamp-or-icon.jpg"/>
                </SplitContainerPanel>
                <SplitContainerPanel>
                    <ProjectDetails>
                        <p>I created Budgie to gain some experience with data visualization and play around with a gradient-heavy visual style. The front-end is a React app that uses React Router for navigation.</p>

                        <p>The server portion was written in Java with the Spring Framework as the web layer. It uses JPA with an in-memory h2 database for storage.</p>

                        <p>I originally used the ReChart library for the data visualizations but found it wasn't as flexible as I'd like it to be, so I changed over to Chart.js and the accompanying React library for it.</p>
                    </ProjectDetails>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
