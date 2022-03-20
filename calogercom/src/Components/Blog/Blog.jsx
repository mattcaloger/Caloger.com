import React from 'react'
import PageTitle from '../Layout/PageTitle'
import PageContainer from '../Layout/PageContainer'
import PageSubtitle from '../Layout/PageSubtitle'
import BlogList from './BlogList'


export default function Blog() {
    return (
        <PageContainer>
            <PageTitle>Blog</PageTitle>
            <PageSubtitle>Select a blog to view details</PageSubtitle>

            <BlogList />
            
        </PageContainer>
    )
}
