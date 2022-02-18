import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import AboutBlurb from '../../../AboutBlurb/AboutBlurb'
import styled from 'styled-components'
import ProjectDetails from './Layout/ProjectDetails'

import TransactionImg from '../../../../img/proj-img/budgie/budgie-transaction.png'
import IncomeImg from '../../../../img/proj-img/budgie/budgie-income.png'
import ExpensesImg from '../../../../img/proj-img/budgie/budgie-expenses.png'

import CategoriesImg from '../../../../img/proj-img/budgie/budgie-categories.png'

import Carousel from '../../../Layout/Carousel'
import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import ViewCodeButton from '../../../Layout/ViewCodeButton'
import PageSubtitle from '../../../Layout/PageSubtitle'
import VisibleLink from '../../../Layout/VisibleLink'

export default function BudgieProject() {
    return (
        <div>
            <PageTitle>Shortcake</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>
                    <p>Shortcake is a simple API for shortening and sharing URLs</p> 

                    <p><VisibleLink href="https://expressjs.com/">ExpressJS</VisibleLink> is used for HTTP and routing, alongside <VisibleLink href="https://github.com/winstonjs/winston">Winston</VisibleLink> for logging, and <VisibleLink href="https://github.com/motdotla/dotenv">dotenv</VisibleLink> to load environment variables.</p>

                    <p>For storage, Shortcake uses the <VisibleLink href="https://github.com/mapbox/node-sqlite3">Sqlite3</VisibleLink> to connect to a Sqlite file database. Plain SQL queries are used for writing and reading data.</p>

                    <p><VisibleLink href="https://jestjs.io/">Jest</VisibleLink> and <VisibleLink href="https://github.com/visionmedia/supertest">Supertest</VisibleLink> are used for testing the routes, services, and utilities.</p>

                     <ViewCodeButton url="https://github.com/MCaloger/Shortcake" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
