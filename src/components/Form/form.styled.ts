import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const Section2 = styled.div`
  width: 280px;
  display: grid;
  grid-template-columns: 176px 96px;
  gap: 0px 8px;
`;
export const AlignEnd = styled.div`
  align-self: self-end;
`;

export const Section3 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px 8px;
`;

export const AmoutnContainer = styled.div`
  max-width: 176px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const IsErr = styled.span`
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #ff0000;
`;

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0px 16px;
  margin-bottom: 16px;
`;
export const FlexRow2 = styled(FlexRow)`
  margin-top: 52px;
`;

export const AmountInput = styled.div`
  max-width: 176px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AmountCurrency = styled(AmountInput)`
  max-width: 96px;
  width: 100%;
`;

export const DetailsItem = styled.div`
  width: 100%;
  height: 32px;
  display: grid;
  grid-template-columns: 1fr 40px;
`;
export const DetailsContent = styled(DetailsItem)`
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border: 1px solid #cdcdcd;
`;
export const DetailsText = styled.div`
  padding-left: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #3a3a3a;
  display: flex;
  align-items: center;
`;

export const DetailsIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 4px 8px;
`;

export const DetailsButton = styled.div`
  width: 24px;
  height: 24px;
  margin: 4px 8px;
`;

export const FormContainer = styled.form`
  max-width: 576px;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 8px;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
`;
