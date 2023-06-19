import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  height: 300px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: #ffffff;
  display: grid;
  grid-template-rows: 40px 1fr;
  overflow: hidden;
`;

export const THeader = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40px 3fr 2fr 2fr;
  background-color: #051f35;
`;

export const OverFlow = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
`;

export const Tbody = styled.div`
  width: 100%;
  height: 288px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Row = styled(THeader)`
  height: 48px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const Description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #424242;
`;
