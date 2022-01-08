

    import React from 'react'
    import styled from 'styled-components'
    import {motion} from 'framer-motion'
        
        const TerminalCard = styled.div`
            box-shadow: 0 0px 0px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.23);
            font-family: monospace;
            background: rgba(0,0,0,.75);
            backdrop-filter: blur(10px);
            color: white;
            width: 100%;
            border-radius: 10px;
            margin: auto;
            margin-bottom: 50px;
            padding: 20px;
            user-select: none;
        `

        const SkillContainer = styled.div`
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

        const ColorJs = styled.span`color: #fcdc00;`

        const ColorHtml = styled.span`color: #e54c21;`

        const ColorCss = styled.span`color: #2465f1;`

        const ColorPhp = styled.span`color: #787CB4;`

        const ColorCSharp = styled.span`color: #9366CB;`

        const ColorJava = styled.span`color: #E42D2F;`

        const ColorSpring = styled.span`color: #5EB241;`

        const ColorNode = styled.span`color: #3B7F3A;`

        const ColorPhotoshop = styled.span`color: #3A9FF2;`

        const ColorIllustrator = styled.span`color: #F29202;`

        const ColorTypescript = styled.span`color: #2F72BC;`

        const ColorReactJs = styled.span`color: #77D4F2;`

        const ColorSql = styled.span`color: #F1AA00;`

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
            show: { opacity: 1 },
          }

        const stagger = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                    delayChildren: 0.5,
                    staggerChildren: .5
                }
            }
        }

        export default function Terminal() {
            return (
                 
                <TerminalCard >
                    <p>$ list skills</p>
                    <SkillContainer as={motion.div} variants={stagger} initial="hidden" animate="show">
                        <ColorJs as={motion.span} variants={variants} initial="hidden" animate="show">js</ColorJs> 
                        <ColorHtml as={motion.span} variants={variants} initial="hidden" animate="show">html</ColorHtml>
                        <ColorCss as={motion.span} variants={variants} initial="hidden" animate="show">css</ColorCss>  
                        <ColorPhp as={motion.span} variants={variants} initial="hidden" animate="show">php</ColorPhp>
                        <ColorReactJs as={motion.span} variants={variants} initial="hidden" animate="show">reactjs</ColorReactJs>
                        <ColorNode as={motion.span} variants={variants} initial="hidden" animate="show">node</ColorNode>
                        <ColorTypescript as={motion.span} variants={variants} initial="hidden" animate="show">typescript</ColorTypescript>
                        <ColorCSharp as={motion.span} variants={variants} initial="hidden" animate="show">csharp</ColorCSharp>
                        <ColorJava as={motion.span} variants={variants} initial="hidden" animate="show">java</ColorJava>
                        <ColorSpring as={motion.span} variants={variants} initial="hidden" animate="show">spring</ColorSpring>
                        <ColorSql as={motion.span} variants={variants} initial="hidden" animate="show">sql</ColorSql>
                        <ColorPhotoshop as={motion.span} variants={variants} initial="hidden" animate="show">photoshop</ColorPhotoshop>
                        <ColorIllustrator as={motion.span} variants={variants} initial="hidden" animate="show">illustrator</ColorIllustrator>
                    </SkillContainer>
                    <p>$ show interests</p>
                    <p>programming system-design project-management graphic-design </p>
                    <p>$ display location</p>
                    <p>Toronto</p>
                    <p>$ <Blink>_</Blink></p>
                </TerminalCard>
            )
        }
        