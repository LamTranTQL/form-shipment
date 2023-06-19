import { ReactNode } from "react";

export interface shipmentContextType {
  api: any;
  indexSelected: any;
  setIndexSelected: any;
  apiSearch: any[];
  setApiSearch: any;
  searchRender: boolean;
  setSearchRender: any;
}

export interface ShipmentContextProviderType {
  children: ReactNode;
}
