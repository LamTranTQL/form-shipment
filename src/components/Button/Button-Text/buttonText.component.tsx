import { forwardRef } from "react";
import { Ref } from "../Button-Container/button.interface";
import { BtnTextProps } from "./buttonText.interface";
import { BtnText } from "./buttonText.styled";

const ButtonText = forwardRef<Ref, BtnTextProps>((props, ref) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    props.onClick();
  };
  return (
    <BtnText onClick={handleClick} ref={ref}>
      {props.children}
    </BtnText>
  );
});

export default ButtonText;
