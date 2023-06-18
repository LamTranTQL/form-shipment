import styled from "styled-components";

export const FileContainer = styled.div`
  width: 100%;
  border: 1px dashed #bdbdbd;
  border-radius: 2px;
  background-color: #f5f5f5;
  padding: 23px 15px;
`;

export const FlexCols = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px 0px;
`;

export const FlexCols2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #3a3a3a;
`;

export const Descriptions = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
`;

export const LinkFile = styled(Title)`
  color: #0f61fd;
  cursor: pointer;
`;
