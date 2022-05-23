import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";
import { SHADOWS } from "./Shadows";

const LIGHT_COLOUR = "white";
const DARK_COLOUR = "black";
const DROP_SHADOW = SHADOWS.medium;
const DROP_SHADOW_HOVER = SHADOWS.large;

const CardContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background: ${LIGHT_COLOUR};

  align-items: center;

  transition: all ease-in 0.1s;

  border: 1px solid #00000022;
  border-top: 5px solid ${PRIMARY};

  border-radius: ${BORDER_RADIUS};
  @media (min-width: 768px) {
    &:hover {
    }
  }
`;

const CardBase = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    padding-top: 1em;
  }

  &:last-child {
    padding-top: 1em;
  }

  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;

  user-select: none;
  width: 100%;

  & > * {
    flex: 1;
  }

  @media only screen and (max-width: 1080px) {
    padding: 1em;
    text-align: center;
  }
`;

const HeaderBase = styled(CardBase)`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS}; ;
`;

const CardDivider = styled.hr`
  width: 100%;
  height: 1px;

  border: none;
  background: #00000022;
  margin: 0;
`;

const FooterBase = styled(CardBase)`
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS}; ;
`;

const LightHeader = styled(HeaderBase)`
  background: ${LIGHT_COLOUR};
`;

const DarkHeader = styled(HeaderBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

const LightBodyExpandable = styled(CardBase)`
  flex: 1;

  background: ${LIGHT_COLOUR};
`;

const LightBody = styled(CardBase)`
  background: ${LIGHT_COLOUR};
`;

const DarkBody = styled(CardBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

const LightFooter = styled(FooterBase)`
  background: #fdfdfd;
`;

const DarkFooter = styled(FooterBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

export {
  CardContainer,
  LightHeader,
  LightBody,
  LightFooter,
  DarkHeader,
  DarkBody,
  DarkFooter,
  LIGHT_COLOUR,
  DARK_COLOUR,
  DROP_SHADOW,
  DROP_SHADOW_HOVER,
  CardDivider,
  LightBodyExpandable,
};
