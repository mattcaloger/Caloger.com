import React from 'react'
import PageTitle from '../Layout/PageTitle'
import PageContainer from '../Layout/PageContainer'
import PageSubtitle from '../Layout/PageSubtitle'
import BlogList from './BlogList'


export default function Blog() {
    return (
    <>
    <PageSubtitle>Select a blog to view details</PageSubtitle>
        <PageContainer>

            

            <BlogList />
            
        </PageContainer>
    
    </>
    )
}
