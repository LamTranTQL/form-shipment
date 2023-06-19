import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ShipmentContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: 500px;
  margin: 50px auto;
  padding: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 0px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FlexRow = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 0px 8px;
`;

export const Exit = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 16px;
`;
