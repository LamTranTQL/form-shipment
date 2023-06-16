import { ReactNode } from "react";

export interface AuthorContextType {
  select: any;
}

export interface AuthorContextProviderType {
  children: ReactNode;
}

export interface SelectProps {
  costType: any;
  incurred: any;
  currency: any;
}
