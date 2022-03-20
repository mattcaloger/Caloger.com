import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'

import CaptionedImage from '../../../Layout/CaptionedImage'

import PageTitle from '../../../Layout/PageTitle'

import PageSubtitle from '../../../Layout/PageSubtitle'

import ViewCodeButton from '../../../Layout/ViewCodeButton'

import FirstMessageImage from '../../../../img/proj-img/InstantChat/First message.png'

import VisibleLink from '../../../Layout/VisibleLink';

import SecondMessageImage from '../../../../img/proj-img/InstantChat/Second message.png'

export default function ReactChatProject() {
    return (
        <div>

            <PageTitle>Instant Chat</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                
                    <p>This project was created to gain an understanding of websockets and real-time communication.</p>

                    <p>The front-end was developed with React and TypeScript, using <VisibleLink href="https://styled-components.com/">Styled-Components</VisibleLink> for styling.</p>

                    <p>The back-end uses ndoeJS with <VisibleLink href="https://expressjs.com/">Express</VisibleLink> to serve the front-end, and <VisibleLink href="https://socket.io/">Socket.IO</VisibleLink> to handle the instant messaging.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={FirstMessageImage} title={"Sign In"} description={"A user sending a message"} />

                    <CaptionedImage image={SecondMessageImage} title={"User Home"} description={"A second user sending a message"} />  

                     <ViewCodeButton url="https://github.com/MCaloger/Instant-Chat" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
