import React from "react";
import styled from "styled-components";
import { BORDER_RADIUS } from "../Layout/BorderRadius";
import { PRIMARY, SECONDARY } from "../Layout/Colors";
import Content from "../Layout/Content";

const FooterComponent = styled.div`
  display: flex;
  & > * {
    padding: 10px;
    justify-content: center;
    text-align: center;
    flex: 1;
  }

  & > *:hover {
    color: rgba(0, 0, 0, 0.65);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: row;

    & > * {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`;

const FooterContainer = styled.footer`
  font-size: 20px;
  width: 100%;
  height: 50px;
  color: ${PRIMARY};
  display: flex;
  z-index: 1;

  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: bold;
`;

const FooterItem = styled.div`
  display: flex;
  color: white;

  all: unset;
  flex: 1;
  align-self: center;
  justify-content: center;
  user-select: none;
  text-align: center;
`;

const FooterItemSelectable = styled.div`
  display: flex;
  color: white;

  all: unset;
  flex: 1;
  align-self: center;
  justify-content: center;

  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Content>
        <FooterComponent>
          <FooterItem>
            <a href="https://github.com/mattcaloger">GitHub</a>
          </FooterItem>

          <FooterItem>
            <a href="https://www.linkedin.com/in/mattcaloger/">Linkedin</a>
          </FooterItem>
        </FooterComponent>
      </Content>
    </FooterContainer>
  );
}
