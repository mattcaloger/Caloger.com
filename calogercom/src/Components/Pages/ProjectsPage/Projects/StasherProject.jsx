import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'
import CreateNewImg from '../../../../img/proj-img/stasher-img/createnew.png'
import GetUrlImg from '../../../../img/proj-img/stasher-img/geturl.png'
import PasswordScreenImg from '../../../../img/proj-img/stasher-img/passwordscreen.png'
import IncorrectMessageImg from '../../../../img/proj-img/stasher-img/incorrectmessage.png'
import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import ViewCodeButton from '../../../Layout/ViewCodeButton'
import PageSubtitle from '../../../Layout/PageSubtitle'
import VisibleLink from '../../../Layout/VisibleLink'

export default function StasherProject() {
    return (
        <div>
            <PageTitle>Stasher</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>
                    <p>I created Stasher to gain some experience with encryption and security practices. The front-end is a TypeScript React app that uses <VisibleLink href="https://reactrouter.com/">React Router</VisibleLink> for navigation.</p>

                    <p>Stasher improves security by creating messages that can only be accessed once and in a one-hour time period. This improves the sharing of credentials or sensitive information over a chat application by removing plaintext passwords in a communication channel, and ensuring that the credentials can only be accessed a single time.</p>

                    <p>The server portion was written in Java with the Spring Framework as the web layer. It uses JPA with an in-memory H2 database for storage.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={CreateNewImg} title={"Create New Message"} description={"Gives users the ability to enter a message and optionally apply a password required to access the message."} />

                    <CaptionedImage image={GetUrlImg} title={"Get URL Page"} description={"After submitting a message, the user will receieve a URL they can share to give a one-time access link."} />    

                    <CaptionedImage image={PasswordScreenImg} title={"Password Page"} description={"If a message was submitted with a password, visiting the link will prompt for a password to access the message."} />   

                    <CaptionedImage image={IncorrectMessageImg} title={"Inbcorrect Message Page"} description={"If an incorrect password is given, or the message was already retrieved, the user will get a notice that the message isn't available."} />   

                    <ViewCodeButton url="https://github.com/MCaloger/Stasher" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
