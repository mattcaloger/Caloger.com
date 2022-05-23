import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SpanRow from "../../Terminal/SpanRow";
import Tag from "../../Layout/Tag";
import DividedContainer from "../../Layout/DividedContainer";
import {
  CardContainer,
  LightFooter,
  LightBody,
  LightHeader,
  CardDivider,
  LightBodyExpandable,
} from "../../Layout/LightDarkCard";
import EvenSpanRow from "../../Terminal/EvenSpanRow";
import Title from "../../Layout/Title";

import VideoIcon from "../../../img/icons/PlayVideo.svg";
import ExternalLinkIcon from "../../../img/icons/exportarrow3.svg";
import WriteupIcon from "../../../img/icons/writeup.svg";

import GitHubIcon from "../../../img/github.svg";
import IconRow from "../../Layout/Redesign/IconRow";

import { DROP_SHADOW, DROP_SHADOW_HOVER } from "../../Layout/LightDarkCard";
import ActionButton from "../../Layout/Redesign/ActionButton";

const ProjectSummary = styled.div`
  cursor: default;
  user-select: none;
`;
const CardFooter = styled.div`
  height: 50px;
  width: 100%;
  background: #ddd;
`;

const ActionIconContainer = styled.div`
  padding: 1em;
  background: white;
  border-radius: 10px;

  display: flex;

  &:hover {
    ${DROP_SHADOW_HOVER}
    cursor: pointer;
  }
`;

const ActionIcon = styled.img`
  height: 36px;
  width: 36px;

  display: flex;

  &:hover {
    opacity: 66%;
  }
`;

const CardIcon = styled.div`
  & > * {
    width: 24px;
    height: 24px;
  }
`;

export default function ProjectCard(props) {
  return (
    <CardContainer>
      <LightHeader>
        <Title>{props.title}</Title>
      </LightHeader>

      <LightBody>
        <SpanRow>
          {props.tags.map((tag, index) => {
            return <Tag key={index}>{tag}</Tag>;
          })}
        </SpanRow>
      </LightBody>

      <LightBody>
        <IconRow>
          {props.icons.map((icon, index) => {
            return <CardIcon key={index}>{icon}</CardIcon>;
          })}
        </IconRow>
      </LightBody>
      <LightBodyExpandable>
        <ProjectSummary>{props.summary}</ProjectSummary>
      </LightBodyExpandable>

      <CardDivider />

      <LightFooter>
        <IconRow>
          {props.demo ? (
            <a target="_blank" rel="noreferrer" href={props.demo}>
              <ActionButton icon={ExternalLinkIcon} text="Demo"></ActionButton>
            </a>
          ) : (
            ""
          )}

          {props.github ? (
            <a target="_blank" rel="noreferrer" href={props.github}>
              <ActionButton icon={GitHubIcon} text="Code"></ActionButton>
            </a>
          ) : (
            ""
          )}

          {props.video ? (
            <a target="_blank" rel="noreferrer" href={props.video}>
              <ActionButton icon={VideoIcon} text="Video"></ActionButton>
            </a>
          ) : (
            ""
          )}

          {props.writeup ? (
            <a target="_blank" rel="noreferrer" href={props.writeup}>
              {" "}
              <ActionButton icon={WriteupIcon} text="Read"></ActionButton>
            </a>
          ) : (
            ""
          )}
        </IconRow>
      </LightFooter>
    </CardContainer>
  );
}
