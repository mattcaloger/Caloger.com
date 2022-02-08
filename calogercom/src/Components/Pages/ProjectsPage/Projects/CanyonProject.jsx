import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'

import ViewCodeButton from '../../../Layout/ViewCodeButton'

import TodoImage from '../../../../img/proj-img/Canyon/todo.png'
import DynamicCSSImage from '../../../../img/proj-img/Canyon/dynamiccss.png'
import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import PageSubtitle from '../../../Layout/PageSubtitle'

export default function CanyonpProject() {
    return (
        <div>

            <PageTitle>Canyon</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                    <p>Canyon was created as a fun proof-of-concept of making a React/Angular/Vue-like framework with Vanilla JavaScript. The central concept is to use a singleton to manage the state and components of the application, and watch the state to modify the HTML using the observer pattern when needed.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={TodoImage} title={"Todo list example"} description={"An example application built with the framework to make a to-do list app."} />

                    <CaptionedImage image={DynamicCSSImage} title={"Dynamic CSS example"} description={"An example application to generate CSS dynamically and generate component with that generated CSS."} />  

                     <ViewCodeButton url="https://github.com/mattusoperandi/CanyonJS" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
