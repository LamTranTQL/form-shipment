import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";
import { Span } from "../Button-Container/button.styled";
import { BtnOutline, BtnOutlineText } from "./buttonOutline.styled";
import { ButtonOutlineProps } from "./buttonOutline.interface";

const ButtonOutline = forwardRef<Ref, ButtonOutlineProps>((props, ref) => {
  return (
    <BtnOutline onClick={props.onClick}>
      <Span>
        <BtnOutlineText>{props.children}</BtnOutlineText>
      </Span>
    </BtnOutline>
  );
});

export default ButtonOutline;
