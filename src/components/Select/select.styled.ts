import styled from "styled-components";

export const SelectContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  padding: 7px 35px 7px 11px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const SelectOptionsContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export const SelectItem = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 4px 8px 4px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #424242;
  :hover {
    background-color: #e0e0e0;
  }
`;
