import { forwardRef } from "react";
import { ButtonProps, Ref } from "../Button-Container/button.interface";
import { Span } from "../Button-Container/button.styled";
import { BtnOutline, BtnOutlineText } from "./buttonOutline.styled";

const ButtonOutline = forwardRef<Ref, ButtonProps>((props, ref) => {
  return (
    <BtnOutline>
      <Span>
        <BtnOutlineText>{props.children}</BtnOutlineText>
      </Span>
    </BtnOutline>
  );
});

export default ButtonOutline;
