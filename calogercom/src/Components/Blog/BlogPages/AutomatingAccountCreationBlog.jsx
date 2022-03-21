import React from 'react'
import PageTitle from '../../Layout/PageTitle'
import PageContainer from '../../Layout/PageContainer'

export default function AutomatingAccountCreationBlog() {
    return (
        <PageContainer>
            <PageTitle>Automating the Account Creation Process</PageTitle>
            <div>

                <p>Creating organizational accounts can be a time-consuming and error-prone task for an IT department to take on, especially if there are many hires in a short time span. My goal was to create an automated process for account creation that would take the given data and turn it into a completed Active Directory user item with minimal input from the technician, while still allowing for technician intervention if an exception needed to be made. Weighing the options for the best technology to use for this, PowerShell became the best option for the Active Directory commandlets it had available. Because the basis for the information gathering was a form, I wanted to use that from data as the initial kick-off point.</p>

                <p>Since there is often a large amount of data that needs to be taken in for incoming hires, it'd best to take in these answers with a ticket from the hiring manager or Human Resources department. This information would range from simple questions, such as the incoming hire's first and last name, to more complicated questions, such as which network drives and software they would need access to.</p>

                <p>Investigating the features of the ticket system, I unfortunately was not able to interact with any APIs to do what I wanted. I was able to set up a chain of rules to send an email when a user creation ticket was made and populate that email with data from the form fields, so I used that as the mechanism to get the data out of the ticket system. The next step was to process the data to create the accounts.</p>

                <p>A good starting place would be to get the username and email address information, which could be derived from the provided form data. Most organizations have custom conventions for account usernames and emails depending on their needs. An example would be FirstName.Lastname@domain.com, or FirstInitialLastname @domain.com. Additionally, there may have extra rules or conventions for if usernames clash or already exist, such as appending a number onto the name or swapping the naming convention to avoid confusion for duplicate or similar names. The pseudocode for this operation with my organization was the following:</p>

                <code>
                    <ol>
                        <li>Username = FirstInitial(FirstName) + Lastname // ex: MCaloger</li>
                        <li>If Username already exists, try FirstNameLastname ex. MatthewCaloger</li>
                        <li>If Username exists again, prompt technician to enter username</li>
                        <li>EmailAddress = Username + @domain.com // ex. MCaloger@domain.com</li>
                        <li>EmailProxyString = SMPT:EmailAddress </li>
                    </ol>
                </code>

                <p>As you can see, there can be multiple levels of derived information, which normally would be manually entered, leading to repeated tasks. This opened possible chances for mistakes, such as accidentally adding in an invalid or existing EmailProxyString, causing the new user to not have access to email. This process would be reconfigured for different bits of information and other derived data.</p>

                <p>After processing the various pieces of data, it'd be best to show the technician a quick overview of the account settings being created before going through with the creation. At first this was a simple console printout, but later I augmented this with a WinForms view to make it simpler.</p>

                <p>If the technician approves the creation, the script can then then go ahead and create the active directory object, apply the settings that have been confirmed, and present confirmation or error to the technician upon completion.</p>

                <p>This process was an interesting look for me into how to automate a process with restrictions and stop-gaps, while </p>

            </div>
        </PageContainer>
    )
}
