import React, { useState } from 'react';
import styled from 'styled-components';
import { LightBody, DarkFooter, LightHeader } from './LightDarkCard';
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

    &:hover {
        font-weight: bold;
    }
`

export default function Carousel(props) {

    const imageCount = props.imgs.length;

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
        <LightHeader>

            <DisplayImage src={props.imgs[currentImage]} />
</LightHeader>
        <DarkFooter>
            <ThumbnailContainer>
            {/* <CarouselButton onClick={handlePrevious}>Previous</CarouselButton> */}
            {props.imgs.map((img, index) => {
                if(index === currentImage) {
                    return(
                        <HighlightedThumbnail onClick={handleThumbnailClick} key={index} id={index} src={img} />
                    )
                } else {
                    return (<Thumbnail onClick={handleThumbnailClick} key={index} id={index} src={img} />)
                }
                
            })}
            {/* <CarouselButton onClick={handleNext}>Next</CarouselButton> */}
        </ThumbnailContainer>
        </DarkFooter>
        
      </CarouselContainer>
  
  );
}
