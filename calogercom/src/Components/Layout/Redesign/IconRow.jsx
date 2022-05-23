import React from "react";
import styled from "styled-components";

const IconRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  & > *:not(:first-child) {
    margin-left: 1em;
  }

  @media only screen and (max-width: 1080px) {
    align-content: center;
    justify-content: center;
    & > * {
      display: flex;
      margin: 0px;
      flex: 1;
      align-content: center;
      justify-content: center;
    }

    & > *:not(:first-child) {
      margin-left: 0px;
    }
  }
`;

export default function IconRow(props) {
  return <IconRowContainer>{props.children}</IconRowContainer>;
}
