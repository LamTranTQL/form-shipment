import styled from "styled-components";

export const TextAreaContainer = styled.div`
  width: 100%;
  border: 1px solid #cdcdcd;
  padding: 7px 11px;
  overflow: hidden;
`;

export const Content = styled.textarea`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #3a3a3a;
  resize: none;
  border: none;
  outline: none;
`;

export const Counter = styled.div`
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  color: #888888;
`;

export const FlexCols = styled.div`
  max-width: 576px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px 0px;
`;
