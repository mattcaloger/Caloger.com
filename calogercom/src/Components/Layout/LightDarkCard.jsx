import styled from "styled-components";

const LIGHT_COLOUR = 'rgba(255, 255, 255, .55);';
const DARK_COLOUR = 'rgba(0, 0, 0, .90);'

const CardContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: all ease-in .1s;
    
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 10px;
    
    &:hover {
        transform:scale(1.1);
    }
    
    &>* {
        margin-bottom: 25px;
    }
`

const CardBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 20px;
    user-select: none;
    width: 100%;
    &>* {
        flex: 1;
        margin-Top: 25px;
        margin-bottom: 25px;
    }
`

const HeaderBase = styled(CardBase)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`

const FooterBase = styled(CardBase)`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const LightHeader = styled(HeaderBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const DarkHeader = styled(HeaderBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const LightBody = styled(CardBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const DarkBody = styled(CardBase)`
    color: white;
    background: ${DARK_COLOUR};
`

const LightFooter = styled(FooterBase)`
    color: black;
    background: ${LIGHT_COLOUR};
`

const DarkFooter = styled(FooterBase)`
    color: white;
    background: ${DARK_COLOUR};
`

export { CardContainer, LightHeader, LightBody, LightFooter, DarkHeader, DarkBody, DarkFooter }