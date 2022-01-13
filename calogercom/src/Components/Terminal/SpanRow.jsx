
import styled from 'styled-components'

const SpanRow = styled.div`
            display: flex;
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
        `

export default SpanRow