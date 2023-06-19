import { forwardRef } from "react";
import { ButtonProps, Ref } from "./button.interface";
import { BtnContaier, Span, Text } from "./button.styled";

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  return (
    <BtnContaier onClick={props.onClick}>
      <Span>
        <Text>{props.children}</Text>
      </Span>
    </BtnContaier>
  );
});

export default Button;
