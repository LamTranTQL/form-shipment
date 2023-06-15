import styled from "styled-components";
import { BtnContaier, Text } from "../Button-Container/button.styled";

export const BtnOutline = styled(BtnContaier)`
  border: 1px solid #bdbdbd;
  background-color: transparent;
  :hover {
    background-color: transparent;
  }
  :active {
    background-color: transparent;
  }
`;

export const BtnOutlineText = styled(Text)`
  color: #093359;
`;
