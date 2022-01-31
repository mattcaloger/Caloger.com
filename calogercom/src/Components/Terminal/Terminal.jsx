

    import React from 'react'
    import styled from 'styled-components'
    import {motion} from 'framer-motion'
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

        const variants = {
            hidden: { opacity: 0 },
            show: { opacity: 1},
          }

        const container = {
            hidden: {opacity: 0},
            show: {
                opacity: 1,
                transition: {
                    delayChildren: 0.1,
                        sgerChildren: 0.1
                    }
                }
        }

        export default function Terminal() {
            return (
                 
                <TerminalCard as={motion.div} variants={container} initial="hidden"
                animate="show">
                    <SpanRow as={motion.span} variants={variants}>
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
        