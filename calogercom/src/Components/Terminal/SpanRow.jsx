
import styled from 'styled-components'

const SpanRow = styled.p`
            display: flex;
            font-weight: bold;

            *:first-child {
                margin-right: 5px;
            }

            *:not(:first-child):not(:last-child) {
                margin-left: 5px;
                margin-right: 5px;
            }

            *:last-child {
                margin-left: 5px;
            }

            *:only-child {
                margin-left: 0 ;
            }
        `

export default SpanRow