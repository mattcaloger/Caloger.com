import React from "react";
import styled from "styled-components";
import { PRIMARY } from "../Colors";

const ActionButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${PRIMARY};

  background: white;

  cursor: pointer;
  padding: 1em;

  font-weight: bold;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid ${PRIMARY};

  &:hover {
    background: #e0f2f177;
  }
`;

const ActionIcon = styled.img`
  height: 1em;
  width: 1em;

  display: flex;
  margin-right: 0.5em;
`;

export default function ActionButton(props) {
  return (
    <ActionButtonContainer>
      <ActionIcon src={props.icon} />
      <div>{props.text}</div>
    </ActionButtonContainer>
  );
}
