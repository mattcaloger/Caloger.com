import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'
import PageTitle from '../../../Layout/PageTitle'

import VisibleLink from '../../../Layout/VisibleLink'
import ViewCodeButton from '../../../Layout/ViewCodeButton'

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
