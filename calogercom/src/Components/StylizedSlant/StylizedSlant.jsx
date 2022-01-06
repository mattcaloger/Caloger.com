import React from 'react'
import styled from 'styled-components';

const SlantHeaderStart = styled.div`
    position: absolute;
    top: -5px;
    width: 100%;

    height: 250px;
    background: linear-gradient(to right, #3F5EFB, #FC466B);
    transform: skewY(-5deg);
    transform-origin: bottom left;
    outline: 1px solid transparent;
    z-index: -1;
`

const SlantHeaderEnd = styled.div` 
    position: absolute;
    opacity: .5;
    top: -5px;
    width: 100%;
    height: 500px;
    background: linear-gradient(to right, #3F5EFB, #FC466B);
    transform: skewY(5deg);
    transform-origin: bottom right;
    outline: 1px solid transparent;
    z-index: -1;
`

export default function StylizedSlant() {
    return (
        <div>
            <SlantHeaderStart />
            <SlantHeaderEnd />
        </div>
    )
}
