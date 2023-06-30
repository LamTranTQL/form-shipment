import { useState } from "react";
import GetContext from "../Context/Author-Context/getContext";
import Select from "../Select/select.component";
import {
  AlignEnd,
  AmoutnContainer,
  DetailsButton,
  DetailsContainer,
  DetailsContent,
  DetailsIcon,
  DetailsItem,
  DetailsText,
  FlexRow,
  FlexRow2,
  FormContainer,
  IsErr,
  Label,
  Section,
  Section2,
  Section3,
} from "./form.styled";

import { ShipmentContextProvider } from "../Context/Shipment-Context/shipmentContext.provider";
import Shipment from "../Shipment/shipment.component";
import ButtonTextAndIcon from "../Button/Button-Text-Icon/buttonTextAndIcon.component";
import iconAdd from "./icons/icon-add.svg";
import iconArrowDirection from "./icons/icon-arrow-direction.svg";
import IconDelete from "./icons/icon-delete.svg";
import Files from "../Files/files.component";
import TextArea from "../Textarea/textarea.component";
import SubmitButton from "../Button/Submit/submitButton.component";
import ButtonOutline from "../Button/Butoton-Outline/buttonOutline.conponent";
import ButtonIcon from "../Button/Button-Icon/buttonIcon.component";
import ButtonText from "../Button/Button-Text/buttonText.component";
import InputNumber from "../Input/Number/inputNumber.component";
import InputDateTime from "../Input/DateTime/inputDateTime.component";

function Form() {
  // const submitRef = useRef<HTMLInputElement>(null);
  const [isErr, setIsErr] = useState<boolean>(false);
  const {
    costType,
    setCostType,
    incurred,
    setIncurred,
    amount,
    setAmount,
    setCurrency,
    dateAndTime,
    files,
    setFiles,
    shipmentIndexSelected,
    setShipmentIndexSelected,
    shipmentValueSelected,
    setShipmentValueSelected,
    isShipment,
  } = GetContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ok");
    if (
      costType === "" ||
      incurred === "" ||
      amount === "" ||
      dateAndTime === "" ||
      shipmentValueSelected.length === 0 ||
      files.length === 0
    ) {
      setIsErr(true);
    } else {
      setIsErr(false);
    }
  };
  const cancelClick = (e: any) => {
    e.preventDefault();
    setCostType("");
    setAmount("");
    setCurrency("");
    setIncurred("");
    setShipmentIndexSelected([]);
    setShipmentValueSelected([]);
    setFiles([]);
  };

  const deleteAllClick = () => {
    setShipmentIndexSelected([]);
    setShipmentValueSelected([]);
  };

  const deleteShipment = (index: number) => {
    let indexCopy = [...shipmentIndexSelected];
    let valueCopy = [...shipmentValueSelected];
    indexCopy.splice(index, 1);
    valueCopy.splice(index, 1);

    setShipmentIndexSelected(indexCopy);
    setShipmentValueSelected(valueCopy);
  };

  console.log("re-render");

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Section>
          <Label>Cost type</Label>
          <Select type="cost type"></Select>
          {isErr && costType === "" && <IsErr>* Please select cost type</IsErr>}
        </Section>
        <Section2>
          <AmoutnContainer>
            <Label>Amount</Label>
            <InputNumber type="number" />
          </AmoutnContainer>

          <AlignEnd>
            <Select type="currency"></Select>
          </AlignEnd>
        </Section2>
        <Section>
          {isErr && amount === "" && <IsErr>* Please enter amount</IsErr>}
        </Section>
        <Section3>
          <Section>
            <label className="label">Incurred</label>
            <Select type="incurred"></Select>
            {isErr && incurred === "" && (
              <IsErr>* Please select incurred</IsErr>
            )}
          </Section>

          <Section>
            <label className="label">Date and time</label>
            <InputDateTime type="datetime-local" />
            {isErr && dateAndTime === "" && (
              <IsErr>* Please select date and time</IsErr>
            )}
          </Section>
        </Section3>
        <Section>
          <Label>Shipment details</Label>
          {shipmentValueSelected.length !== 0 && (
            <DetailsContainer>
              {shipmentValueSelected.map((value: any, index: number) => {
                return (
                  <DetailsItem key={index}>
                    <DetailsContent>
                      <DetailsText>{value.shipments_id}</DetailsText>
                      <DetailsText>{value.origin}</DetailsText>
                      <DetailsIcon src={iconArrowDirection} />
                      <DetailsText>{value.destination}</DetailsText>
                    </DetailsContent>
                    <DetailsButton>
                      <ButtonIcon
                        onClick={() => {
                          deleteShipment(index);
                        }}
                        children={IconDelete}
                      />
                    </DetailsButton>
                  </DetailsItem>
                );
              })}
            </DetailsContainer>
          )}

          {isErr && shipmentValueSelected.length === 0 && (
            <IsErr>* Please select shipment details</IsErr>
          )}
        </Section>
        {isShipment && (
          <ShipmentContextProvider>
            <Shipment />
          </ShipmentContextProvider>
        )}
        <FlexRow>
          <ButtonTextAndIcon icon={iconAdd} content="Add shipment" />
          {shipmentValueSelected.length !== 0 && (
            <ButtonText onClick={deleteAllClick} children="Delete All" />
          )}
        </FlexRow>
        <Section>
          <Label>Proof of cost</Label>
          <Files />
          {isErr && files.length === 0 && <IsErr>* Please choose a file</IsErr>}
        </Section>
        <Section>
          <Label>Remarks</Label>
          <TextArea />
        </Section>

        <FlexRow2>
          <SubmitButton children="Create" />
          <ButtonOutline onClick={cancelClick} children="Cancel" />
        </FlexRow2>
      </FormContainer>
    </div>
  );
}

export default Form;
