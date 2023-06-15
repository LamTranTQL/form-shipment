import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";
import { BtnTextProps } from "./buttonText.interface";
import { BtnText } from "./buttonText.styled";

const ButtonText = forwardRef<Ref, BtnTextProps>((props, ref) => {
  return <BtnText ref={ref}>{props.children}</BtnText>;
});

export default ButtonText;
