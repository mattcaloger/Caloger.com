import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import AboutBlurb from '../../../AboutBlurb/AboutBlurb'
import styled from 'styled-components'
import ProjectDetails from './Layout/ProjectDetails'

import TransactionImg from '../../../../img/proj-img/budgie/budgie-transaction.png'
import IncomeImg from '../../../../img/proj-img/budgie/budgie-income.png'
import ExpensesImg from '../../../../img/proj-img/budgie/budgie-expenses.png'

import Carousel from '../../../Layout/Carousel'
import PageTitle from '../../../Layout/PageTitle'

export default function BudgieProject() {
    return (
        <div>
            <PageTitle>Budgie</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                    <Carousel imgs={[TransactionImg, IncomeImg, ExpensesImg]}></Carousel>

                        <p>I created Budgie to gain some experience with data visualization and play around with a gradient-heavy visual style. The front-end is a React app that uses React Router for navigation.</p>

                        <p>The server portion was written in Java with the Spring Framework as the web layer. It uses JPA with an in-memory h2 database for storage.</p>

                        <p>I originally used the ReChart library for the data visualizations but found it wasn't as flexible as I'd like it to be, so I changed over to Chart.js and the accompanying React library for it.</p>

                        <p>
                            Some interesting features that are used include ascending/descending sorting, instant visual updating, and gradient charts.
                        </p>

                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
