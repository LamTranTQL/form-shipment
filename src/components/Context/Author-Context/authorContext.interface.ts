import { ReactNode } from "react";

export interface AuthorContextType {
  select: any;
  costType: string;
  setCostType: any;
  incurred: string;
  setIncurred: any;
  currency: string;
  setCurrency: any;
  amount: string;
  setAmount: any;
  dateAndTime: string;
  setDateAndTime: any;
  files: any[];
  setFiles: any;
}

export interface AuthorContextProviderType {
  children: ReactNode;
}

export interface SelectProps {
  costType: any;
  incurred: any;
  currency: any;
}
