import { createPortal } from "react-dom";
import Typography from "../Typography/typography.component";
import { Exit, FlexRow, Modal, ShipmentContainer } from "./shipment.styled";
import ButtonIcon from "../Button/Button-Icon/buttonIcon.component";
import iconExit from "./icon-exit.svg";
import Search from "./Search/search.component";
import ButtonOutline from "../Button/Butoton-Outline/buttonOutline.conponent";
import Button from "../Button/Button-Container/button.component";
import Table from "./Table/table.component";

const portalRoot = document.getElementById("portal") as HTMLElement;

function Shipment() {
  // context
  // const setIsShipment = GetContext().setIsShipment;
  // const setShipmentIndexSelected = GetContext().setShipmentIndexSelected;
  // const setShipmentValueSelected = GetContext().setShipmentValueSelected;
  // const api = GetShipmentContext().api;
  // const indexSelected = GetShipmentContext().indexSelected;
  // const setIndexSelected = GetShipmentContext().setIndexSelected;

  // const handleClick = () => {
  //   setIsShipment(false);
  //   document.body.style.removeProperty("overflow");
  // };
  // const cancelClick = () => {
  //   setIndexSelected([]);
  // };

  // const addClick = () => {
  //   let values: any[] = [];
  //   api.forEach((item: any, index: number) => {
  //     indexSelected.forEach((value: number) => {
  //       if (index === value) {
  //         values.push(item);
  //       }
  //     });
  //   });
  //   setShipmentValueSelected(values);
  //   setShipmentIndexSelected(indexSelected);

  //   setIsShipment(false);
  //   document.body.style.removeProperty("overflow");
  // };

  return createPortal(
    <Modal>
      <ShipmentContainer>
        <Exit>
          <ButtonIcon children={iconExit} />
        </Exit>
        <Typography children="Shipments" as={"div"} type="Title" />

        <Search />

        <Table />

        <FlexRow>
          <ButtonOutline children="Clear" />
          <Button children="Add" />
        </FlexRow>
      </ShipmentContainer>
    </Modal>,
    portalRoot
  );
}

export default Shipment;
