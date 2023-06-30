import { createContext, useEffect, useMemo, useState } from "react";
import {
  AuthorContextProviderType,
  AuthorContextType,
  SelectProps,
} from "./authorContext.interface";

export const AuthorContext = createContext({} as AuthorContextType);

export const AuthorContextProvider = ({
  children,
}: AuthorContextProviderType) => {
  const select: SelectProps = {
    costType: [
      "Cost Type 1",
      "Cost Type 2",
      "Cost Type 3",
      "Cost Type 4",
      "Cost Type 5",
    ],
    incurred: [
      "Incurred 1",
      "Incurred 2",
      "Incurred 3",
      "Incurred 4",
      "Incurred 5",
    ],
    currency: ["USA", "JPY", "VND", "EUR", "ENG"],
  };

  const [costType, setCostType] = useState<string>("");
  const [incurred, setIncurred] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [dateAndTime, setDateAndTime] = useState<string>("");
  const [files, setFiles] = useState<any>([]);
  const [shipmentIndexSelected, setShipmentIndexSelected] = useState<any>([]);
  const [shipmentValueSelected, setShipmentValueSelected] = useState<any>([]);
  const [isShipment, setIsShipment] = useState<boolean>(false);
  const [submitForm, setSubmitForm] = useState<boolean>(false);

  const value: AuthorContextType = {
    select,
    costType,
    setCostType,
    incurred,
    setIncurred,
    currency,
    setCurrency,
    amount,
    setAmount,
    dateAndTime,
    setDateAndTime,
    files,
    setFiles,
    shipmentIndexSelected,
    setShipmentIndexSelected,
    shipmentValueSelected,
    setShipmentValueSelected,
    isShipment,
    setIsShipment,
    submitForm,
    setSubmitForm,
  };

  useEffect(() => {
    if (
      costType === "" &&
      amount === "" &&
      incurred === "" &&
      dateAndTime === "" &&
      shipmentValueSelected.length === 0 &&
      files.length === 0
    ) {
      setSubmitForm(false);
    } else {
      setSubmitForm(true);
    }
  });

  return useMemo(() => {
    return (
      <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShipment, files, submitForm]);
};
