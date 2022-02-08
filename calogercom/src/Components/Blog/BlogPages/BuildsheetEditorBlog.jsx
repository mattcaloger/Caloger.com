import React from 'react'
import PageTitle from '../../Layout/PageTitle'
import PageContainer from '../../Pages/ProjectsPage/Projects/Layout/PageContainer'
import TerminalCardWhite from '../../Terminal/TerminalCardWhite'

import BSEImg from '../../../img/blog-img/bse/BSEScreenshot.png'
import BSEFlow from '../../../img/blog-img/bse/bseflow.png'

import BlogImage from '../../Pages/ProjectsPage/Projects/Layout/BlogImage'

import Carousel from '../../Layout/Carousel'
import CaptionedImage from '../../Layout/CaptionedImage'
import PageSubtitle from '../../Layout/PageSubtitle'

export default function BuildsheetEditorBlog() {
    return (
        <PageContainer>
            <PageTitle>Buildsheet Editor</PageTitle>
            <div>
   

                <CaptionedImage image={BSEImg} title={"Buildsheet Editor"} description="An image displaying the UI of the Buildsheet Editor."></CaptionedImage>
        
                <PageSubtitle>The Problem</PageSubtitle>

                <p>During my time at Atlantic Health Systems, I developed an application known as the “Buildsheet Editor” to drastically improve an important yet straining process. Every hospital in the system was performing a wide-scale workstation hardware upgrade to meet a standard to best support the implementation of a new core application that would be rolling out. The rollout would be performed through the following process for each workstation:</p>

                <BlogImage src={BSEFlow} />

                <ol>
                    <li>Gather reports from multiple sources</li>
                    <li>Derive information from reports</li>
                    <li>Compile information into a buildsheet, attaching the source reports</li>
                    <li>Export &amp; upload the completed document</li>
                    <li>Await approval from senior technician</li>
                    <ol type="a">
                        <li>If approved, create the hardware configuration and deploy</li>
                        <li>If denied, start from the beginning</li>
                    </ol>
                </ol>

                <p>The most difficult part of this process was building the package list from the software list, as they were not one-to-one. A package was a composition of software, there may be an easy one to associate, such as Adobe Reader Version n belonging to the Adobe Reader package, but this got tricky with obscure or highly specialized software where the software name may not align with the package, such as a bundle for Radiology. Furthermore, there was no defined list of software-to-package, so it really relied on experience and knowledge of each department and their software needs. This also led to many rejections in the senior technician approval process due to this, which created large delays in the rollout of this project.</p>

                <PageSubtitle>The Solution</PageSubtitle>

                <p>Due to the multitude of challenges with this process, I got the idea to build an all-in-one editor and viewer for these buildsheets, that made the process of comparing and deriving the data painless. This went alongside with convincing the team of the importance of a software-to-package database which was used to automatically derive the necessary packages. These combined made not only the technician’s job easier, but also the reviewer’s ability to compare the old and new machine for approval.</p>

                <p>To operate the application, you’d simply import the application report and fill out the information at the top. The application would automatically sort out which applications belonged to which packages and mark all included packages for inclusion on the new machine. Saving and opening the file would load the configuration for viewing. Additionally, when it came time to prepare the hardware, you could print out a single page that included all relevant information.</p>

                <p>This application was built with C# Winforms to accommodate the universally installed version of .NET at the time.</p>

                <p>As the only one on the team that had programming experience, I was the sole developer and maintainer of the application, managing both the application-to-package database and source code, integrating technician suggestions and feedback into the application.
                </p>
            </div>
        </PageContainer>
    )
}
