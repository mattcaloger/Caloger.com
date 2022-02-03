import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LightBody, DarkFooter, LightHeader, LightFooter, DarkHeader } from './LightDarkCard';

import ArrowSVG from '../../img/arrow.svg'
import PageSubtitle from './PageSubtitle';

const Thumbnail = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
    transition: all ease-in .2s;
    margin: 5px;
    
    &:hover {
        transition: all linear .1s;
        transform: scale(.9);
    }
`

const HighlightedThumbnail = styled(Thumbnail)`
    transform: scale(1.2);
`

const DisplayImage = styled.img`
    display: block;
    object-fit: contain;
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    border-radius: 25px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 25px;
`

const CarouselContainer = styled.div`
   
        background: transparent;
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 100%;
        height: auto;
    
`

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media only screen and (max-width: 992px) {
        display: none;
        flex: 0;
    }

    &>* {
        flex: 1;
        display: flex;
        justify-content: center;
    }
`

const ControlContainer = styled.div`

    // display: flex;
    display: none;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    &>* {
        flex: 1;
        display: flex;
        justify-content: center;
    }
`

const CarouselButton = styled.img`
    user-select: none;
    cursor: default;
    width: 25px;
    height: 25px;
    transition: all linear .1s;
    &:hover {
        transform: scale(0.8);
    }
`

const PreviousButton = styled(CarouselButton)`
    transform: scaleX(-1);
    &:hover {
        transform: scaleX(-1) scale(0.8);
    }
`;

const DescriptionText = styled.div`
    text-align: center;
`

const NextButton = styled(CarouselButton)``;

export default function Carousel(props) {

    const imageCount = props.items.length;

    let [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalClock = setInterval(() => {
            handleNext();
        }, 10000)

        return () => clearInterval(intervalClock)
    }, [currentImage])

    const handleNext = () => {
        if(currentImage === imageCount-1){
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    }

    const handlePrevious = () => {
        if(currentImage === 0){
            setCurrentImage(imageCount-1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    }

    const handleThumbnailClick = (e) => {
        setCurrentImage(parseInt(e.target.id));
    }

  return (
      <CarouselContainer>

            <PageSubtitle>{props.items[currentImage].title}</PageSubtitle>

            <ImageContainer>
                <DisplayImage src={props.items[currentImage].image} />
            </ImageContainer>
            


        
      </CarouselContainer>
  
  );
}
