import React from 'react';
import styled from 'styled-components';

export const IconGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(5, 1fr); 
    gap: 20px 20px; 

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr); 
        grid-template-rows: repeat(5, 1fr); 
        gap: 20px 20px;
    }

    *>*{
        display: flex;
        justify-content: center;
    }


`

