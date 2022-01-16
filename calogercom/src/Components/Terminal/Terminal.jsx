

    import React from 'react'
    import styled from 'styled-components'
    import {motion} from 'framer-motion'
    import TerminalCard from './TerminalCard'
    import { ColorJs, ColorHtml, ColorCss, ColorPhp, ColorCSharp, ColorJava, ColorSpring, ColorNode, ColorPhotoshop, ColorIllustrator, ColorTypescript, ColorReactJs, ColorSql } from './Languages'

    import SpanRow from './SpanRow'
        

        const Blink = styled.span`
        
        animation: blink-cursor 1.5s infinite;

            @keyframes blink-cursor {
                0% {
                    color: #fff;
                }
            
                50% {
                    color: #fff;
                }
            
                60% {
                    color: black;
                }
            
                99% {
                    color: black;
                }
            
                100% {
                    color: #fff;
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
                        staggerChildren: 0.1
                    }
                }
        }

        export default function Terminal() {
            return (
                 
                <TerminalCard as={motion.div} variants={container} initial="hidden"
                animate="show">
                    <motion.p variants={variants}>% Skills</motion.p>
                    <SpanRow as={motion.span} variants={variants}>
                        <ColorJs>javascript</ColorJs> 
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>  
                        <ColorPhp>php</ColorPhp>
                        <ColorReactJs>react-js</ColorReactJs>
                        <ColorNode>node</ColorNode>
                        <ColorTypescript>typescript</ColorTypescript>
                        <ColorCSharp>c-sharp</ColorCSharp>
                        <ColorJava>java</ColorJava>
                        <ColorSpring>spring</ColorSpring>
                        <ColorSql>sql</ColorSql>
                        <ColorPhotoshop>photoshop</ColorPhotoshop>
                        <ColorIllustrator>illustrator</ColorIllustrator>
                    </SpanRow>
                    <motion.p variants={variants}>% Interests</motion.p>
                    <SpanRow as={motion.span} variants={variants}>
                        <span variants={variants}>programming</span>
                        <span variants={variants}>system-design</span>
                        <span variants={variants}>project-management</span>
                        <span variants={variants}>ui-ux</span>

                        <span variants={variants}>graphic-design</span>
                    </SpanRow>

                    <motion.p variants={variants}>% Location</motion.p>
                    <motion.p variants={variants}>Toronto, Canada</motion.p>
                    <motion.p variants={variants}>% <Blink>_</Blink></motion.p>

                </TerminalCard>
            )
        }
        