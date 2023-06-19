import { useContext } from "react";
import { ShipmentContext } from "./shipmentContext.provider";

function GetShipmentContext() {
  return useContext(ShipmentContext);
}

export default GetShipmentContext;
