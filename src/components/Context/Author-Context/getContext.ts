import { useContext } from "react";
import { AuthorContext } from "./authorContext.provider";

function GetContext() {
  return useContext(AuthorContext);
}

export default GetContext;
