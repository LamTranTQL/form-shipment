import { createContext } from "react";
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

  return (
    <AuthorContext.Provider value={{ select }}>
      {children}
    </AuthorContext.Provider>
  );
};
