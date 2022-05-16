import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'

import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import ViewCodeButton from '../../../Layout/ViewCodeButton'
import PageSubtitle from '../../../Layout/PageSubtitle'
import VisibleLink from '../../../Layout/VisibleLink'

import AddBookPage from '../../../../img/proj-img/BookDB/AddPage.png'
import HomeBookPage from '../../../../img/proj-img/BookDB/HomePage.png'
import EditBookPage from '../../../../img/proj-img/BookDB/EditPage.png'
import Content from '../../../Layout/Content'


export default function BookDBProject() {
    return (
        <Content>
            <PageTitle>BookDB</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>
                    <p>I created BookDB to better understand Angular and file uploads. The purpose of the application is to help you manage your book collection.</p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={AddBookPage} title={"Add page"} description={"The add page allows you to upload a book cover, add a title, and add an author."} />

                    <CaptionedImage image={HomeBookPage} title={"Home Page"} description={"The Home Page allows you to view all added books in your collection. You can edit or delete books from this page."} />  

                     <CaptionedImage image={EditBookPage} title={"Edit Page"} description={"The Edit page allows you to modify an already added book."} />       

                     <ViewCodeButton url="https://github.com/MCaloger/Budgie" />
                </SplitContainerPanel>
            </SplitContainer>
        </Content>
    )
}
