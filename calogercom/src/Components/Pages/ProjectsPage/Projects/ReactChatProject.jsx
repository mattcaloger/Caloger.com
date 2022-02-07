import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import ProjectDetails from './Layout/ProjectDetails'
import CaptionedImage from '../../../Layout/CaptionedImage'

import PageTitle from '../../../Layout/PageTitle'

import PageSubtitle from '../../../Layout/PageSubtitle'

import ViewCodeButton from '../../../Layout/ViewCodeButton'

import FirstMessageImage from '../../../../img/proj-img/InstantChat/First message.png'

import SecondMessageImage from '../../../../img/proj-img/InstantChat/Second message.png'

export default function ReactChatProject() {
    return (
        <div>

            <PageTitle>Instant Chat</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                
                    <p>This project was created to gain an understanding of websockets and real-time communication.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={FirstMessageImage} title={"Sign In"} description={"A user sending a message"} />

                    <CaptionedImage image={SecondMessageImage} title={"User Home"} description={"A second user sending a message"} />  

                     <ViewCodeButton url="https://github.com/mattusoperandi/Instant-Chat" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
