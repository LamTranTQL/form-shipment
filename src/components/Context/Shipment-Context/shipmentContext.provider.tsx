import { createContext, useEffect, useState } from "react";
import {
  ShipmentContextProviderType,
  shipmentContextType,
} from "./shipmentContext.interface";
import GetContext from "../Author-Context/getContext";

export const ShipmentContext = createContext({} as shipmentContextType);

export const ShipmentContextProvider = ({
  children,
}: ShipmentContextProviderType) => {
  const { shipmentIndexSelected } = GetContext();
  const [api, setApi] = useState<any>([]);
  const [indexSelected, setIndexSelected] = useState<any>([
    ...shipmentIndexSelected,
  ]);
  const [apiSearch, setApiSearch] = useState<any>([]);
  const [searchRender, setSearchRender] = useState<boolean>(false);

  useEffect(() => {
    let requestOptions: RequestInit = {
      method: "GET",
      redirect: "manual",
    };
    let url = "https://648fcc931e6aa71680ca17e4.mockapi.io/shipments";
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => setApi(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <ShipmentContext.Provider
      value={{
        api,
        indexSelected,
        setIndexSelected,
        apiSearch,
        setApiSearch,
        searchRender,
        setSearchRender,
      }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};
