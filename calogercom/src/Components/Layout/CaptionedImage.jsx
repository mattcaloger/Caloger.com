import styled from "styled-components"
import React from 'react'; 
import { BORDER_RADIUS } from "./BorderRadius";

export const DisplayImage = styled.img`
    display: block;
    object-fit: contain;
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    border: 1px solid grey;
    margin-bottom: 25px;

`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: inherit;
    height: auto; 
    border-radius: ${BORDER_RADIUS};

    margin-top: 25px;
    margin-bottom: 25px;
`

const DescriptionText = styled.div`
font-size: 16px;
    text-align: center;
`



export default function CaptionedImage(props) {
  return (
  <ImageContainer>
      <DisplayImage src={props.image} alt={props.description} />
      <DescriptionText>{props.description}</DescriptionText>
  </ImageContainer>
  );
}
