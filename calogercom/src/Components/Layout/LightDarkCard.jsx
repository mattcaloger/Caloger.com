import styled from "styled-components";

const LIGHT_COLOUR = '#ffffff99';
const DARK_COLOUR = 'rgba(0, 0, 0, .90);'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &>* {
        margin-bottom: 25px;
    }
    box-shadow:
        0 2px 2px rgba(0, 0, 0, 0.034),
        0 4px 4px rgba(0, 0, 0, 0.048),
        0 6px 6px rgba(0, 0, 0, 0.06),
        0 8px 8px rgba(0, 0, 0, 0.072),
        0 16px 16px rgba(0, 0, 0, 0.086),
        0 32px 32px rgba(0, 0, 0, 0.12);
    border-radius: 10px;
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