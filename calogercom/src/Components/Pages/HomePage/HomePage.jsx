import React from "react";
import AboutBlurb from "../../AboutBlurb/AboutBlurb";

import styled from "styled-components";
import PageTitle from "../../Layout/PageTitle";

import { IconGrid } from "../../Layout/IconGrid";

import PageContainer from "../../Layout/PageContainer";

import ProjectList from "../ProjectsPage/ProjectList";

import BlogList from "../../Blog/BlogList";
import Content from "../../Layout/Content";
import ToggleIcon from "../../Layout/ToggleIcon";
import * as LanguageData from "../../Layout/Redesign/LanguageData";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1em;
`;

const PageSection = styled.section`
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  &:nth-child(even) {
    background: #f3f3f3;
  }
`;

export default function HomePage() {
  const LanguageList = () =>
    LanguageData.LanguageList.map((_language, index) => {
      return (
        <ToggleIcon
          key={index}
          default={LanguageData.LanguageList[index].IconComponentResponsive}
          hover={LanguageData.LanguageList[index].Text}
        ></ToggleIcon>
      );
    });

  return (
    <HomePageContainer id="#about">
      {/* <ScrollToTopOnMount /> */}
      <PageSection>
        <Content>
          <PageTitle>About</PageTitle>
          <AboutBlurb />
        </Content>
      </PageSection>

      <PageSection>
        <Content>
          <PageTitle id="#skills">Skills</PageTitle>

          <IconGrid>{LanguageList()}</IconGrid>
        </Content>
      </PageSection>

      {/* Projects */}

      <PageSection>
        <Content>
          <PageTitle id="#projects">Projects</PageTitle>

          <PageContainer>
            <ProjectList />
          </PageContainer>
        </Content>
      </PageSection>

      {/* Blog */}

      <PageSection>
        <Content>
          <PageTitle id="#blog">Blog</PageTitle>

          <PageContainer>
            <BlogList />
          </PageContainer>
        </Content>
      </PageSection>
    </HomePageContainer>
  );
}
