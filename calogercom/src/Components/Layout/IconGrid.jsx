import React from 'react';
import styled from 'styled-components';

export const IconGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(7vw, 1fr));
    grid-gap: 1em;

  align-items: center;
  justify-content: center;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr); 
        gap: 1em;
    }

    &>*{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }


`

