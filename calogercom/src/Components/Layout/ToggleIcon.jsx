import React, { useState } from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS } from './BorderRadius';

const ToggleContainer = styled.div`
        font-weight: bold;
        align-items: center;
        justify-content: center;
        background: white;
        aspect-ratio: 1;
        border-radius: ${BORDER_RADIUS};
        border: 1px solid #00000022;
        text-align: center;

        & img {
            height: 50%;
            width: 50%;
        }
    `

export default function ToggleIcon(props) {
    
    const [isHovering, setIsHovering] = useState(false);



  return (
    <ToggleContainer onClick={() => setIsHovering(!isHovering)} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        { isHovering ? props.hover : props.default}
    </ToggleContainer>
  )
}
