import React from 'react'
import AboutBlurb from '../../AboutBlurb/AboutBlurb'
import ProfilePicture from '../../ProfilePicture/ProfilePicture'
import Terminal from '../../Terminal/Terminal'
import styled from 'styled-components'
import PageTitle from '../../Layout/PageTitle'

import * as LanguageIcons from '../../Terminal/LanguageIcons'
import IconImage from '../../Layout/IconImage'
import SpanRow from '../../Terminal/SpanRow'
import { CardContainer, LightHeader } from '../../Layout/LightDarkCard'
import { FlatCardContainer, FlatLightBody, FlatLightFooter } from '../../Layout/LightDarkCardFlat'
import { IconGrid } from '../../Layout/IconGrid'

import { CardContainerMini, LightHeaderMini, LightBodyMini, LightFooterMini} from '../../Layout/LightDarkCardMini'

import { Link } from 'react-router-dom'
import Title from '../../Layout/Title'

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
`



export default function HomePage() {
    return (
        <HomePageContainer>
            <AboutBlurb />

            <FlatCardContainer>
                <FlatLightFooter>
                    <PageTitle>Languages</PageTitle>
                </FlatLightFooter>
                <FlatLightBody>
                    <IconGrid>
                        <LanguageIcons.JavaIconBlock/>
                        <LanguageIcons.JavaScriptIconBlock />
                        <LanguageIcons.TypeScriptIconBlock />
                        <LanguageIcons.CSharpIconBlock />
                    </IconGrid>

                    {/* <PageTitle>Examples</PageTitle>
                    
                    <Link to="/projects/">
                        <CardContainerMini>

                            <Title>Graphic Designer's Portfolio</Title>

                        </CardContainerMini>
                    </Link> */}

                </FlatLightBody>
                <FlatLightFooter>
                </FlatLightFooter>
            </FlatCardContainer>
            
            <FlatCardContainer>
                <FlatLightFooter>
                    <PageTitle>Frameworks</PageTitle>
                </FlatLightFooter>
                <FlatLightBody>
                    <IconGrid>
                        <LanguageIcons.SpringIconBlock/>
                        <LanguageIcons.ReactIconBlock />
                        <LanguageIcons.NodeIconBlock/>
                        <LanguageIcons.DotnetIconBlock />
                    </IconGrid>

                </FlatLightBody>
                <FlatLightFooter>
                </FlatLightFooter>
            </FlatCardContainer>

            <FlatCardContainer>
                <FlatLightFooter>
                    <PageTitle>Tools</PageTitle>
                </FlatLightFooter>
                <FlatLightBody>
                    <IconGrid>
                        <LanguageIcons.GitIconBlock />
                        <LanguageIcons.IntelliJIconBlock />
                        <LanguageIcons.VisualStudioIconBlock />
                        <LanguageIcons.VisualStudioCodeIconBlock />
                    </IconGrid>
                </FlatLightBody>
                <FlatLightFooter></FlatLightFooter>
            </FlatCardContainer>

        </HomePageContainer>
    )
}
