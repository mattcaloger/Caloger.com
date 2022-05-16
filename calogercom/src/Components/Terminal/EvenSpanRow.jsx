
import styled from 'styled-components'

const EvenSpanRow = styled.div`
            display: flex;
            font-weight: bold;
            flex-wrap: wrap;
            justify-content: space-evenly;

            &>* {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &>:first-child {
                margin-right: 5px;
            }

            &>:not(:first-child):not(:last-child) {
                margin-left: 5px;
                margin-right: 5px;
            }

            &>:last-child {
                margin-left: 5px;
            }

            &>:only-child {
                margin-left: 0 ;
            }
        `

export default EvenSpanRow