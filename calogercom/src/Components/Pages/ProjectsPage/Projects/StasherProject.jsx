import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'


import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import ViewCodeButton from '../../../Layout/ViewCodeButton'
import PageSubtitle from '../../../Layout/PageSubtitle'
import VisibleLink from '../../../Layout/VisibleLink'

import CreateNewImg from '../../../../img/proj-img/stasher-img/1_home.png'
import NewSecretImg from '../../../../img/proj-img/stasher-img/2_new_secret.png'
import ReadSecretImg from '../../../../img/proj-img/stasher-img/3_read_secret.png'
import SecuredSecretImg from '../../../../img/proj-img/stasher-img/4_secured_secret.png'
import NewSecuredImg from '../../../../img/proj-img/stasher-img/5_new_secured.png'
import CorrectPasswordImg from '../../../../img/proj-img/stasher-img/6_correct_password.png'
import IncorrectPasswordImg from '../../../../img/proj-img/stasher-img/7_incorrect_password.png'

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

                    <CaptionedImage image={NewSecretImg} title={"Get URL Page"} description={"After submitting a message, the user will receieve a URL they can share to give a one-time access link."} />

                    <CaptionedImage image={ReadSecretImg} title={"Get Message page"} description={"If the link hasn't been used and the time limit hasn't expired, following the link will show the message."} />

                    <CaptionedImage image={SecuredSecretImg} title={"Secured Secret Message"} description={"Adding a password to the message provides an extra layer of security."} />   

                    <CaptionedImage image={NewSecuredImg} title={"Password Prompt"} description={"Password request screen for messages locked with a password."} />  

                    <CaptionedImage image={CorrectPasswordImg} title={"Correct Password"} description={"If the password is correct, the user will see the message."} /> 

                    <CaptionedImage image={IncorrectPasswordImg} title={"Incorrect Password"} description={"If the password is incorrect, the message won;t be accessible and will be deleted."} />  

                    <ViewCodeButton url="https://github.com/MCaloger/Stasher" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
