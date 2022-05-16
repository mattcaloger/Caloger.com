
import styled from 'styled-components'

const SpanRow = styled.div`
            display: flex;
            font-weight: bold;
            flex-wrap: wrap;

            &>* {
                padding-left: 1em;
            }

            @media only screen and (max-width: 1080px) {
                flex-direction: column;
                &>* {
                    margin: 0px;

                    &>:first-child {
                        margin-right: 0px;
                    }
        
                    &>:not(:first-child):not(:last-child) {
                        margin-left: 0px;
                        margin-right: 0px;
                    }
        
                    &>:last-child {
                        margin-left: 0px;
                    }
        
                    &>:only-child {
                        margin-left: 0px;
                    }
                }
            }

        `

export default SpanRow