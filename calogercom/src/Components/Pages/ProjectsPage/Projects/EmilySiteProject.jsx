import React from "react";
import SplitContainer from "../../../Layout/SplitContainer";
import SplitContainerPanel from "../../../Layout/SplitContainerPanel";

import PageTitle from "../../../Layout/PageTitle";
import CaptionedImage from "../../../Layout/CaptionedImage";

import IndividualPage from "../../../../img/proj-img/portfolio-img/port-individual.png";
import LandingPage from "../../../../img/proj-img/portfolio-img/port-landing.png";
import ProjectsPage from "../../../../img/proj-img/portfolio-img/port-projects.png";
import PageSubtitle from "../../../Layout/PageSubtitle";
import ViewCodeButton from "../../../Layout/ViewCodeButton";
import styled from "styled-components";
import Content from "../../../Layout/Content";

const ClickableLink = styled.a`
  cursor: pointer;
  border-bottom: 1px solid black;
`;

export default function EmilySiteProject() {
  return (
    <Content>
      <PageTitle>Graphic Designer Portfolio Website</PageTitle>
      <SplitContainer>
        <SplitContainerPanel>
          <p>
            This website was built using PHP and designed for my wife as a
            centralized location to show her design portfolio. I chose PHP as a
            good opportunity to learn the language and use it as a templating
            engine.
          </p>

          <p>
            You can visit this page at{" "}
            <ClickableLink href="https://ekmccourt.com" target="_blank">
              https://ekmccourt.com
            </ClickableLink>
          </p>

          <PageSubtitle>Images</PageSubtitle>

          <CaptionedImage
            image={LandingPage}
            title={"Landing Page"}
            description={
              "Landing page of the website containing links to sub-sections"
            }
          />

          <CaptionedImage
            image={ProjectsPage}
            title={"Projects Page"}
            description={
              "Projects page displaying all projects, clicking the project links brings you to the individual project's page"
            }
          />

          <CaptionedImage
            image={IndividualPage}
            title={"Individual Page"}
            description={
              "The individual page of a particular project, containing text and a gallery of media."
            }
          />

          <ViewCodeButton url="https://github.com/mattcaloger/EmilyDesignPortfolio" />
        </SplitContainerPanel>
      </SplitContainer>
    </Content>
  );
}
