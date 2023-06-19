import { forwardRef } from "react";
import { InputRef } from "./inputDisabled.interface";
import { InputContainer } from "./inputDisabled.styled";

const InputDisabled = forwardRef<InputRef>((props: any, ref) => {
  return <InputContainer ref={ref} />;
});
export default InputDisabled;
