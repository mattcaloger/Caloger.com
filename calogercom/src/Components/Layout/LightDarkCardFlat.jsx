import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";
import { PRIMARY } from "./Colors";

const LIGHT_COLOUR = "white";
const DARK_COLOUR = "black";

const FlatCardContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all ease-in 0.1s;
  color: white;
`;

const FlatCardBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  user-select: none;

  & > * {
    flex: 1;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 992px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;

    & > * {
      margin-top: 1em;
      margin-bottom: 1em;
    }
  }
`;

const FlatHeaderBase = styled(FlatCardBase)`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS}; ;
`;

const FlatFooterBase = styled(FlatCardBase)`
  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS}; ;
`;

const FlatLightHeader = styled(FlatHeaderBase)``;

const FlatDarkHeader = styled(FlatHeaderBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

const FlatLightBody = styled(FlatCardBase)``;

const FlatDarkBody = styled(FlatCardBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

const FlatLightFooter = styled(FlatFooterBase)``;

const FlatDarkFooter = styled(FlatFooterBase)`
  color: white;
  background: ${DARK_COLOUR};
`;

export {
  FlatCardContainer,
  FlatLightHeader,
  FlatLightBody,
  FlatLightFooter,
  FlatDarkHeader,
  FlatDarkBody,
  FlatDarkFooter,
  LIGHT_COLOUR,
  DARK_COLOUR,
};
