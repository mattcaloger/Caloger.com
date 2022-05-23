import styled from "styled-components";
import { BORDER_RADIUS } from "./BorderRadius";

const Tag = styled.div`
  border-radius: ${BORDER_RADIUS};
  user-select: none;
  cursor: default;
  color: #26a69a;
  font-size: 18px;

  &:first-child {
    padding-left: 0px;
  }
`;

export default Tag;
