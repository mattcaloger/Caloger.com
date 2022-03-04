import React from 'react'
import styled from 'styled-components'

import TerminalCard from './TerminalCard'
import * as Languages from './Languages'

    import SpanRow from './SpanRow'
import { CSharpIconBlock, CssIconBlock, HtmlIconBlock, JavaScriptIconBlock, NodeIconBlock, PhpIconBlock, ReactIconBlock, TypeScriptIconBlock, JavaIconBlock, SpringIconBlock, SqlIconBlock } from './LanguageIcons'
        

        const Blink = styled.span`
        
        animation: blink-cursor 1.5s infinite;

            @keyframes blink-cursor {
                0% {
                    Languages.Color: #fff;
                }
            
                50% {
                    Languages.Color: #fff;
                }
            
                60% {
                    Languages.Color: black;
                }
            
                99% {
                    Languages.Color: black;
                }
            
                100% {
                    Languages.Color: #fff;
                }
            }
        `
        
        export default function Terminal() {
            return (
                 
                <TerminalCard>
                    <SpanRow>
                        <CSharpIconBlock />
                        <JavaScriptIconBlock />
                        <HtmlIconBlock />
                        <CssIconBlock />
                        <PhpIconBlock />
                        <ReactIconBlock />
                        <NodeIconBlock />
                        <TypeScriptIconBlock />
                        <JavaIconBlock />
                        <SpringIconBlock />
                        <SqlIconBlock />
                    </SpanRow>

                </TerminalCard>
            )
        }
        