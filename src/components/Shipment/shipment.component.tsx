import { createPortal } from "react-dom";
import Typography from "../Typography/typography.component";
import { Exit, FlexRow, Modal, ShipmentContainer } from "./shipment.styled";
import ButtonIcon from "../Button/Button-Icon/buttonIcon.component";
import iconExit from "./icon-exit.svg";
import Search from "./Search/search.component";
import ButtonOutline from "../Button/Butoton-Outline/buttonOutline.conponent";
import Button from "../Button/Button-Container/button.component";
import Table from "./Table/table.component";
import GetContext from "../Context/Author-Context/getContext";
import GetShipmentContext from "../Context/Shipment-Context/getShipmentContext";

const portalRoot = document.getElementById("portal") as HTMLElement;

function Shipment() {
  const { setIsShipment, setShipmentIndexSelected, setShipmentValueSelected } =
    GetContext();
  const { api, indexSelected, setIndexSelected } = GetShipmentContext();

  const handleExitClick = () => {
    setIsShipment(false);
    document.body.style.removeProperty("overflow");
  };
  const handleCancelClick = () => {
    setIndexSelected([]);
  };

  const handleAddClick = () => {
    let values: any[] = [];
    api.forEach((item: any, index: number) => {
      indexSelected.forEach((value: number) => {
        if (index === value) {
          values.push(item);
        }
      });
    });
    setShipmentValueSelected(values);
    setShipmentIndexSelected(indexSelected);

    setIsShipment(false);
    document.body.style.removeProperty("overflow");
  };

  return createPortal(
    <Modal>
      <ShipmentContainer>
        <Exit>
          <ButtonIcon onClick={handleExitClick} children={iconExit} />
        </Exit>
        <Typography children="Shipments" as={"div"} type="Title" />

        <Search />

        <Table />

        <FlexRow>
          <ButtonOutline onClick={handleCancelClick} children="Cancel" />
          <Button onClick={handleAddClick} children="Add" />
        </FlexRow>
      </ShipmentContainer>
    </Modal>,
    portalRoot
  );
}

export default Shipment;
