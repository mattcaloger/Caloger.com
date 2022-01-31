import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'

export const IconGrid = styled(motion.div)`
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    gap: 20px 20px; 

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); 
        grid-template-rows: repeat(6, 1fr); 
        gap: 20px 20px;
    }

    *>*{
        display: flex;
        justify-content: center;
    }


`

