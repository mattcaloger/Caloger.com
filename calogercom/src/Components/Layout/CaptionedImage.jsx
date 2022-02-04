import styled from "styled-components"
import React from 'react'; 
import PageSubtitle from "./PageSubtitle";

export const DisplayImage = styled.img`
    display: block;
    object-fit: contain;
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 25px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: inherit;
    height: auto; 

    border-radius: 25px;

    &>* {
        margin-top: 25px;
        margin-bottom: 25px;
    }
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
