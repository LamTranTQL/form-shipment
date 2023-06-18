import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Frame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr 28px;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #424242;
`;

export const Size = styled(Name)`
  font-size: 10px;
  line-height: 12px;
  color: #888888;
`;

export const Attachment = styled.img`
  width: 20px;
  height: 20px;
`;

export const Delete = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  margin-top: 4px;
`;
