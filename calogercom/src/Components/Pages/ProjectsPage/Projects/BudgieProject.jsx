import React from 'react'
import SplitContainer from '../../../Layout/SplitContainer'
import SplitContainerPanel from '../../../Layout/SplitContainerPanel'
import TransactionImg from '../../../../img/proj-img/budgie/budgie-transaction.png'
import IncomeImg from '../../../../img/proj-img/budgie/budgie-income.png'
import ExpensesImg from '../../../../img/proj-img/budgie/budgie-expenses.png'
import CategoriesImg from '../../../../img/proj-img/budgie/budgie-categories.png'
import PageTitle from '../../../Layout/PageTitle'
import CaptionedImage from '../../../Layout/CaptionedImage'
import ViewCodeButton from '../../../Layout/ViewCodeButton'
import PageSubtitle from '../../../Layout/PageSubtitle'
import VisibleLink from '../../../Layout/VisibleLink'

const BudgieItems = [
    { 
        title: "Transactions Page", 
        description: "The transaction page displays a graph of transactions (positive and negative) over time.",
        image: TransactionImg
    },
    {
        title: "Income Page", 
        description: "The income page displays a graph of recorded income, a pie chart of income categories, and the ability to add more income items.",
        image: IncomeImg
    }, 
    {
        title: "Expenses Page", 
        description: "The expense page, similar to the income page, displays a graph of recorded expenses, a pie chart of expense categories, and the ability to add more expense items.",
        image: ExpensesImg
    }
]

export default function BudgieProject() {
    return (
        <div>
            <PageTitle>Budgie</PageTitle>
            <SplitContainer>

                <SplitContainerPanel>

                    

                    <p>I created Budgie to gain some experience with data visualization and play around with a gradient-heavy visual style. The front-end is a React app that uses <VisibleLink href="https://reactrouter.com/">React Router</VisibleLink> for navigation.</p>

                    <p>The server portion was written in Java with the Spring Framework as the web layer. It uses JPA with an in-memory h2 database for storage.</p>

                    <p>I originally used the <VisibleLink href="https://recharts.org/en-US/">ReChart</VisibleLink> library for the data visualizations but found it wasn't as flexible as I'd like it to be, so I changed over to <VisibleLink href="https://www.chartjs.org/">Chart.js</VisibleLink> and the accompanying <VisibleLink href="https://github.com/reactchartjs/react-chartjs-2">React ChartJS 2</VisibleLink> library for it.</p>

                    <p>
                        Some interesting features that are used include ascending/descending sorting, instant visual updating, and gradient charts.
                    </p>

                    <PageSubtitle>Images</PageSubtitle>

                    <CaptionedImage image={TransactionImg} title={"Transaction Page"} description={"The transaction page displays a graph of transactions (positive and negative) over time."} />

                    <CaptionedImage image={IncomeImg} title={"Income Page"} description={"The income page displays a graph of recorded income, a pie chart of income categories, and the ability to add more income items."} />  

                     <CaptionedImage image={ExpensesImg} title={"Expense Page"} description={"The expense page, similar to the income page, displays a graph of recorded expenses, a pie chart of expense categories, and the ability to add more expense items."} />      

                     <CaptionedImage image={CategoriesImg} title={"Category Page"} description={"The categories page lets you add and remove categories that can be selected from the income and expense pages."} />    

                     <ViewCodeButton url="https://github.com/MCaloger/Budgie" />
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
