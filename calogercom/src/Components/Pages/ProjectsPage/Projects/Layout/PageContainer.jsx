import styled from "styled-components";
import { motion } from "framer-motion"

const PageContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    

    &>* {
        margin-top: 25px;
        margin-bottom: 25px;

    }

`;

export default PageContainer;