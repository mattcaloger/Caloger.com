

        import React from 'react'
import styled from 'styled-components'
        
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

        export default function Terminal() {
            return (
                 
                <TerminalCard>
                    <p>$ list skills</p>
                    <SkillContainer>
                        <ColorJs>js</ColorJs> 
                        <ColorHtml>html</ColorHtml>
                        <ColorCss>css</ColorCss>  
                        <ColorPhp>php</ColorPhp>
                        <ColorReactJs>reactjs</ColorReactJs>
                        <ColorNode>node</ColorNode>
                        <ColorTypescript>typescript</ColorTypescript>
                        <ColorCSharp>csharp</ColorCSharp>
                        <ColorJava>java</ColorJava>
                        <ColorSpring>spring</ColorSpring>
                        <ColorSql>sql</ColorSql>
                        <ColorPhotoshop>photoshop</ColorPhotoshop>
                        <ColorIllustrator>illustrator</ColorIllustrator>
                    </SkillContainer>
                    <p>$ show interests</p>
                    <p>programming system-design project-management graphic-design </p>
                    <p>$ display location</p>
                    <p>Toronto</p>
                    <p>$ <Blink>_</Blink></p>
                </TerminalCard>
            )
        }
        