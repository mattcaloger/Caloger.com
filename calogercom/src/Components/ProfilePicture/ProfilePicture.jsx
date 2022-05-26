import React from "react";
import styled from "styled-components";
import ProfilePic from "../../img/photo.png";

const AboutImg = styled.img`
  width: 48px;
  height: auto;
  border-radius: 100%;
`;

export default function ProfilePicture() {
  return <AboutImg src={ProfilePic}></AboutImg>;
}
