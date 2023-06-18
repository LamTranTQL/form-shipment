import { createContext, useState } from "react";
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
  };

  return (
    <AuthorContext.Provider value={value}>{children}</AuthorContext.Provider>
  );
};
