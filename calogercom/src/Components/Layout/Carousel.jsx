import React, { useState } from 'react';
import styled from 'styled-components';
import { LightBody, DarkFooter, LightHeader, LightFooter } from './LightDarkCard';

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
    width: 100%;
    object-fit: contain;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`

const CarouselContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    
    
`

const ThumbnailContainer = styled.div`
    display: flex;
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

const NextButton = styled(CarouselButton)``;

export default function Carousel(props) {

    const imageCount = props.items.length;

    let [currentImage, setCurrentImage] = useState(0);

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

            <DisplayImage src={props.items[currentImage].image} />

              
        <DarkFooter>
            <p>
                {props.items[currentImage].description}
            </p> 
            <ThumbnailContainer>
            <PreviousButton src={ArrowSVG} onClick={handlePrevious}></PreviousButton>
            {props.items.map((item, index) => {
                if(index === currentImage) {
                    return(
                        <HighlightedThumbnail onClick={handleThumbnailClick} key={index} id={index} src={item.image} />
                    )
                } else {
                    return (<Thumbnail onClick={handleThumbnailClick} key={index} id={index} src={item.image} />)
                }
                
            })}
            <NextButton src={ArrowSVG} onClick={handleNext}></NextButton>
        </ThumbnailContainer>
        </DarkFooter>
        
      </CarouselContainer>
  
  );
}
