import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'

import ViewCodeButton from '../../../Layout/ViewCodeButton'

import CaptionedImage from '../../../Layout/CaptionedImage'

import PageTitle from '../../../Layout/PageTitle'

import PageSubtitle from '../../../Layout/PageSubtitle'

import SignInImage from '../../../../img/proj-img/university-helpdesk/signinpage.png'

import UserHomeImage from '../../../../img/proj-img/university-helpdesk/user_home_page.png'

import UserNewIssueImage from '../../../../img/proj-img/university-helpdesk/user_new_issue.png'

import UserOpenIssueImage from '../../../../img/proj-img/university-helpdesk/user_open_issues.png'

import UserTicketDetailImage from '../../../../img/proj-img/university-helpdesk/user_ticket_detail.png'

import UserNewProcessImage from '../../../../img/proj-img/university-helpdesk/user_new_process.png'

import TechHomeImage from '../../../../img/proj-img/university-helpdesk/technician_home.png'

import TechTicketViewImage from '../../../../img/proj-img/university-helpdesk/technician_ticket_view.png'

import TechTicketDetailsImage from '../../../../img/proj-img/university-helpdesk/technician_ticket_details.png'
import Content from '../../../Layout/Content'

export default function HelpdeskProject() {
    return (
        <Content>

            <PageTitle>University Helpdesk</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                
                    <p>This project was a prototype of a PHP-based helpdesk, it includes a custom authentication and authorization system with differing logic between users and technicians to render different views and options.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={SignInImage} title={"Sign In"} description={"The sign-in page for the application"} />

                    <CaptionedImage image={UserHomeImage} title={"User Home"} description={"Home page after sign-in for standard users."} />  

                     <CaptionedImage image={UserNewIssueImage} title={"user new issue"} description={"New issue page for standard users."} />      

                     <CaptionedImage image={UserNewProcessImage} title={"User new process"} description={"New process page for standard users to be able to start a \"process\". This form can be controlled by a technician through JSON to display different fields"} />   

                     <CaptionedImage image={UserOpenIssueImage} title={"User open issues"} description={"Open issue page for standard users to see their open issues and statuses."} />  

                     <CaptionedImage image={UserTicketDetailImage} title={"User ticket detail"} description={"Standard user page to see the details of a ticket they have opened."} /> 

                     <CaptionedImage image={TechHomeImage} title={"Technician home page"} description={"Home page for technicians, with additional features."} />

                     <CaptionedImage image={TechTicketViewImage} title={"Technician ticket view"} description={"Technician ticket page to view open and owned tickets."} />

                     <CaptionedImage image={TechTicketDetailsImage} title={"Technician ticket details"} description={"Technician ticket detail page with additional features compared to user ticket detail."} />

                     <ViewCodeButton url="https://github.com/MCaloger/University-Helpdesk" />
                </SplitContainerPanel>
            </SplitContainer>
        </Content>
    )
}
