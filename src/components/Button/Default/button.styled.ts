import styled from "styled-components";

export const BtnContaier = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: #0076c9;
  transition: all 0.2s linear;
  :hover {
    background-color: #064f86;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
  :active {
    background-color: #093359;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

export const Span = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;
